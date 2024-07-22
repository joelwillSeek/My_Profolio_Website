import React from "react";
import matchMaking from "../../assets/DeliveredProject/matchmaking.png";
import weatherApp from "../../assets/DeliveredProject/flutterWeatherAPp.jpg";
import calculatorApp from "../../assets/DeliveredProject/calculator app.jpg";

export default function DeliveredProject() {
  const crossPlatformProjects = [
    {
      Name: "Habeshaly (Match Making App)",
      link: "https://github.com/joelwillSeek/Flutter_MatchMaking_app",
      image: matchMaking,
      description: "A tinder like app clone for ethiopian",
    },
    {
      Name: "Weather App",
      link: "https://github.com/joelwillSeek/Flutter_Weather_App",
      image: weatherApp,
      description: "Weather App",
    },
    {
      Name: "Calculator App",
      link: "https://github.com/joelwillSeek/Flutter_Calculator",
      image: calculatorApp,
      description: "Calculator App",
    },
  ];

  const fullStackWebDev = [
    {
      Name: "Habeshaly (Match Making App)",
      link: "https://github.com/joelwillSeek/Flutter_MatchMaking_app",
      image: matchMaking,
      description: "A tinder like app clone for ethiopian",
    },
  ];

  return (
    <>
      <div>
        <h1>Some Of My Projects</h1>
        <div id="Cross Platform"></div>
      </div>
    </>
  );
}
