import React from "react";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";

const About = () => {
  return (
    <div className="about section" id="about">
      <div className="container about_container grid">
        <div className="first_img_1">
          <div className="img_1">
            <img src={img1} alt="image1" />
          </div>
          <div>
            <img src={img2} alt="image2" />
          </div>
          <div className="circle"></div>
        </div>
        <div>
          <img src={img3} alt="image3" />
        </div>
        <div className="about_data">
          <h2 className="about_title">
            Personal care <br /> & healthy living
          </h2>
          <p className="about_desc">
            We provide best leading medicle service Nulla perferendis veniam
            deleniti ipsum officia dolores repellat laudantium obcaecati neque.
          </p>
          <a className="button" href="#some">
            Services Icon
            <i className="uil uil-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
