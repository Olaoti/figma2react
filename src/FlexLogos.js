import React from "react";
import ang from "./Assets/ang.svg";
import v1 from "./Assets/v1.svg";
import v2 from "./Assets/v2.svg";
import github from "./Assets/github.svg";
import medium from "./Assets/medium.svg";
import twitter from "./Assets/twitter.svg";

const FlexLogos = () => {
  return (
    <div>
      <div className="connectlogos">
        <div>
          <img src={twitter} alt="" />
        </div>
        <div>
          <img src={v1} alt="" />
          <img src={v2} alt="" />
        </div>
        <div>
          <img src={ang} alt="" />
        </div>
        <div>
          <img src={github} alt="" />
        </div>
        <div>
          <img src={medium} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FlexLogos;
