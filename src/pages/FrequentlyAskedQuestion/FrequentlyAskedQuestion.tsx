import React from "react";
import { Accordion } from "react-bootstrap";
import frequentlyAskedStyle from "./styles/frequentlyaskedquestion.module.css";

export default function FrequentlyAskedQuestion() {
  const questionsAndAnswer = [
    {
      question: " How to contact you and get a fast response?",
      answer: () => (
        <>
          In the about page there is a bunch of was to contact me.
          <p>
            <span className="Warning">Note:</span> I prefer Telegram
            <li style={{ listStyle: "none" }}>
              <a
                className={frequentlyAskedStyle.contact}
                href=" https://t.me/Eyoelsel"
              >
                Telegram Link
              </a>
            </li>
          </p>
        </>
      ),
    },
    {
      question: "Do you design from the ground up Or use theme or template?",
      answer: () => (
        <>
          As a primarly programer only person, i will use templates and themes
          from other source to speed up the process and make sure the design
          makes sense.
        </>
      ),
    },

    {
      question: "Will i receive maintenance or some continued support?",
      answer: () => (
        <>based on our agreement continued support can be offered.</>
      ),
    },
  ];
  return (
    <>
      <div
        id="frequentlyAskedQuestion"
        className={frequentlyAskedStyle.overallContainer}
      >
        <h1 className={frequentlyAskedStyle.heading}>
          Frequently Asked Questions
          <div className={frequentlyAskedStyle.hr}></div>
        </h1>
        <div
          id="Frequently Asked Question"
          className={frequentlyAskedStyle.container}
        >
          <Accordion>
            {questionsAndAnswer.length <= 0 ? (
              <h1>Coming Soon</h1>
            ) : (
              questionsAndAnswer.map((oneOfIt, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  className={frequentlyAskedStyle.questions}
                >
                  <Accordion.Header>{oneOfIt.question}</Accordion.Header>
                  <Accordion.Body>{<oneOfIt.answer />}</Accordion.Body>
                </Accordion.Item>
              ))
            )}
          </Accordion>
        </div>
      </div>
    </>
  );
}
