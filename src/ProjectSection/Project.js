import React from "react";
import "./Project.css";
import sp1 from "../Assets/sp1.png";
import sp2 from "../Assets/sp2.png";
import sp3 from "../Assets/sp3.png";
import sp4 from "../Assets/sp4.png";

const Project = () => {
  return (
    <div>
      <div className="samples">
        <div className="wrapper1">
          <div className="left">
            <img src={sp1} alt="" />
          </div>
          <div className="right wordy">
            <div className="head">Tonic</div>
            <div className="samflex">
              <div className="word">canopy</div>
              <div className="circle"></div>
              <div className="des">Back End Dev</div>
              <div className="circle"></div>
              <div className="year">2015</div>
            </div>
            <div className="body">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </div>
            <div className="langflex">
              <div>html</div>
              <div>css</div>
              <div>javascript</div>
            </div>
            <div className="btn">See Project</div>
          </div>
        </div>
        <div className="wrapper2">
          <div className="right phone">
            <img src={sp2} alt="" />
          </div>
          <div className="left wordy">
            <div className="head">Multi-Post Stories</div>
            <div className="samflex">
              <div className="word">facebook</div>
              <div className="circle"></div>
              <div className="des">Full Stack Dev</div>
              <div className="circle"></div>
              <div className="year">2015</div>
            </div>
            <div className="body">
              Experimental content creation feature that allows users to add to
              an existing story over the course of a day without spamming their
              friends.
            </div>
            <div className="langflex">
              <div>html</div>
              <div className="laptop">Ruby on rails</div>
              <div>css</div>
              <div>javascript</div>
            </div>
            <div className="btn">See Project</div>
          </div>
          <div className="right laptop">
            <img src={sp2} alt="" />
          </div>
        </div>
        <div className="wrapper3">
          <div className="left">
            <img src={sp3} alt="" />
          </div>
          <div className="right wordy">
            <div className="head">Facebook 360</div>
            <div className="samflex">
              <div className="word">facebook</div>
              <div className="circle"></div>
              <div className="des">Full Stack Dev</div>
              <div className="circle"></div>
              <div className="year">2015</div>
            </div>
            <div className="body">
              Exploring the future of media in Facebook's first Virtual Reality
              app; a place to discover and enjoy 360 photos and videos on Gear
              VR.
            </div>
            <div className="langflex">
              <div>html</div>
              <div className="laptop">Ruby on rails</div>
              <div>css</div>
              <div>javascript</div>
            </div>
            <div className="btn">See Project</div>
          </div>
        </div>
        <div className="wrapper4">
          <div className="right phone">
            <img src={sp4} alt="" />
          </div>
          <div className="left wordy">
            <div className="head">Uber navigation</div>
            <div className="samflex">
              <div className="word">Uber</div>
              <div className="circle"></div>
              <div className="des">Lead developer</div>
              <div className="circle"></div>
              <div className="year">2018</div>
            </div>
            <div className="body">
              A smart assistant to make driving more safe, efficient, and fun by
              unlocking your most expensive computer: your car.
            </div>
            <div className="langflex">
              <div>html</div>
              <div className="laptop">Ruby on rails</div>
              <div>css</div>
              <div>javascript</div>
            </div>
            <div className="btn">See Project</div>
          </div>
          <div className="right laptop">
            <img src={sp4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
