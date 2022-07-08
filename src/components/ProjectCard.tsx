import styles from "../styles/components/ProjectCard.module.css";
import { FiEdit, FiArchive, FiSave } from "react-icons/fi";
import { ChangeEvent, useEffect, useState } from "react";
import { Icons, IconNames } from "./Icons";
import { technologiesList } from "../utils/technologiesList";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { connectToDatabase } from "../utils/mongodb";
import api from "../services/api";

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
});

export default function ProjectCard({ project }: ProjectCardProps) {
  const [editHasClicked, setEditHasClicked] = useState(false);
  const [technologiesState, setTechnologiesState] = useState([]);
  const [thumbnailState, setThumbnailState] = useState<ImgData>(null);
  const [galleryState, setGalleryState] = useState<ImgData[]>([]);
  const [typeState, setTypeState] = useState(project.type);
  const [titleState, setTitleState] = useState(project.title);
  const [isArquived, setIsArquived] = useState(project.arquived);

  const { control, handleSubmit, setValue } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleClickEdit = () => {
    setEditHasClicked((prevState) => !prevState);
  };

  const hasTechnologie = (tech) => {
    return technologiesState.find((t) => t.title === tech.title);
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (project._id) {
      const input = {
        _id: project._id,
        ...data,
      };

      try {
        const res = await api.put("/projects", input);
        if (res.data.modifiedCount > 0) {
          setTitleState(data.title);
          setEditHasClicked(false);
          alert("Atualizado com sucesso");
        }
      } catch (error) {
        alert("Erro ao atualizar");
        console.log(error);
      }
    }
  };

  const handleChangeArquivedStatus = async () => {
    const input = {
      _id: project._id,
      arquived: !project.arquived,
    };

    try {
      const res = await api.put("/projects", input);
      if (res.data.modifiedCount > 0) {
        setIsArquived(!project.arquived);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ height: editHasClicked ? "auto" : 50 }}
    >
      <header>
        <span>{titleState}</span>
        <div className={styles.buttonContainer}>
          <button>
            <FiEdit color="#F59D19" size={24} onClick={handleClickEdit} />
          </button>
          <button onClick={handleChangeArquivedStatus}>
            <FiArchive color={isArquived ? "#86eb57" : "#EB5757"} size={24} />
          </button>
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
                value="primary"
                checked={typeState === "primary"}
              />{" "}
              <label>Primary</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                value="secondary"
                checked={typeState === "secondary"}
              />{" "}
              <label>Secondary</label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.required}>
              Descrição
            </label>

            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <textarea
                  required
                  name="description"
                  rows={5}
                  onChange={field.onChange}
                  value={field.value}
                />
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
            {thumbnailState?.preview ? (
              <img src={thumbnailState.preview} />
            ) : (
              <input
                type="file"
                name="thumbnail"
                onChange={handleChangeThumbnailState}
              />
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="gallery" className={styles.required}>
              Galeria
            </label>
            <div className={styles.galleryContainer}>
              {galleryState?.length > 0 &&
                galleryState.map((gallery) => {
                  if (gallery?.preview) return <img src={gallery.preview} />;
                })}
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
              control={control}
              render={({ field, fieldState }) => (
                <textarea
                  required
                  name="useCase"
                  rows={5}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="resume" className={styles.required}>
              Resumo
            </label>
            <Controller
              name="resume"
              control={control}
              render={({ field, fieldState }) => (
                <textarea
                  required
                  name="resume"
                  rows={5}
                  onChange={field.onChange}
                  value={field.value}
                />
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
  );
}
