import React from "react";

const Banner = () => {
  return (
    <div className="wraper_home">
      <div className="home section" id="home">
        <div className="home_container container">
          <div className="home_data">
            <div className="divider"></div>
            <span>TOTAL HEALTH CARE SOLUTION</span>
            <h1 className="home_title">
              Your Most Trusted <br /> Health Partner
            </h1>
            <p>
              A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
              quisquam aperiam maiores sunt fugit, deserunt rem suscipit
              placeat.
            </p>

            <a className="button" href="#some">
              MAKE APPOINMENT <i className="uil uil-angle-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* CART SECTION */}
      <div className="carts">
        <div className="container cart_container grid">
          <div className="sinlge_cart">
            <i className="uil uil-shield-plus"></i>
            <div className="cart_sub_title">24 Hours Service</div>
            <h3 className="cart_title">Online Appoinment</h3>
            <p>
              Get ALl time support for emergency.We have introduced the
              principle of family medicine.
            </p>
            <a className="button" href="#some">
              MAKE A APPOINMENT
            </a>
          </div>
          <div className="sinlge_cart">
            <i className="uil uil-clock-eight"></i>
            <div className="cart_sub_title">Timing schedule</div>
            <h3 className="cart_title">Working Hours</h3>
            <div className="cart_schedule">
              <div>Sun - Wed :</div>
              <div>8:00 - 17:00</div>
            </div>
            <div className="cart_schedule">
              <div>Thu - Fri :</div>
              <div>9:00 - 17:00</div>
            </div>
            <div className="cart_schedule">
              <div>Sat - sun :</div>
              <div>10:00 - 17:00</div>
            </div>
          </div>
          <div className="sinlge_cart">
            <i className="uil uil-user-times"></i>
            <div className="cart_sub_title">Emegency Cases</div>
            <h3 className="cart_title">1-800-700-6200</h3>
            <p>
              Get ALl time support for emergency.We have introduced the
              principle of family medicine.Get Conneted with us for any urgency
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
