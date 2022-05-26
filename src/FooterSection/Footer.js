import React from "react";
import "./Footer.css";
import FlexLogos from "../FlexLogos";
import e1 from "../Assets/e1.png";
import e2 from "../Assets/e2.png";
import e3 from "../Assets/e3.png";
import Contact from "./Contact";
const About = () => {
  return (
    <div className="footer">
      {" "}
      <div className="box2">
        <div className="left">
          <div className="head">
            About
            <br />
            Myself
          </div>
          <div className="body">
            Hello I'm a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don't
            hestiate to contact me.
          </div>
          <div className="connect colp">LET'S CONNECT</div>
          <FlexLogos />
          <div className="btn">Get My Resume</div>
        </div>
        <div className="right">
          <div className="top">
            <span>Languages</span>
            <span className="icon phone"></span>
          </div>
          <div className="langflex">
            <div>
              <img src={e1} alt="" />
              <div>javaScript</div>
            </div>
            <div>
              <img src={e2} alt="" />
              <div>HTML</div>
            </div>
            <div>
              <img src={e3} alt="" />
              <div>Css</div>
            </div>
          </div>
          <div className="others">
            <div>
              <div>Frameworks</div>
              <div>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="black"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <div>Skills</div>
              <div>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="black"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default About;
