import React from "react";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";

const Partners = () => {
  return (
    <div className="partners section" id="partners">
      <div className="container">
        <div className="top_section">
          <h1 className="section_title">Partners who support us</h1>
          <div className="divider"></div>
          <p>
            Lets know moreel necessitatibus dolor asperiores illum possimus sint
            voluptates incidunt molestias nostrum laudantium. Maiores porro
            cumque quaerat.
          </p>
        </div>

        <div className="partner_container">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
