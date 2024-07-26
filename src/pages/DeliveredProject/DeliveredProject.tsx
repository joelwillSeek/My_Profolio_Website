import React from "react";
import deliveredProjectCss from "./styles/deliveredproject.module.css";
import matchMaking from "../../assets/DeliveredProject/matchmaking.png";
import weatherApp from "../../assets/DeliveredProject/flutterWeatherAPp.jpg";
import calculatorApp from "../../assets/DeliveredProject/calculator app.jpg";
import clubhouseWebsite from "../../assets/DeliveredProject/clubhouseWebsite.png";
import DeliveredCards from "./components/DeliveredCards";

export default function DeliveredProject() {
  const crossPlatformProjects = [
    {
      Name: "Habeshaly (Match Making App)",
      githubLink: "https://github.com/joelwillSeek/Flutter_MatchMaking_app",
      previewLink: " ",
      image: matchMaking,
      description: "A tinder like app clone for ethiopian",
    },
    {
      Name: "Weather App",
      githubLink: "https://github.com/joelwillSeek/Flutter_Weather_App",
      previewLink: " ",
      image: weatherApp,
      description: "Weather App",
    },
    {
      Name: "Calculator App",
      githubLink: "https://github.com/joelwillSeek/Flutter_Calculator",
      previewLink: " ",
      image: calculatorApp,
      description: "Calculator App",
    },
  ];

  const fullStackWebDev = [
    {
      Name: "Blog Website",
      githubLink:
        "https://github.com/joelwillSeek/BlogApi_FrontEnd_ExpressJS_OdinProject",
      previewLink: "",
      image: "#",
      description:
        "A website where you can post blogs public or private and also see other public posts",
    },
    {
      Name: "Clubhouse Website",
      previewLink: "https://expressjs-clubhouse.onrender.com/",
      githubLink: "https://github.com/joelwillSeek/ExpressJS_clubhouse",
      image: clubhouseWebsite,
      description:
        "A website where you can post blogs public or private and also see other public posts",
    },
  ];

  const androidDevelopment = [
    {
      Name: "Zender",
      githubLink: "https://github.com/joelwillSeek/Zender_Xender_UI",
      previewLink: "",
      image: "#",
      description:
        "An app that mimic xender application ui and some functionality",
    },
    {
      Name: "Fake_Gmail",
      githubLink: "https://github.com/joelwillSeek/Fake_Gmail",
      previewLink: "",
      image: "#",
      description:
        "An app that mimic Gmail application ui and some functionality",
    },
    {
      Name: "Firebase Android",
      githubLink: "https://github.com/joelwillSeek/Fire_Store_Android_Dev",
      previewLink: "",
      image: "#",
      description: "An app that uses firebase to authenticate user login",
    },
  ];

  const gameDevelopment: any[] = [];

  return (
    <>
      <div className={deliveredProjectCss.container} id="deliveredProject">
        <h1 className={deliveredProjectCss.heading}>
          Some Of My Projects<div className={deliveredProjectCss.hr}></div>
        </h1>
        <div
          id="crossPlatform"
          className={deliveredProjectCss.overallPlatformContainer}
        >
          <h1 className={deliveredProjectCss.subHeading}>
            Cross Platform Development Projects
          </h1>
          <div
            id="Cross_Platform"
            className={deliveredProjectCss.platformContainer}
          >
            {crossPlatformProjects.length <= 0 ? (
              <h1>Coming Soon</h1>
            ) : (
              crossPlatformProjects.map((oneProject) => (
                <DeliveredCards
                  Name={oneProject.Name}
                  githubLink={oneProject.githubLink}
                  previewLink={oneProject.previewLink}
                  image={oneProject.image}
                  description={oneProject.description}
                />
              ))
            )}
          </div>
        </div>

        <div
          className={deliveredProjectCss.overallPlatformContainer}
          id="fullStackWeb"
        >
          <h1 className={deliveredProjectCss.subHeading}>
            Full Stack Web Development Projects
          </h1>

          <div
            id="Full_Stack_Platform"
            className={deliveredProjectCss.platformContainer}
          >
            {fullStackWebDev.length <= 0 ? (
              <h1>Coming Soon</h1>
            ) : (
              fullStackWebDev.map((oneProject) => (
                <DeliveredCards
                  Name={oneProject.Name}
                  githubLink={oneProject.githubLink}
                  previewLink={oneProject.previewLink}
                  image={oneProject.image}
                  description={oneProject.description}
                />
              ))
            )}
          </div>
        </div>

        <div
          id="androidDev"
          className={deliveredProjectCss.overallPlatformContainer}
        >
          <h1 className={deliveredProjectCss.subHeading}>
            Android Development Projects
          </h1>

          <div
            id="Android_Development"
            className={deliveredProjectCss.platformContainer}
          >
            {androidDevelopment.length <= 0 ? (
              <h1>Coming Soon</h1>
            ) : (
              androidDevelopment.map((oneProject) => (
                <DeliveredCards
                  Name={oneProject.Name}
                  githubLink={oneProject.githubLink}
                  previewLink={oneProject.previewLink}
                  image={oneProject.image}
                  description={oneProject.description}
                />
              ))
            )}
          </div>
        </div>

        <div
          id="deliveredProject"
          className={deliveredProjectCss.overallPlatformContainer}
        >
          <h1 className={deliveredProjectCss.subHeading}>
            Game Development Projects
          </h1>

          <div
            id="Game_Development"
            className={deliveredProjectCss.platformContainer}
          >
            {gameDevelopment.length <= 0 ? (
              <h1>Coming Soon</h1>
            ) : (
              gameDevelopment.map((oneProject) => (
                <DeliveredCards
                  Name={oneProject.Name}
                  githubLink={oneProject.githubLink}
                  previewLink={oneProject.previewLink}
                  image={oneProject.image}
                  description={oneProject.description}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
