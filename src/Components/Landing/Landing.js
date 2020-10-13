import React from "react";
import "./Landing.css";
import { Button } from "@material-ui/core";

import landingImage from "../Assests/group-15.png";

const Landing = () => {
  return (
    <div className="Updated-Illustration">
      <div className="landingContent">
        <h1 className="LEARNING-MADE-EASY-">LEARNING MADE EASY & ENGAGING</h1>
        <p className="Tabella-helps-you-le">
          Tabella helps you learn more effectively than lectures through
          interactive problem solving courses. Our courses are designed to be
          entertaining, challenging, and educational. They are for ambitious
          students, professionals, and lifelong learners.
        </p>
        <Button class="Rectangle-landing" variant="outlined">
          Try Tabella for free
        </Button>
      </div>
      <div>
        <img class="Group-15" src={landingImage} alt="landingImage" />
      </div>
    </div>
  );
};

export default Landing;
