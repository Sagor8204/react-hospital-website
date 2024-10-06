import React from "react";

const Counter = () => {
  return (
    <div className="counter section">
      <div className="container counter_container grid">
        <div className="single_count">
          <i className="count_icon uil uil-user"></i>
          <div className="count_wrap">
            <h1>58</h1>k
          </div>
          <span>Happy People</span>
        </div>
        <div className="single_count">
          <i className="count_icon uil uil-map-marker-plus"></i>
          <div className="count_wrap">
            <h1>1000</h1>+
          </div>
          <span>Surgery Comepleted</span>
        </div>
        <div className="single_count">
          <i className="count_icon uil uil-user"></i>
          <div className="count_wrap">
            <h1>20</h1>+
          </div>
          <span>Expert Doctors</span>
        </div>
        <div className="single_count">
          <i className="count_icon uil uil-globe"></i>
          <div className="count_wrap">
            <h1>20</h1>
          </div>
          <span>Worldwide Branch</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
