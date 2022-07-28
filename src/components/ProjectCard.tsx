import styles from "../styles/components/ProjectCard.module.css";
import { FiEdit, FiArchive, FiSave, FiTrash, FiEye } from "react-icons/fi";
import { ChangeEvent, useEffect, useState } from "react";
import { Icons, IconNames } from "./Icons";
import { technologiesList } from "../utils/technologiesList";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import api from "../services/api";
import dynamic from "next/dynamic";
import Link from "next/link";

import { storage } from "../services/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

import "@uiw/react-textarea-code-editor/dist.css";

const TextEditor = dynamic(() => import("./TextEditor"), {
  ssr: false,
});
const CodeEditor = dynamic(() => import("./CodeEditor"), {
  ssr: false,
});

interface TechnologiesData {
  title: string;
  class: string;
}

interface ProjectData {
  _id?: string;
  id: string;
  title: string;
  description: string;
  technologies: TechnologiesData[];
  repository: string;
  link: string;
  thumbnail: string;
  thumbnail_small: string;
  resume: string;
  useCase: string;
  order: number;
  type: string;
  arquived: boolean;
  gallery: {
    image: string;
  }[];
}

interface FormData {
  id: string;
  title: string;
  description: string;
  repository: string;
  link: string;
  resume: string;
  useCase: string;
  order: number;
}

interface ProjectCardProps {
  project: ProjectData;
  handleDelete: (id: string) => void;
}

interface ImgData {
  preview: string;
  raw: File;
}

const schema = yup.object({
  title: yup
    .string()
    .required("Campo obrigátorio")
    .min(2, "deve ter no mínimo 2 caracteres")
    .max(25, "deve ter no máximo 25 caracteres"),
  id: yup.string().required("Campo obrigátorio"),
  order: yup.number().required("Campo obrigátorio").min(1),
  repository: yup.string().required("Campo obrigátorio"),
  link: yup.string().required("Campo obrigátorio"),
  useCase: yup.string().required("Campo obrigátorio"),
  resume: yup.string().required("Campo obrigátorio"),
});

