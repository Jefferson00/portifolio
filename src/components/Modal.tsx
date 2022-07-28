import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";
import styles from "../styles/components/Modal.module.css";

export function Modal() {
  const { isModalOpen, closeModal, selectedProject } =
    useContext(ProjectsContext);
  let cont = 0;
  let hideTimeout: NodeJS.Timeout;
  let firstTimeout: NodeJS.Timeout;

  useEffect(() => {
    let modal = document.getElementById("modal");
    if (modal) {
      if (isModalOpen) {
        modal.classList.remove(styles.modalClose);
        modal.classList.add(styles.modalOpen);
      } else {
        modal.classList.remove(styles.modalOpen);
      }
      let info = document.getElementById("information");
      firstTimeout = setTimeout(() => {
        info.classList.add(styles.hide);
      }, 10000);
    }
  }, [isModalOpen]);

  function handleInformations() {
    clearTimeout(firstTimeout);
    clearTimeout(hideTimeout);
    let info = document.getElementById("information");
    info.classList.toggle(styles.hide);
    hideInformationsAfterSomeTime();
  }

  function hideInformationsAfterSomeTime() {
    let info = document.getElementById("information");
    hideTimeout = setTimeout(() => {
      info.classList.add(styles.hide);
    }, 30000);
  }

  function showInformations() {
    let info = document.getElementById("information");
    info.classList.remove(styles.hide);
  }

  function close() {
    let modal = document.getElementById("modal");
    modal.classList.add(styles.modalClose);
    closeModal();
    setTimeout(() => {
      resetImages();
      showInformations();
    }, 500);
  }

  function resetImages() {
    cont = 0;
    const imgc = document.querySelector("#imageContainer");
    let galleryLenght = imgc.getElementsByTagName("img").length;
    let gallery = imgc.getElementsByTagName("img");
    for (let i = 0; i < galleryLenght; i++) {
      gallery[i].classList.add(styles.hiddenImage);
      gallery[i].classList.remove(styles.showNextImage);
      gallery[i].classList.remove(styles.showPrevImage);
    }
    gallery[0].classList.remove(styles.hiddenImage);
  }

  function nextImage() {
    const imgc = document.querySelector("#imageContainer");
    let galleryLenght = imgc.getElementsByTagName("img").length;
    let gallery = imgc.getElementsByTagName("img");
    for (let i = 0; i < galleryLenght; i++) {
      gallery[i].classList.add(styles.hiddenImage);
      gallery[i].classList.remove(styles.showNextImage);
      gallery[i].classList.remove(styles.showPrevImage);
    }
    if (cont + 1 > galleryLenght - 1) {
      cont = 0;
    } else {
      cont = cont + 1;
    }
    gallery[cont].classList.remove(styles.hiddenImage);
    gallery[cont].classList.add(styles.showNextImage);
  }

  function prevImage() {
    const imgc = document.querySelector("#imageContainer");
    let galleryLenght = imgc.getElementsByTagName("img").length;
    let gallery = imgc.getElementsByTagName("img");
    for (let i = 0; i < galleryLenght; i++) {
      gallery[i].classList.add(styles.hiddenImage);
      gallery[i].classList.remove(styles.showNextImage);
      gallery[i].classList.remove(styles.showPrevImage);
    }
    if (cont - 1 < 0) {
      cont = galleryLenght - 1;
    } else {
      cont = cont - 1;
    }
    gallery[cont].classList.remove(styles.hiddenImage);
    gallery[cont].classList.add(styles.showPrevImage);
  }

  return (
    <>
      {selectedProject && (
        <div className={styles.modalContainer} id="modal">
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => close()}></span>
            <span
              className={styles.navButton}
              id="prev"
              onClick={() => prevImage()}
            ></span>
            <span
              className={styles.navButton}
              id="next"
              style={{
                right: 0,
                margin: "0 1.5rem 0 0",
                backgroundImage: 'url("/icons/next.svg")',
              }}
              onClick={() => nextImage()}
            ></span>
            <div className={styles.imagemContainer} id="imageContainer">
              {selectedProject.gallery.map((image, index) => {
                return index == 0 ? (
                  <img
                    src={image.image}
                    alt={selectedProject.title}
                    key={index}
                  />
                ) : (
                  <img
                    src={image.image}
                    alt={selectedProject.title}
                    key={index}
                    className={styles.hiddenImage}
                  />
                );
              })}
            </div>
            <div className={`${styles.informationsContainer}`} id="information">
              <span
                className={styles.expandButton}
                onClick={handleInformations}
              />
              <strong>{selectedProject.title}</strong>
              <p>{selectedProject.description}</p>
              <p className={styles.title}>
                Tecnologias utilizadas:
                {selectedProject.technologies.map((tech, index) => {
                  return index == selectedProject.technologies.length - 1
                    ? " " + tech.title + ""
                    : " " + tech.title + ",";
                })}
              </p>
              <p className={styles.title}>
                Repositório:
                <a
                  href={selectedProject.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github/{selectedProject.title}
                </a>
              </p>
              <p className={styles.title}>
                Link:
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  site/{selectedProject.title}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
