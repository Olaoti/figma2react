import React from "react";
import "./Landing.css";
import { useState } from "react";
import FlexLogos from "../FlexLogos";
import home from "../Assets/home.svg";
import cancel from "../Assets/close.svg";

const Landing = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <div>
      <header>
        <div className="logo colp">
          <span> {menuClick ? "" : "Mylogo"}</span>
          <span
            className="icon"
            onClick={() => {
              setMenuClick(!menuClick);
            }}
          >
            {menuClick ? "" : <img src={home} alt="" />}
          </span>{" "}
        </div>
        <div className={menuClick ? "show flex coln" : "none flex coln"}>
          <div className="cancel">
            <span
              className="icon"
              onClick={() => {
                setMenuClick(!menuClick);
              }}
            >
              <img src={cancel} alt="" />
            </span>
          </div>
          <div>Portfolio</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </header>

      <div className="box1">
        <div className="backgrounds">
          <div className="ellipse eleven"></div>
          <div className="ellipse three">
            {" "}
            <svg>
              <circle cx="38" cy="38" r="36">
                {" "}
              </circle>
            </svg>
          </div>
          <div className="ellipse five colp2b"></div>
          <div className="ellipse twelve colp4"></div>
          <div className="ellipse thirteen ">
            <svg>
              <circle cx="38" cy="38" r="36">
                {" "}
              </circle>
            </svg>
          </div>
          <div className="rectangle six colp4b"></div>
          <div className="rectangle seven colp2b"></div>
          <div className="rectangle four colp4b"></div>
          <div className="ellipse four colp2b"></div>
          <div className="rectangle five colp4b"></div>
        </div>
        <div className="innerbox">
          <div className="boxhead coln">
            {" "}
            I'm <span className="laptop">Alexander</span>
            <span className="phone">Marriane</span>
            <br />
            Glad to see you!
          </div>
          <div className="boxcontent coln1">
            I'm a software developer! I can help you build a product , feature
            or website Look through some of my work and experience! If you like
            what you see and have a project you need coded, don't hestiate to
            contact me.
          </div>
          <div className="connect colp">LET'S CONNECT</div>
          <FlexLogos />
        </div>
      </div>
    </div>
  );
};

export default Landing;
