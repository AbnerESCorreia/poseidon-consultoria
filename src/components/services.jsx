import { Container, Row, Col } from "react-bootstrap";
import bgServicesVid from "../assets/bgServicesVid.mp4";
import ButtonPoseidon from "./ui/ButtonPoseidon";

const Services = () => {
  const plans = [
    {
      title: "PLANO START",
      price: "70",
      trimestral: "189",
      semestral: "336",
      features: [
        { text: "Treino Estruturado", included: true },
        { text: "Direcionamento Inicial", included: true },
        { text: "Avaliação Física", included: false },
        { text: "Dieta Personalizada", included: false },
      ],
      recommended: false,
    },
    {
      title: "PLANO ESSENCIAL",
      price: "150",
      trimestral: "405",
      semestral: "720",
      features: [
        { text: "Avaliação Física Online", included: true },
        { text: "Treino Personalizado", included: true },
        { text: "Suporte Online", included: true },
        { text: "Ajustes de Treino", included: true },
        { text: "Dieta Personalizada", included: false },
      ],
      recommended: true,
    },
    {
      title: "PLANO AVANÇADO",
      price: "230",
      trimestral: "621",
      semestral: "1.104",
      features: [
        { text: "Avaliação Completa", included: true },
        { text: "Treino + Dieta Individual", included: true },
        { text: "Ajustes Frequentes", included: true },
        { text: "Suporte Exclusivo", included: true },
        { text: "Acompanhamento Contínuo", included: true },
      ],
      recommended: false,
    },
  ];

  return (
    <section className="services py-5" id="servicos">
      <video autoPlay muted loop playsInline className="services__video">
        <source src={bgServicesVid} type="video/mp4" />
      </video>
      <div className="services__overlay"></div>

      <Container className="services__content py-5">
        <div className="text-center mb-5">
          <h6 className="services__badge fw-bold text-uppercase mb-3">
            Planos
          </h6>
          <h2 className="services__title display-5 fw-bold mb-4">
            Escolha seu <span>Plano</span>
          </h2>
          <p className="services__text lead mx-auto text-secondary">
            Invista em você com acompanhamento profissional e resultados
            garantidos.
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          {plans.map((plan, index) => (
            <Col lg={4} key={index}>
              <div
                className={`service-card ${
                  plan.recommended ? "service-card--recommended" : ""
                }`}
              >
                {plan.recommended && (
                  <span className="badge-recommended">Mais Vendido</span>
                )}

                <h3 className="service-card__title">{plan.title}</h3>

                <div className="service-card__price">
                  <span className="currency">R$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/mês</span>
                </div>

                <div className="service-card__bundles">
                  <div className="bundle-item">
                    <span>Trimestral:</span>
                    <strong>R$ {plan.trimestral}</strong>
                  </div>
                  <div className="bundle-item">
                    <span>Semestral:</span>
                    <strong>R$ {plan.semestral}</strong>
                  </div>
                </div>

                <ul className="service-card__list">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={feature.included ? "included" : "not-included"}
                    >
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <ButtonPoseidon
                  type={plan.recommended ? "primary" : "secondary"}
                  className="w-100 mt-auto"
                >
                  Assinar Agora
                </ButtonPoseidon>
              </div>
            </Col>
          ))}
        </Row>

        {/* Info de Descontos Extraída da Imagem */}
        <div className="services__discounts mt-5 text-center">
          <Row className="justify-content-center g-3">
            <Col md={4}>
              <div className="discount-pill">
                <span>Trimestral</span>
                <strong>10% de Desconto</strong>
                <p className="m-0 text-white">3x sem juros</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="discount-pill">
                <span>Semestral</span>
                <strong>20% de Desconto</strong>
                <p className="m-0 text-white">6x sem juros</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Services;
