import React from "react";
import "../App.css";
import "./Skills.css";

export const Skill = () => {
  return (
    <div className="skill ">
      <div className="skills section" id="skills">
        <h2
          className="section_title display-6 fw-bold"
          data-aos="fade-down"
          data-aos-delay="900"
          data-aos-easing="ease-in-sine"
        >
          My Skills
        </h2>
        <div className="skills_container">
          <div>
            <h2
              className="skills_subtitle  fs-2"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-easing="ease-in"
            >
              professional skills
            </h2>
            {/* html */}
            <div
              className="skills_data"
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-easing="ease-in-sine"
            >
              <div className="skills_name">
                <i
                  className="bx bxl-html5 html skill_icon"
                  data-aos="fade-left"
                  data-aos-delay="1300"
                  data-aos-easing="ease-in-sine"
                ></i>
                <box-icon name="html5" animation="tada:hover"></box-icon>
                <span className="skill_name">html5</span>
              </div>
              <div>
                <span className="skill_percentage">95%</span>
              </div>
              <div className="skill_bar skill_html"></div>
            </div>
            {/*  */}
            <div
              className="skills_data"
              data-aos="fade-left"
              data-aos-delay="1350"
            >
              <div className="skills_name">
                <i className="bx bxs-file-css css skill_icon"></i>
                <box-icon name="css" animation="tada"></box-icon>
                <span className="skill_name">css</span>
              </div>
              <div>
                <span className="skill_percentage">90%</span>
              </div>
              <div className="skill_bar skill_css"></div>
            </div>
            {/*  */}
            <div
              className="skills_data"
              data-aos="fade-left"
              data-aos-delay="1400"
              data-aos-easing="ease-in-sine"
            >
              <div className="skills_name">
                <i className="bx bxl-javascript js skill_icon"></i>
                <span className="skill_name">javascript</span>
              </div>
              <div>
                <span className="skill_percentage">80%</span>
              </div>
              <div className="skill_bar skill_javascript"></div>
            </div>
            {/*  */}
            <div
              className="skills_data"
              data-aos="fade-left"
              data-aos-delay="1450"
              data-aos-easing="ease-in-sine"
            >
              <div className="skills_name">
                <i className="bx bxl-bootstrap bootstrap skill_icon"></i>
                <span className="skill_name">bootstrap</span>
              </div>
              <div>
                <span className="skill_percentage">80%</span>
              </div>
              <div className="skill_bar skill_bootstrap"></div>
            </div>
            {/*  */}
            <div
              className="skills_data"
              data-aos="fade-left"
              data-aos-delay="1500"
              data-aos-easing="ease-in-sine"
            >
              <div className="skills_name">
                <i className="bx bxl-react react skill_icon"></i>
                <span className="skill_name">react</span>
              </div>
              <div>
                <span className="skill_percentage">80%</span>
              </div>
              <div className="skill_bar skill_react"></div>
            </div>
            {/*  */}
            <div
              className="skills_data"
              data-aos="fade-left"
              data-aos-delay="1550"
              data-aos-easing="ease-in-sine"
            >
              <div className="skills_name">
                <i className="bx bxl-figma fig skill_icon"></i>
                <span className="skill_name">figma</span>
              </div>
              <div>
                <span className="skill_percentage">85%</span>
              </div>
              <div className="skill_bar skill_figma"></div>
            </div>
            {/*  */}
            <div
              className="skills_data"
              data-aos="fade-left"
              data-aos-delay="1650"
            >
              <div className="skills_name">
                <i className="bx bxl-ui ui skill_icon">ux/ui</i>
                <span className="skill_name">UI/UX</span>
              </div>
              <div>
                <span className="skill_percentage">80%</span>
              </div>
              <div className="skill_bar skill_ui"></div>
            </div>
            {/*  */}
            <div
              className="skills_data"
              data-aos="fade-left"
              data-aos-delay="1750"
            >
              <div className="skills_name">
                <i className="bx bxl-python python skill_icon"></i>
                <span className="skill_name">python</span>
              </div>
              <div>
                <span className="skill_percentage">50%</span>
              </div>
              <div className="skill_bar skill_python"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
