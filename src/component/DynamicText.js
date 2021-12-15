import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    let array = ["simply", "smart", "clean", "strong"];
    let wordIndex = 0;
    let letterIndex = 0;
    const target = document.getElementById("text-target");
    const createLetter = () => {
      const span = document.createElement("span");
      target.appendChild(span);
      span.classList.add("letter");
      span.style.opacity = 0;
      span.style.animation = "anim 5s ease forwards";
      span.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        span.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(() => {
            loop();
          }, 2000);
        }
      }, 80);
    };
    loop();
  }, []);

  return (
    <span className="dynamic-text">
      <span className="simply">simply</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
