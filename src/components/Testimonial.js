import React from "react";
import img1 from "../images/test1.jpg";
import img2 from "../images/test2.jpg";

const datas = [
  {
    image: img1,
    title: "Good Support",
    subTitle: "Kolis Mullar",
    para: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat",
  },
  {
    image: img2,
    title: "Nice Environment",
    subTitle: "John Partho",
    para: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial section" id="tetimonial">
      <div className="container">
        <div className="top_section">
          <h1 className="section_title">We served over 5000+ Patients</h1>
          <div className="divider"></div>
          <p>
            Lets know moreel necessitatibus dolor asperiores illum possimus sint
            voluptates incidunt molestias nostrum laudantium. Maiores porro
            cumque quaerat.
          </p>
        </div>

        <div className="testimonial_container grid">
          {datas.map((data) => (
            <div className="single_test" key={data.title}>
              <div className="test_header">
                <img src={data.image} alt="" />
                <div>
                  <h3>{data.title}</h3>
                  <span>{data.subTitle}</span>
                </div>
              </div>
              <p>{data.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
