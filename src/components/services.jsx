import { Container, Row, Col } from "react-bootstrap";
import ButtonPoseidon from "./ui/ButtonPoseidon";
import bgServicesVid from "../assets/bgServicesVid.mp4"; // Certifique-se da extensão correta

const Services = () => {
  const plans = [
    {
      title: "Consultoria Mensal",
      price: "197",
      features: [
        "Treino Individualizado",
        "Ajuste Semanal",
        "Suporte via WhatsApp",
        "App Exclusivo",
      ],
      recommended: false,
    },
    {
      title: "Plano Trimestral",
      price: "497",
      features: [
        "Tudo do Mensal",
        "Avaliação por Vídeo",
        "Guia Nutricional",
        "Check-in Prioritário",
      ],
      recommended: true,
    },
    {
      title: "Consultoria VIP",
      price: "997",
      features: [
        "Tudo do Trimestral",
        "Chamada Quinzenal",
        "Treino de Pose",
        "Acesso 24h",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="services" className="services py-5">
      <video autoPlay muted loop playsInline className="services__video">
        <source src={bgServicesVid} type="video/mp4" />
      </video>
      <Container className="py-5 text-center services__content">
        <div className="text-center mb-5">
          <h6 className="services__badge fw-bold text-uppercase mb-3">
            Nossos Serviços
          </h6>
          <h2 className="display-4 fw-bold text-white">Escolha seu Plano</h2>
          <p className="testimonials__text lead mb-4 mx-auto">
            Treinos personalizados, acompanhamento nutricional e resultados
            reais. Alcance seus objetivos com orientação profissional.
          </p>
        </div>

        <Row className="gy-4">
          {plans.map((plan, index) => (
            <Col key={index} lg={4} md={6}>
              <div
                className={`service-card ${
                  plan.recommended ? "service-card--recommended" : ""
                }`}
              >
                {plan.recommended && (
                  <span className="badge-recommended">Mais Popular</span>
                )}
                <h3 className="service-card__title">{plan.title}</h3>
                <div className="service-card__price">
                  <span className="currency">R$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/mês</span>
                </div>
                <ul className="service-card__list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <ButtonPoseidon type="secondary">Assinar Agora</ButtonPoseidon>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
