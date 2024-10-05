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
  godotIcon,
} = imageImports;

export default function OfferingServices() {
  return (
    <>
      <div id="offeringServices">
        <div id="Top Text">
          <h1 className={offeringServicesStyle.header}>
            Services Offered<div className={offeringServicesStyle.hr}></div>
          </h1>
          <p className={offeringServicesStyle.textDescription}>
            The services that i can offer are listed below start from app dev to
            a start up company full stack website
          </p>
        </div>

        <div id="services" className={offeringServicesStyle.container}>
          {bootstrapCardCustomized(
            "Cross Platform Development",
            "Android, Linux, Windows, Web ...",
            ` 
            Using flutter to develop once and deploy. This convince can help a+
            start up company And/Or Client to build a product with minimal build+
            and maintenance cost.
            
            `,
            [
              {
                nameOfTool: "flutter",
                linkToDocumentation:
                  "`https://flutter.dev/?gad_source=1&gclid=CjwKCAjwx4O4BhAnEiwA42SbVIKbHKHq2d0z3BX3OTd9uNTCFFqLyZdKwUWuuLWXYLy0h0jaoyXlrRoC2DYQAvD_BwE&gclsrc=aw.ds`",
              },
            ],
            [flutterIcon]
          )}

          {bootstrapCardCustomized(
            "Full Stack Web Development",
            `MERN ( MongoDB, ExpressJS, React, NodeJs), will to learn more
                like Laravel (PHP)`,
            ` 
           Some times its best to develop natively for a client and the
                most used platform is cloud, Seeing this i can deliver a fulling
                working full stack websites
            
            `,
            [
              {
                nameOfTool: "React",
                linkToDocumentation: `https://react.dev/`,
              },
              {
                nameOfTool: "NodeJs",
                linkToDocumentation: `https://nodejs.org/en`,
              },
              {
                nameOfTool: "ExpressJS",
                linkToDocumentation: `https://expressjs.com/`,
              },
              {
                nameOfTool: "MongoDB",
                linkToDocumentation: `https://www.mongodb.com/`,
              },
            ],
            [mongoIcon, reactIcon, nodeJSIcon, expressJsIcon]
          )}

          {bootstrapCardCustomized(
            "Android Development",
            ` Natively Develop Android Apps using android studio and java OR
                Kotlin`,
            ` 
          Sometimes a natively built app is more performance and
                preferable for a client, Seeing this we can offer this services
               We Recommend cross platform for the
                easy of use and many platform support.
            
            `,
            [
              {
                nameOfTool: "Android Studio",
                linkToDocumentation: `https://developer.android.com/studio?gad_source=1&gclid=CjwKCAjwx4O4BhAnEiwA42SbVIxgd1P_CllH6jXD7EXuFFd8Fetjv-8ZOqmTd0eM4M59nNJjaB1kIBoCQ74QAvD_BwE&gclsrc=aw.ds`,
              },
            ],
            [androidIcon, javaIcon, kotlinIcon]
          )}

          {bootstrapCardCustomized(
            " Game Development",
            ` I Have learned to use unity and godot for game development`,
            ` 
           For those out there that have an idea or want help in there
                projects,
                One person Can't build the next GTA
                Or Call Of Duty
            
            `,
            [
              {
                nameOfTool: "Unity Game Engine",
                linkToDocumentation: `https://unity.com/`,
              },

              {
                nameOfTool: "Godot Game Engine",
                linkToDocumentation: `https://godotengine.org/`,
              },
            ],
            [godotIcon, unityIcon]
          )}
        </div>
      </div>
    </>
  );
}

function bootstrapCardCustomized(
  title: string = "not assigned",
  canDeploy: string = "not assigned",
  description: string = "not assigned",
  documentations: Array<{
    nameOfTool: string;
    linkToDocumentation: string;
  }>,
  listOfImagesOfTools: Array<string> = []
) {
  return (
    <>
      <Card className={offeringServicesStyle.card}>
        <Card.Body>
          <Card.Title
            className={offeringServicesStyle.cardTitle}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <div className={offeringServicesStyle.titleContainer}>
              <CardiconList imagePaths={listOfImagesOfTools} />
              {title}
            </div>
          </Card.Title>
          <Card.Subtitle
            className={`mb-2 text-muted ${offeringServicesStyle.cardSubDescription}`}
          >
            {canDeploy}
          </Card.Subtitle>
          <Card.Text className={offeringServicesStyle.cardDescription}>
            {description}
          </Card.Text>

          <Card.Link
            href="/#deliveredProject"
            className={offeringServicesStyle.cardLink}
            style={{ textAlign: "center" }}
          >
            See Projects
          </Card.Link>

          <div className={offeringServicesStyle.cardLinkGroup}>
            {documentations.map((tool, index) => (
              <Card.Link
                key={index}
                href={tool.linkToDocumentation}
                className={offeringServicesStyle.cardLink}
              >
                {tool.nameOfTool}
              </Card.Link>
            ))}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
