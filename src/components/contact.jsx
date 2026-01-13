import { Container, Row, Col, Card, Form } from "react-bootstrap";
import {
  RiInstagramLine,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
} from "react-icons/ri";
import ButtonPoseidon from "./ui/ButtonPoseidon";

const Contact = () => {
  return (
    <section className="contact py-5" id="contato">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          {/* Lado Esquerdo: Texto e Infos */}
          <Col lg={6} className="text-start">
            <h6 className="contact__badge fw-bold text-uppercase mb-3">
              Contato
            </h6>
            <h2 className="contact__title display-5 fw-bold mb-4">
              Sua jornada fitness começa com o <span>parceiro certo</span>
            </h2>
            <p className="contact__text lead mb-5">
              Entre em contato para agendar sua avaliação física gratuita e dar
              o primeiro passo rumo à sua transformação.
            </p>

            <div className="contact-info-list">
              {[
                {
                  icon: <RiMapPinLine />,
                  label: "Localização",
                  value: "Em sua casa!",
                  link: "https://maps.google.com", // Opcional: pode colocar um link do Maps aqui
                },
                {
                  icon: <RiWhatsappLine />,
                  label: "WhatsApp",
                  value: "+55 11 97712-9082",
                  link: "https://wa.me/5511977129082", // Abre o WhatsApp diretamente
                },
                {
                  icon: <RiMailLine />,
                  label: "Email",
                  value: "contato@consultoriaposeidon.com.br",
                  link: "mailto:contato@consultoriaposeidon.com.br", // Abre o app de email padrão
                },
                {
                  icon: <RiInstagramLine />,
                  label: "Instagram",
                  value: "@consultoriaposeidon",
                  link: "https://www.instagram.com/consultoriaposeidon", // Abre o perfil no Instagram
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center mb-4 text-decoration-none contact-item-link"
                >
                  <div className="icon-box me-3">{item.icon}</div>
                  <div>
                    <small className="text-secondary d-block">
                      {item.label}
                    </small>
                    <span className="text-white fw-medium">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </Col>

          {/* Lado Direito: Card de Formulário */}
          <Col lg={6}>
            <Card className="contact-card p-4 p-md-5">
              <h4 className="text-white mb-4">Envie uma mensagem</h4>
              <Form>
                <Row className="g-3">
                  <Col md={6} className="text-start">
                    <Form.Label className="text-secondary small mb-1">
                      Nome
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="Seu nome"
                    />
                  </Col>
                  <Col md={6} className="text-start">
                    <Form.Label className="text-secondary small mb-1">
                      Telefone
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="(11) 99999-9999"
                    />
                  </Col>
                  <Col xs={12} className="text-start mt-3">
                    <Form.Label className="text-secondary small mb-1">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="custom-input"
                      placeholder="seu@email.com"
                    />
                  </Col>
                  <Col xs={12} className="text-start mt-3">
                    <Form.Label className="text-secondary small mb-1">
                      Qual seu objetivo?
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      className="custom-input"
                      placeholder="Conte um pouco sobre seus objetivos..."
                    />
                  </Col>
                  <Col xs={12} className="mt-4">
                    <ButtonPoseidon type="primary" className="w-100">
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
