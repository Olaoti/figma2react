import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="box3">
        <div className="background">
          <div className="rectangle seven bbox3"></div>
          <div className="rectangle six"></div>
          <div className="rectangle four bbox3"></div>
          <div className="ellipse twelve bbox3"></div>
          <div className="ellipse five"></div>
          <div className="ellipse thirteen bbox3"></div>
          <div className="ellipse three">
            {" "}
            <svg>
              <circle cx="38" cy="38" r="36">
                {" "}
              </circle>
            </svg>
          </div>
          <div className="ellipse eleven bbox3"></div>
        </div>
        <div className="innerwrapper">
          <div className="head">Contact me</div>
          <div className="body">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I'd love
            to help with it{" "}
          </div>
          <div>
            {" "}
            <input type="text" placeholder="Alexander Mariana" id="name" />
          </div>
          <div>
            {" "}
            <input type="email" placeholder="alexander@gmail.com" id="email" />
          </div>
          <div>
            {" "}
            <textarea
              name="message"
              placeholder=" Input your message here "
            ></textarea>
          </div>
          <div className="btn">Get in Touch</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