export default function ProjectCard({
  project,
  handleDelete,
}: ProjectCardProps) {
  const [editHasClicked, setEditHasClicked] = useState(false);
  const [technologiesState, setTechnologiesState] = useState([]);
  const [thumbnailState, setThumbnailState] = useState<ImgData>(null);
  const [galleryState, setGalleryState] = useState<ImgData[]>([]);
  const [typeState, setTypeState] = useState(project.type);
  const [titleState, setTitleState] = useState(project.title);
  const [isArquived, setIsArquived] = useState(project.arquived);

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, setValue } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleClickEdit = () => {
    setEditHasClicked((prevState) => !prevState);
  };

  const hasTechnologie = (tech) => {
    return technologiesState?.find((t) => t.title === tech.title);
  };

  const handleChangeThumbnailState = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      if (
        target.files[0].type === "image/jpeg" ||
        target.files[0].type === "image/png" ||
        target.files[0].type === "image/jpge" ||
        target.files[0].type === "image/svg"
      ) {
        setThumbnailState({
          preview: URL.createObjectURL(target.files[0]),
          raw: target.files[0],
        });
      } else {
      }
    }
  };

  const handleChangeGalleryState = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      if (
        target.files[0].type === "image/jpeg" ||
        target.files[0].type === "image/png" ||
        target.files[0].type === "image/jpge" ||
        target.files[0].type === "image/svg"
      ) {
        setGalleryState([
          ...galleryState,
          {
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
          },
        ]);
      } else {
      }
    }
  };

  const toggleTechnologie = (tech) => {
    const techFound = technologiesState.find((t) => t.title === tech.title);

    if (techFound) {
      setTechnologiesState(
        technologiesState.filter((t) => t.title !== tech.title)
      );
    } else {
      setTechnologiesState([...technologiesState, tech]);
    }
  };

  const validateBeforeSubmit = () => {
    let hasThumbnail = false;

    if (!project.thumbnail || project.thumbnail !== thumbnailState.preview) {
      if (thumbnailState.raw) {
        hasThumbnail = true;
      } else {
        hasThumbnail = false;
      }
    } else {
      hasThumbnail = true;
    }
    const hasTechnologies = technologiesState.length > 0;
    const hasGallery = galleryState.length > 0;
    const hasType = typeState === "primary" || typeState === "secondary";

    return hasThumbnail && hasTechnologies && hasGallery && hasType;
  };

  const uploadImage = async (path: string, file: File) => {
    const storageRef = ref(
      storage,
      `projects/${path}/${file.name}-${new Date().getMilliseconds()}`
    );

    const res = await uploadBytes(storageRef, file);

    const urlUploaded = await getDownloadURL(res.ref);

    return urlUploaded;
  };

  const getGalleryDifference = () => {
    return galleryState.filter((gallery) => {
      return !project.gallery.some((gallery2) => {
        return gallery.preview === gallery2.image;
      });
    });
  };

  const handleCreate = async (data: FormData) => {
    const thumbnailUploaded = await uploadImage(data.id, thumbnailState.raw);
    let galleryCreated = [];

    await Promise.all(
      galleryState.map(async (gallery) => {
        const imageUploaded = await uploadImage(data.id, gallery.raw);
        galleryCreated.push({
          image: imageUploaded,
        });
      })
    );

    const input = {
      _id: project._id,
      thumbnail: thumbnailUploaded,
      gallery: galleryCreated,
      type: typeState,
      technologies: technologiesState,
      arquived: true,
      ...data,
    };

    try {
      const res = await api.post("/projects", input);
      if (res.data.modifiedCount > 0) {
        setTitleState(data.title);
        setEditHasClicked(false);
        alert("Projeto criado com sucesso!");
      }
    } catch (error) {
      alert("Erro ao criar");
      console.log(error);
    }
  };

  const handleUpdate = async (data: FormData) => {
    let thumbnailUploaded = null;
    if (project.thumbnail !== thumbnailState.preview) {
      thumbnailUploaded = await uploadImage(data.id, thumbnailState.raw);
    }

    const galleryDifference = getGalleryDifference();

    let newGalleryUploaded = [];

    if (galleryDifference.length > 0) {
      await Promise.all(
        galleryDifference.map(async (gallery) => {
          const imageUploaded = await uploadImage(data.id, gallery.raw);
          newGalleryUploaded.push({
            image: imageUploaded,
          });
        })
      );
    }

    const galleryStateFiltered = galleryState.filter((gallery) => {
      return !galleryDifference.some((gallery2) => {
        return gallery.preview === gallery2.preview;
      });
    });

    let galleryUpdated = [];

    galleryStateFiltered.map((gallery) => {
      galleryUpdated.push({
        image: gallery.preview,
      });
    });

    const input = {
      _id: project._id,
      thumbnail: thumbnailUploaded ? thumbnailUploaded : project.thumbnail,
      gallery: [...galleryUpdated, ...newGalleryUploaded],
      type: typeState,
      technologies: technologiesState,
      ...data,
    };

    try {
      const res = await api.put("/projects", input);
      if (res.data.modifiedCount > 0) {
        setTitleState(data.title);
        setEditHasClicked(false);
        alert("Projeto atualizado com sucesso!");
      }
    } catch (error) {
      alert("Erro ao atualizar");
      console.log(error);
    }
  };

  const handleChangeArquivedStatus = async () => {
    setLoading(true);
    const input = {
      _id: project._id,
      arquived: !project.arquived,
    };

    try {
      const res = await api.put("/projects", input);
      if (res.data.modifiedCount > 0) {
        setIsArquived(!project.arquived);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFromGallery = (image: string) => {
    setGalleryState((prevState) =>
      prevState.filter((img) => img.preview !== image)
    );
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!validateBeforeSubmit()) {
      alert("Verifique os campos");
      return;
    }
    setLoading(true);
    if (project._id) {
      await handleUpdate(data);
    } else {
      await handleCreate(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    setValue("title", project.title);
    setValue("description", project.description);
    setValue("id", project.id);
    setValue("link", project.link);
    setValue("repository", project.repository);
    setValue("resume", project.resume);
    setValue("useCase", project.useCase);
    setValue("order", project.order);

    setTechnologiesState(project.technologies);

    const gallery: ImgData[] = [];

    project.gallery.map((img) => {
      gallery.push({
        preview: img.image,
        raw: null,
      });
    });

    setGalleryState(gallery);
    setThumbnailState({
      preview: project.thumbnail,
      raw: null,
    });
  }, [project]);

  return (
    <>
      {loading && (
        <div className={styles.loading}>
          <img src="/load.svg" alt="loading" />
        </div>
      )}

      <div
        className={styles.container}
        style={{ height: editHasClicked ? "auto" : 50 }}
      >
        <header>
          <span>{titleState}</span>
          <div className={styles.buttonContainer}>
            <Link href={`/projects/${project.id}#project`}>
              <a target="_blank">
                <FiEye color="#FFF" size={24} />
              </a>
            </Link>
            <button>
              <FiEdit color="#F59D19" size={24} onClick={handleClickEdit} />
            </button>
            <button onClick={handleChangeArquivedStatus}>
              <FiArchive color={isArquived ? "#86eb57" : "#EB5757"} size={24} />
            </button>
            {project._id && (
              <button onClick={() => handleDelete(project._id)}>
                <FiTrash color="#EB5757" size={24} />
              </button>
            )}
          </div>
        </header>

        <div
          className={styles.content}
          style={{
            opacity: editHasClicked ? 1 : 0,
            visibility: editHasClicked ? "visible" : "hidden",
          }}
        >
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor="id" className={styles.required}>
                ID
              </label>
              <Controller
                name="id"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <input
                    required
                    type="text"
                    name="id"
                    onChange={field.onChange}
                    value={field.value}
                    placeholder="meu-projeto"
                  />
                )}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.required}>
                Título
              </label>
              <Controller
                name="title"
                defaultValue=""
                control={control}
                render={({ field, fieldState }) => (
                  <input
                    required
                    type="text"
                    name="title"
                    onChange={field.onChange}
                    value={field.value}
                    placeholder="Meu Projeto"
                  />
                )}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="order" className={styles.required}>
                Ordem de visualização
              </label>
              <Controller
                name="order"
                defaultValue={1}
                control={control}
                render={({ field, fieldState }) => (
                  <input
                    required
                    type="number"
                    name="order"
                    placeholder="1"
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.required}>Tipo de projeto</label>
              <div>
                <input
                  type="radio"
                  name="type"
                  value={typeState}
                  checked={typeState === "primary"}
                  onChange={() => setTypeState("primary")}
                />{" "}
                <label>Primary</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="type"
                  value={typeState}
                  checked={typeState === "secondary"}
                  onChange={() => setTypeState("secondary")}
                />{" "}
                <label>Secondary</label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.required}>
                Descrição
              </label>

              {/*  <Controller
              name="description"
              defaultValue=""
              control={control}
              render={({ field, fieldState }) => (
                <TextEditor name="description" field={field} />
              )}
            /> */}
              <Controller
                name="description"
                defaultValue=""
                control={control}
                render={({ field, fieldState }) => (
                  <CodeEditor name="description" field={field} />
                )}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="technologies" className={styles.required}>
                Tecnologias
              </label>

              <div className={styles.techList}>
                {technologiesList.map((tech) => (
                  <button
                    type="button"
                    key={Math.random()}
                    className={styles.techButton}
                    onClick={() => toggleTechnologie(tech)}
                  >
                    <Icons
                      name={tech.class as IconNames}
                      size={32}
                      fill={hasTechnologie(tech) ? "#F59D19" : "#fff"}
                    />
                    <span>{tech.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="repository" className={styles.required}>
                Repositorio
              </label>
              <Controller
                name="repository"
                defaultValue=""
                control={control}
                render={({ field, fieldState }) => (
                  <input
                    required
                    type="text"
                    name="repository"
                    placeholder="https://github.com/user/meu-projeto"
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="link" className={styles.required}>
                Link/ Demo
              </label>
              <Controller
                name="link"
                defaultValue=""
                control={control}
                render={({ field, fieldState }) => (
                  <input
                    required
                    type="text"
                    name="link"
                    placeholder="https://github.com/user/meu-projeto"
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="thumbnail" className={styles.required}>
                Thumbnail
              </label>
              {thumbnailState?.preview && (
                <img
                  src={thumbnailState.preview}
                  className={styles.thumbnail}
                />
              )}
              <input
                type="file"
                name="thumbnail"
                onChange={handleChangeThumbnailState}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="gallery" className={styles.required}>
                Galeria
              </label>
              <div className={styles.galleryContainer}>
                <div className={styles.gallerySlider}>
                  {galleryState?.length > 0 &&
                    galleryState.map((gallery) => {
                      if (gallery?.preview)
                        return (
                          <div
                            key={Math.random()}
                            className={styles.galleryItem}
                          >
                            <img src={gallery.preview} />
                            <span
                              onClick={() =>
                                handleDeleteFromGallery(gallery.preview)
                              }
                            >
                              <FiTrash />
                            </span>
                          </div>
                        );
                    })}
                </div>
              </div>
              <input
                type="file"
                name="gallery"
                onChange={handleChangeGalleryState}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="useCase" className={styles.required}>
                Caso de uso
              </label>
              <Controller
                name="useCase"
                defaultValue=""
                control={control}
                render={({ field, fieldState }) => (
                  <CodeEditor name="useCase" field={field} />
                )}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="resume" className={styles.required}>
                Resumo
              </label>
              <Controller
                name="resume"
                defaultValue=""
                control={control}
                render={({ field, fieldState }) => (
                  <TextEditor name="resume" field={field} />
                )}
              />
            </div>

            <button type="submit" className={styles.saveButton}>
              Salvar
              <FiSave size={32} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
