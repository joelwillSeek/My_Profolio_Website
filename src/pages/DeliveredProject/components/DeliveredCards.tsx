import React, { useRef } from "react";
import deliveredCardsStyle from "../styles/deliveredcard.module.css";
import Carousel from "react-bootstrap/esm/Carousel";
import MadeFromIcons from "./madeFromIcons";

export default function DeliveredCards({
  index,
  listOfImages,
  name,
  description,
  downloadLinks,
  madeByImages,
}: {
  index: number;
  listOfImages: Array<string>;
  name: string;
  description: string;
  madeByImages: Array<{
    name: string;
    link: string;
  }>;
  downloadLinks: Array<{
    name: string;
    link: string;
    icon: string;
  }>;
}) {
  const dialogImage = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <dialog ref={dialogImage}>
        <Carousel indicators={true} controls={true}>
          {listOfImages.map((image, index) => (
            <Carousel.Item key={index}>
              <div key={index} onClick={(event) => {}}>
                <img
                  src={image}
                  alt=""
                  className={deliveredCardsStyle.clickedFullscreen}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <button
          className={deliveredCardsStyle.dialogClose}
          onClick={() => {
            dialogImage.current?.close();
          }}
        >
          Close
        </button>
      </dialog>

      <div key={index} className={deliveredCardsStyle.container}>
        <Carousel>
          {listOfImages.map((image, index) => (
            <Carousel.Item key={index}>
              <div
                key={index}
                onClick={(event) => {
                  dialogImage.current?.showModal();
                }}
              >
                <img src={image} alt="" className={deliveredCardsStyle.image} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* <div id="showOnHover" >className={deliveredCardsStyle.hoverShow} */}
        {/* <div className={deliveredCardsStyle.dropBackground}></div> */}
        <div className={deliveredCardsStyle.innerContent}>
          <h6 className={deliveredCardsStyle.heading}>
            {name}
            <div className={deliveredCardsStyle.hr} />
          </h6>

          <p>{description}</p>

          <MadeFromIcons imagePaths={madeByImages} />

          {downloadLinks.map((download, index) => (
            <a
              href={download.link}
              key={index}
              className={deliveredCardsStyle.downloadLink}
            >
              <img src={download.icon} alt={download.name} />
              {download.name}
            </a>
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
