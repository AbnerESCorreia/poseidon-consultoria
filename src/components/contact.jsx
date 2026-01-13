import { Container, Row, Card, Form, Col } from "react-bootstrap";

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
      <Container className="container py-5">
        <Row className="row g-5">
          <Col className="col-lg-6 text-start">
            <h6 className="contact__badge fw-bold text-uppercase mb-3">
              Contato
            </h6>
            <h2 className="contact__title display-5 fw-bold mb-4">
              Sua jornada fitness começa com o <span>parceiro certo</span>
            </h2>
            <p className="contact__text lead mb-4">
              Entre em contato para agendar sua avaliação física gratuita e dar
              o primeiro passo rumo à sua transformação.
            </p>

            <div className="contact-info-list">
              <div className="d-flex align-items-center mb-4">
                <div className="icon-box me-3">
                  <RiMapPinLine size={20} />
                </div>
                <div>
                  <small className="text-secondary d-block">Localização</small>
                  <span className="text-white fw-medium">
                    Academia FitCenter - São Paulo, SP
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="icon-box me-3">
                  <RiWhatsappLine size={20} />
                </div>
                <div>
                  <small className="text-secondary d-block">WhatsApp</small>
                  <span className="text-white fw-medium">(11) 99999-9999</span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="icon-box me-3">
                  <RiMailLine size={20} />
                </div>
                <div>
                  <small className="text-secondary d-block">Email</small>
                  <span className="text-white fw-medium">
                    contato@fitpro.com.br
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="icon-box me-3">
                  <RiInstagramLine size={20} />
                </div>
                <div>
                  <small className="text-secondary d-block">Instagram</small>
                  <span className="text-white fw-medium">@fitpro_personal</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Lado Direito: Formulário */}
          <div className="col-lg-6">
            <Card className="contact-card p-4 p-md-5">
              <h4 className="text-white mb-4">Envie uma mensagem</h4>
              <Form>
                <Row className="g-3">
                  <Col className="col-md-6 text-start">
                    <label className="text-secondary small mb-1">Nome</label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Seu nome"
                    />
                  </Col>
                  <Col className="col-md-6 text-start">
                    <label className="text-secondary small mb-1">
                      Telefone
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="(00) 00000-0000"
                    />
                  </Col>
                  <Col className="col-12 text-start mt-3">
                    <label className="text-secondary small mb-1">Email</label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="seu@email.com"
                    />
                  </Col>
                  <Col className="col-12 text-start mt-3">
                    <label className="text-secondary small mb-1">
                      Qual seu objetivo?
                    </label>
                    <textarea
                      className="form-control custom-input"
                      rows="4"
                      placeholder="Conte um pouco sobre seus objetivos..."
                    ></textarea>
                  </Col>
                  <Col className="col-12 mt-4">
                    <ButtonPoseidon type="primary">
                      Enviar Mensagem
                    </ButtonPoseidon>
                  </Col>
                </Row>
              </Form>
            </Card>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
