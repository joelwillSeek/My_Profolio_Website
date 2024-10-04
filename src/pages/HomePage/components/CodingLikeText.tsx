import React, { useEffect, useState } from "react";
import codingLikeTextStyle from "../styles/codingliketext.module.css";
import { Typewriter } from "react-simple-typewriter";


export default function CodingLikeText({ delay }: { delay: number }) {
  let wordsToShow = ["Coding", "Creating", "Design", "Cooperating"];

 
 
  return (
     <h1 style={{color:"#ffbf5e"}}>

<Typewriter
            words={wordsToShow}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000} 
            cursorColor="#ffbf5e"
          />
     </h1>
    
  );
}
