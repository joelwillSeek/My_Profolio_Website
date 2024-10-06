import React from "react";
import deliveredCardsStyle from "../styles/deliveredcard.module.css";
import Carousel from "react-bootstrap/esm/Carousel";

export default function DeliveredCards({
  index,
  listOfImages,
  name,
  description,
  downloadLinks,
}: {
  index: number;
  listOfImages: Array<string>;
  name: string;
  description: string;
  downloadLinks: Array<{
    name: string;
    link: string;
    icon: string;
  }>;
}) {
  return (
    <>
      <div key={index} className={deliveredCardsStyle.container}>
        <Carousel>
          {listOfImages.map((image, index) => (
            <Carousel.Item interval={2500} key={index}>
              <div key={index}>
                <img src={image} alt="" className={deliveredCardsStyle.image} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div id="showOnHover" className={deliveredCardsStyle.hoverShow}>
          <div className={deliveredCardsStyle.dropBackground}></div>
          <div className={deliveredCardsStyle.innerContent}>
            <h6 className={deliveredCardsStyle.heading}>{name}</h6>
            <p>{description}</p>

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
        </div>
      </div>
    </>
  );
}
