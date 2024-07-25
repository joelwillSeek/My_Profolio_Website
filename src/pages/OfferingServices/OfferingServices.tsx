import React from "react";
import { Card } from "react-bootstrap";
import offeringServicesStyle from "./styles/offeringservices.module.css";
import CardiconList from "./components/CardIconList";
import imageImports from "./ImageImport";

const {
  flutterIcon,
  expressJsIcon,
  nodeJSIcon,
  reactIcon,
  mongoIcon,
  androidIcon,
  javaIcon,
  kotlinIcon,
  unityIcon,
  cSharpIcon,
  godotIcon,
} = imageImports;

export default function OfferingServices() {
  return (
    <>
      <div>
        <div id="Top Text">
          <h1 className={offeringServicesStyle.header}>
            Offered Services<div className={"hr"}></div>
          </h1>
          <p className={offeringServicesStyle.textDescription}>
            The services that i can offer are listed below start from app dev to
            a start up company full stack website
          </p>
        </div>

        <div id="services" className={offeringServicesStyle.container}>
          <Card
            className={offeringServicesStyle.card}
            style={{ width: "100%" }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={offeringServicesStyle.titleContainer}>
                  <CardiconList imagePaths={[flutterIcon]} />
                  Cross Platform Development
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Android, Linux, Windows, Web ...
              </Card.Subtitle>
              <Card.Text>
                Using flutter to develop once and deploy. This convince can help
                a start up company And/Or Client to build a product with minimal
                build and maintenance cost.
              </Card.Text>
              <Card.Link href="#">See Some Projects</Card.Link>
              <Card.Link href="#">More On Flutter</Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "100%" }}
            className={offeringServicesStyle.card}
          >
            <Card.Body>
              <Card.Title
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={offeringServicesStyle.titleContainer}>
                  <CardiconList
                    imagePaths={[
                      mongoIcon,
                      reactIcon,
                      nodeJSIcon,
                      expressJsIcon,
                    ]}
                  />
                  Full Stack Web Development
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                MERN ( MongoDB, ExpressJS, React, NodeJs), will to learn more
                like Laravel (PHP)
              </Card.Subtitle>
              <Card.Text>
                Some times its best to develop natively for a client and the
                most used platform is cloud, Seeing this i can deliver a fulling
                working full stack website
              </Card.Text>
              <Card.Link href="#">See Some Projects</Card.Link>
              <Card.Link href="#">React</Card.Link>
              <Card.Link href="#">NodeJs</Card.Link>
              <Card.Link href="#">ExpressJS</Card.Link>
              <Card.Link href="#">MongoDB</Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "100%" }}
            className={offeringServicesStyle.card}
          >
            <Card.Body>
              <Card.Title
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={offeringServicesStyle.titleContainer}>
                  <CardiconList
                    imagePaths={[androidIcon, javaIcon, kotlinIcon]}
                  />
                  Android Development
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Natively Develop Android Apps using android studio and java OR
                Kotlin
              </Card.Subtitle>
              <Card.Text>
                Sometimes a natively built app is more performance and
                preferable for a client, Seeing this we can offer this services
                <p id="Warning">NOTE:</p> We Recommend cross platform for the
                easy of use and many platform support.
              </Card.Text>
              <Card.Link href="#">See Some Projects</Card.Link>
              <Card.Link href="#">Android Studio</Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "100%" }}
            className={offeringServicesStyle.card}
          >
            <Card.Body>
              <Card.Title
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={offeringServicesStyle.titleContainer}>
                  <CardiconList
                    imagePaths={[godotIcon, unityIcon, cSharpIcon]}
                  />
                  Game Development
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                I Have learned to use unity and godot for game development
              </Card.Subtitle>
              <Card.Text>
                For those out there that have an idea or want help in there
                projects,
                <p id="Warning">Note: </p> One person Can't build the next GTA
                Or Call Of Duty
              </Card.Text>
              <Card.Link href="#">See Some Projects</Card.Link>
              <Card.Link href="#">Android Studio</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
