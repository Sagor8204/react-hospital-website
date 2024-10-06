import React, { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const activeMenuBar = () => {
    setMenuActive(true);
  };

  const closeActiveMenu = () => {
    setMenuActive(false);
  };
  return (
    <div>
      <div className="top_header_section">
        <div className="container top_header">
          <div className="top_header_left">
            <div className="email_address">
              <i className="uil uil-comment-lines"></i>
              <span>support@example.com</span>
            </div>
            <div>
              <i className="uil uil-map-marker"></i>
              <span>Address Ta-134/A, New York, USA</span>
            </div>
          </div>
          <div className="top_header_bottom">
            <span>Call Now :</span>
            <h3>823-4565-13456</h3>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="header">
        <div className="container header_container">
          <div className="logo">
            L<span>O</span>G<span>O</span>
          </div>
          <div className={`${menuActive ? "menu active_menu" : "menu"}`}>
            <ul className="menu_list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#department">Department</a>
              </li>
              <li>
                <a href="#doctors">Doctors</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i onClick={closeActiveMenu} className="cross uil uil-times"></i>
          </div>
          <div onClick={activeMenuBar} className="menu_bar">
            <i className="uil uil-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
