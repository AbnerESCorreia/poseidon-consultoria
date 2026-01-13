import { Container, Row, Col } from "react-bootstrap";
import ButtonPoseidon from "./ui/ButtonPoseidon";

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
    <section id="servicos" className="services py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h6 className="text-warning text-uppercase tracking-widest">
            Nossos Serviços
          </h6>
          <h2 className="display-4 fw-bold text-white">Escolha seu Plano</h2>
          <p className="mt-3 fs-5 text-white">
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
                <ButtonPoseidon variant="primary">Assinar Agora</ButtonPoseidon>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
