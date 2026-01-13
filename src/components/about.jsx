import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import {
  RiAwardFill,
  RiUserFollowFill,
  RiFocus2Line,
  RiHeartPulseFill,
} from "react-icons/ri";

const About = () => {
  const features = [
    {
      icon: <RiAwardFill size={35} />,
      title: "Certificações",
      desc: "CREF ativo e especializações em musculação, funcional e emagrecimento",
    },
    {
      icon: <RiUserFollowFill size={35} />,
      title: "Atendimento Personalizado",
      desc: "Cada treino é adaptado às suas necessidades e objetivos específicos",
    },
    {
      icon: <RiFocus2Line size={35} />,
      title: "Foco em Resultados",
      desc: "Metodologia comprovada com acompanhamento de evolução semanal",
    },
    {
      icon: <RiHeartPulseFill size={35} />,
      title: "Qualidade de Vida",
      desc: "Mais do que estética, busco sua saúde e bem-estar duradouros",
    },
  ];

  return (
    <section className="about py-5">
      <Container className="py-5">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <h6 className="about__badge fw-bold text-uppercase mb-3">
              Sobre nós
            </h6>
            <h2 className="about__title display-5 fw-bold mb-4">
              Sua jornada fitness começa com o <span>parceiro certo</span>
            </h2>
            <p className="about__text lead mb-4">
              Há mais de 8 anos ajudo pessoas a transformarem suas vidas através
              do exercício físico. Minha abordagem vai além do treino: entendo
              suas dificuldades, respeito seus limites e celebro cada conquista.
            </p>
            <p className="about__text lead mb-4">
              Seja para emagrecer, ganhar massa muscular, melhorar o
              condicionamento ou simplesmente viver com mais disposição, estou
              aqui para guiar você em cada passo dessa jornada.
            </p>
          </Col>

          <Col lg={6}>
            <Row className="g-4">
              {features.map((f, index) => (
                <Col md={6} key={index}>
                  <Card className="about__card p-3 h-100">
                    <Card.Body>
                      {/* O ícone herda a cor definida no SCSS */}
                      <div className="about__icon mb-3">{f.icon}</div>
                      <Card.Title className="fw-bold text-white h5">
                        {f.title}
                      </Card.Title>
                      <Card.Text className="small opacity-50 text-white">
                        {f.desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
