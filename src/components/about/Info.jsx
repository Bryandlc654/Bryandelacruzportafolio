import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">1 año trabajando</span>
      </div>
      <div className="about__box">
      <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Proyectos </h3>
        <span className="about__subtitle">+5 Completados</span>
      </div>
      <div className="about__box">
      <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Soporte</h3>
        <span className="about__subtitle">En línea 24/7</span>
      </div>
    </div>
  );
};

export default Info;
