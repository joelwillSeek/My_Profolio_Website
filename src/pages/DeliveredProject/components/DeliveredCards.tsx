import React from "react";
import { Button, Card } from "react-bootstrap";
import comingSoon from "../../../assets/DeliveredProject/commingSoon.png";
import deliveredCard from "../styles/deliveredcard.module.css";

export default function DeliveredCards({
  Name,
  githubLink,
  previewLink,
  image,
  description,
}: {
  Name: string;
  githubLink: string;
  previewLink: string;
  image: any;
  description: string;
}) {
  return (
    <>
      <Card style={{ width: "18rem" }} className={deliveredCard.card}>
        <Card.Img
          variant="top"
          style={{ maxHeight: "20rem" }}
          className={deliveredCard.img}
          src={image == "#" ? comingSoon : image}
        />
        <Card.Body className={deliveredCard.card_body}>
          <Card.Title>{Name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div id="center" className={deliveredCard.center}>
            {" "}
            <Button
              className={deliveredCard.button}
              variant="primary"
              href={githubLink}
            >
              {githubLink.trim().length > 0 ? "Github" : "Coming Soon"}
            </Button>
            <Button
              className={deliveredCard.button}
              variant="primary"
              href={previewLink == "#" ? "#" : previewLink}
            >
              {previewLink.trim().length > 0 ? "Preview" : "Coming Soon"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
