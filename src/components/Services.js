import React from "react";

const datas = [
  {
    icon: <i className="uil uil-flask"></i>,
    title: "Laboratory services",
    para: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <i className="uil uil-heart"></i>,
    title: "Heart Disease",
    para: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <i className="uil uil-restaurant"></i>,
    title: "Dental Care",
    para: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <i className="uil uil-head-side"></i>,
    title: "Body Surgery",
    para: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <i className="uil uil-brain"></i>,
    title: "Neurology Sargery",
    para: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <i className="uil uil-dna"></i>,
    title: "Gynecology",
    para: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
];

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="top_section">
          <h1 className="section_title">Award winning patient care</h1>
          <div className="divider"></div>
          <p>
            Lets know moreel necessitatibus dolor asperiores illum possimus sint
            voluptates incidunt molestias nostrum laudantium. Maiores porro
            cumque quaerat.
          </p>
        </div>

        <div className="services_container grid">
          {datas.map((data) => (
            <div className="single_service" key={data.title}>
              <div className="service_header">
                {data.icon} <h3>{data.title}</h3>
              </div>
              <p>{data.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
