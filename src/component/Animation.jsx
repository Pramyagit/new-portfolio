import React from "react";
import Typewriter from "typewriter-effect";
import "../App.css";

const AutoTextAnimation = () => {
  return (
    <div className="animation">
      <Typewriter
        options={{
          strings: [
            "WEB DEVELOPER",
            "FRONTEND DEVELOPER",
            "WEB DESIGNER",
            "LOGO DESIGNER",
            "REACT DEVELOPER",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default AutoTextAnimation;
