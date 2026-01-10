import { Container } from "react-bootstrap";
import ButtonPoseidon from "./ui/ButtonPoseidon";
import heroImage from "../assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="hero vh-100 d-flex align-items-center position-relative text-white overflow-hidden">
      <div className="hero__background">
        <img src={heroImage} alt="Fundo Poseidon" />
      </div>

      <Container className="position-relative z-3">
        <p className="hero__subtitle mb-2">Consultoria Online & Presencial</p>

        <h1 className="hero__title fw-bold">
          DOMINE O SEU <br />
          <span>CORPO E MENTE</span>
        </h1>

        <p className="hero__description mt-3 opacity-75">
          Treinos personalizados e metodologia exclusiva para quem busca
          resultados de elite.
        </p>

        <div className="d-flex gap-3 mt-4">
          <ButtonPoseidon variant="primary">
            Agende sua Avaliação
          </ButtonPoseidon>
          <ButtonPoseidon variant="secondary">Conheça os Planos</ButtonPoseidon>
        </div>

        <div className="mt-5 d-flex gap-5 opacity-50 small fw-bold text-uppercase tracking-wider">
          <span>500+ Alunos</span>
          <span>10+ Anos Exp.</span>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
