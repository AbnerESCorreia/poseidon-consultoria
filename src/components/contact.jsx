import { Container, Row, Col, Card, Form } from "react-bootstrap";
import {
  RiInstagramLine,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
} from "react-icons/ri";
import ButtonPoseidon from "./ui/ButtonPoseidon";

const Contact = () => {
  const contactItems = [
    {
      icon: <RiMapPinLine />,
      label: "Localização",
      value: "Em sua casa!",
      link: "https://maps.google.com",
    },
    {
      icon: <RiWhatsappLine />,
      label: "WhatsApp",
      value: "+55 11 97712-9082",
      link: "https://wa.me/5511977129082",
    },
    {
      icon: <RiMailLine />,
      label: "Email",
      value: "contato@consultoriaposeidon.com.br",
      link: "mailto:contato@consultoriaposeidon.com.br",
    },
    {
      icon: <RiInstagramLine />,
      label: "Instagram",
      value: "@consultoriaposeidon",
      link: "https://www.instagram.com/consultoriaposeidon",
    },
  ];

  return (
    <section className="contact py-5" id="contact">
      <Container className="py-5">
        {/* align-items-stretch é a chave para o alinhamento lateral */}
        <Row className="g-4 g-lg-5 align-items-stretch text-start">
          {/* Coluna da Esquerda */}
          <Col lg={6} className="d-flex flex-column">
            <div className="mb-auto">
              <h6 className="contact__badge fw-bold text-uppercase mb-3">
                Contato
              </h6>
              <h2 className="contact__title display-5 fw-bold mb-4">
                Sua jornada fitness começa com o <span>parceiro certo</span>
              </h2>
              <p className="contact__text lead mb-5 text-secondary">
                Entre em contato para agendar sua avaliação física gratuita e
                dar o primeiro passo rumo à sua transformação.
              </p>
            </div>

            {/* Grid de Itens de Contato */}
            <div className="contact-info-grid row row-cols-2 row-cols-md-1 g-3">
              {contactItems.map((item, index) => (
                <div key={index} className="col">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-link d-flex align-items-center h-100"
                  >
                    <div className="icon-box me-3">{item.icon}</div>
                    <div className="info-content">
                      <small className="label-text d-block">{item.label}</small>
                      <span className="value-text fw-medium">{item.value}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </Col>

          {/* Coluna da Direita (Card) */}
          <Col lg={6}>
            <Card className="contact-card border-0 p-4 p-md-5 h-100">
              <h4 className="text-white mb-4 mt-0">Envie uma mensagem</h4>
              <Form className="h-100 d-flex flex-column justify-content-between">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Label className="text-secondary small mb-1">
                      Nome
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="Seu nome"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label className="text-secondary small mb-1">
                      Telefone
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="(11) 99999-9999"
                    />
                  </Col>
                  <Col xs={12} className="mt-3">
                    <Form.Label className="text-secondary small mb-1">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="custom-input"
                      placeholder="seu@email.com"
                    />
                  </Col>
                  <Col xs={12} className="mt-3">
                    <Form.Label className="text-secondary small mb-1">
                      Qual seu objetivo?
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      className="custom-input"
                      placeholder="Conte seus objetivos..."
                    />
                  </Col>
                  <Col xs={12} className="mt-4">
                    <ButtonPoseidon type="primary" className="w-100 py-3">
                      Enviar Mensagem
                    </ButtonPoseidon>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
