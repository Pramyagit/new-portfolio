import React from "react";
import "../App.css";
import "./Demo.css";
import img1 from "../image/work1.svg";
import img2 from "../image/work2.svg";
import img3 from "../image/work7.svg";
import img4 from "../image/work4.svg";
import img5 from "../image/work5.svg";
export const Demo = () => {
  return (
    <div className="demo">
      <h2
        className="text-center title"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
      >
        Projects
      </h2>
      <section className="work section" id="work">
        <h2
          className="section_title"
          data-aos="fade-right"
          data-aos-delay="550"
        >
          Trial Project
        </h2>
        <div className="work_container bd_grid ">
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-easing="ease-in-sine"
          >
            <img src={img1} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3>HTML Project</h3>
              <button className="glow-on-hover">
                <a href="https://pramyagit.github.io/wishescard/">DEMo</a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-up"
            data-aos-delay="650"
            data-aos-easing="ease-in-sine"
          >
            <img src={img2} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3>Css Project</h3>
              <button className="glow-on-hover">
                <a href="https://pramyagit.github.io/tic-tacgame/">DEMO</a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="700"
            data-aos-easing="ease-in-sine"
          >
            <img src={img3} className="card-img-top" alt="" />

            <div className="html card-body">
              <h3> Javascript Project</h3>
              <button className="glow-on-hover">
                <a href="https://pramyagit.github.io/HOTEL-DEMO/">DEMO</a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-up"
            data-aos-delay="750"
            data-aos-easing="ease-in-sine"
          >
            <img src={img4} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> Bootstrab Project</h3>
              <button className="glow-on-hover">
                <a href="https://pramyagit.github.io/petshop/">DEMO</a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"
          >
            <img src={img5} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> React Project</h3>
              <button className="glow-on-hover">
                <a href="https://pramyagit.github.io/nametohexa/">DEMO</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
