import React from "react";

const Footer = () => {
  return (
    <div className="section">
      <div className="container footer_container">
        <div className="footer_logo">
          <h2 className="flogo_title">Sagordev7</h2>
          <p>
            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad
            eos obcaecati tenetur veritatis eveniet distinctio possimus.
          </p>
          <div className="social_icon">
            <div>
              <i className="uil uil-facebook-f"></i>
            </div>
            <div>
              <i className="uil uil-twitter"></i>
            </div>
            <div>
              <i className="uil uil-linkedin"></i>
            </div>
          </div>
        </div>
        <div>
          <h3>Department</h3>
          <div className="divider"></div>
          <ul className="footer_menu">
            <li>
              <a href="nothing">Surgery</a>
            </li>
            <li>
              <a href="nothing">Wome's Health</a>
            </li>
            <li>
              <a href="nothing">Radiology</a>
            </li>
            <li>
              <a href="nothing">Cardioc</a>
            </li>
            <li>
              <a href="nothing">Medicine</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <div className="divider"></div>
          <ul className="footer_menu">
            <li>
              <a href="nothing">Terms & Conditions</a>
            </li>
            <li>
              <a href="nothing">Privacy Policy</a>
            </li>
            <li>
              <a href="nothing">Company Support</a>
            </li>
            <li>
              <a href="nothing">FAQuestions</a>
            </li>
            <li>
              <a href="nothing">Company Licence</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Get In Touch</h3>
          <div className="divider"></div>
          <div className="footer_helpline">
            <div>
              <i className="uil uil-envelope"></i>
              <span>Support Available for 24/7</span>
            </div>
            <h3>Support@email.com</h3>
          </div>
          <div className="footer_helpline">
            <div>
              <i className="uil uil-user-nurse"></i>
              <span>Support Available for 24/7</span>
            </div>
            <h3>+23-456-6588</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
