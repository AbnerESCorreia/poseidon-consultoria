import React from "react"; // Removidos useState e useRef se não forem usados em outro lugar
import { Container } from "react-bootstrap";
import ButtonPoseidon from "./ui/ButtonPoseidon";
import CountUp from "react-countup";
import video5 from "../assets/video5.mp4";

const Hero = () => {
  return (
    <section className="hero vh-100 d-flex align-items-center position-relative text-white overflow-hidden">
      {/* Background Video Player */}
      <div className="hero__background">
        <video
          src={video5}
          autoPlay
          muted
          loop
          playsInline
          className="hero__video"
        />
      </div>

      <Container className="position-relative z-3">
        <p className="hero__subtitle mb-2">Consultoria Online & Presencial</p>

        <h1 className="hero__title fw-bold">
          DOMINE O SEU <br />
          <span>CORPO E MENTE</span>
        </h1>

        <p className="hero__description mt-3 opacity-75 fs-5">
          Treinos personalizados, acompanhamento nutricional e resultados reais.
          Alcance seus objetivos com orientação profissional.
        </p>

        <div className="d-flex gap-3 mt-4">
          <ButtonPoseidon variant="primary">
            Agende sua Avaliação
          </ButtonPoseidon>
          <ButtonPoseidon variant="secondary">Conheça os Planos</ButtonPoseidon>
        </div>

        <hr className="hero__divider mt-5 mb-4 opacity-25" />

        <div className="d-flex gap-5 small text-uppercase tracking-wider">
          <div className="d-flex flex-column">
            <span className="hero__stats-number fw-bold fs-1">
              <CountUp end={100} duration={3} suffix="+" enableScrollSpy />
            </span>
            <span className="opacity-50">Alunos</span>
          </div>

          <div className="d-flex flex-column">
            <span className="hero__stats-number fw-bold fs-1">
              <CountUp end={10} duration={4} suffix="+" enableScrollSpy />
            </span>
            <span className="opacity-50">Anos Exp.</span>
          </div>

          <div className="d-flex flex-column">
            <span className="hero__stats-number fw-bold fs-1">
              <CountUp end={95} duration={4} suffix="%" enableScrollSpy />
            </span>
            <span className="opacity-50">Satisfação</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
