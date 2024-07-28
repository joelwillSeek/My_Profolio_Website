import React, { useEffect, useState } from "react";
import codingLikeTextStyle from "../styles/codingliketext.module.css";

export default function CodingLikeText({ delay }: { delay: number }) {
  let wordsToShow = ["Coding", "Creating", "Designing", "Cooperating", "end"];

  let [showText, setShowText] = useState("");
  let [wordPicked, setWordPicked] = useState(0);
  let [letterPointer, setLetterPointer] = useState(0);
  let [updated, setUpdated] = useState(0);

  function displayText() {
    setInterval(() => {
      setUpdated((prev) => prev + 1);
    }, delay);
  }

  function resetStates() {
    setLetterPointer(0);
    setShowText("|");
  }

  useEffect(() => {
    displayText();
  }, []);

  function deleteLettersOneByOne() {
    setShowText((prevValue) => {
      let newText = prevValue.substring(0, prevValue.length - 2);

      return newText + "|";
    });
  }

  useEffect(() => {
    let theWord = wordsToShow[wordPicked];

    if (theWord == "end") {
      setWordPicked(0);
      resetStates();
    } else if (letterPointer <= theWord.length - 1) {
      let theLetter = theWord[letterPointer];
      let newText = showText.replace("|", "");
      newText += theLetter + "|";
      setShowText(newText);
      setLetterPointer((prevVal) => ++prevVal);
    } else if (letterPointer > theWord.length - 1 && showText.length > 1) {
      deleteLettersOneByOne();
    } else if (wordPicked < wordsToShow.length) {
      setWordPicked((prevVal) => ++prevVal);
      resetStates();
    }
  }, [updated]);

  return <h1 className={codingLikeTextStyle.heading}>{showText}</h1>;
}
