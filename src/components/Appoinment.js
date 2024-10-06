import React from "react";
import img3 from "../images/img-3.jpg";

const Appoinment = () => {
  return (
    <div className="section appoinment">
      <div className="container appoinment_container grid">
        <div className="appoinment_left">
          <img src={img3} alt="image3" />
          <div className="app_num">
            <i className="uil uil-heart"></i> +23 345 67980
          </div>
        </div>
        <div className="appoinment_data">
          <h1 className="section_title">Book appoinment</h1>
          <p>
            Mollitia dicta commodi est recusandae iste, natus eum asperiores
            corrupti qui velit . Iste dolorum atque similique praesentium
            soluta.
          </p>

          <div className="select_wrap">
            <select name="" id="">
              <option value="">sekect-1</option>
              <option value="">sekect-1</option>
              <option value="">sekect-1</option>
              <option value="">sekect-1</option>
              <option value="">sekect-1</option>
            </select>
            <select name="" id="">
              <option value="">sekect-1</option>
              <option value="">sekect-1</option>
              <option value="">sekect-1</option>
              <option value="">sekect-1</option>
              <option value="">sekect-1</option>
            </select>
          </div>
          <div className="date_text">
            <input type="date" placeholder="dd/mm/yy" />
            <input type="text" placeholder="Date" />
          </div>
          <div className="name_num">
            <input type="text" placeholder="Full Name" />
            <input type="number" placeholder="Phone Number" />
          </div>
          <textarea placeholder="Your message" rows="11"></textarea>
          <a className="button" href="#some">
            Make Appoinment <i className="uil uil-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
