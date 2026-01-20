import { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { z } from "zod";
import {
  RiInstagramLine,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
} from "react-icons/ri";
import ButtonPoseidon from "./ui/ButtonPoseidon";

const Contact = () => {
  const [errors, setErrors] = useState({});

  // Regras de Validação (Nome, Tel 10-11 dígitos e Mensagem mínima)
  const contactSchema = z.object({
    nome: z.string().min(3, "Digite seu nome completo"),
    telefone: z
      .string()
      .min(10, "DDD + Número (mínimo 10 dígitos)")
      .max(11, "Máximo 11 dígitos"),
    email: z.string().email("Digite um e-mail válido"),
    objetivo: z.string().min(10, "Conte um pouco mais sobre seu objetivo"),
  });

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
      value: "+55 11 11947912020",
      link: "https://wa.me/5511947912020",
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

  const handleSendMessage = (e) => {
    e.preventDefault();

    const data = {
      nome: document.getElementById("contact_name").value,
      telefone: document.getElementById("contact_phone").value,
      email: document.getElementById("contact_email").value,
      objetivo: document.getElementById("contact_objective").value,
    };

    const validation = contactSchema.safeParse(data);

    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors);
      return;
    }

    setErrors({});

    // Formatação da mensagem para o WhatsApp
    const msg =
      `🔱 *CONTATO SITE - POSEIDON* 🔱%0A%0A` +
      `👤 *Nome:* ${data.nome}%0A` +
      `📱 *Telefone:* ${data.telefone}%0A` +
      `📧 *Email:* ${data.email}%0A` +
      `🎯 *Objetivo:* ${data.objetivo}`;

    const meuWhats = "5511947912020";
    window.open(`https://wa.me/${meuWhats}?text=${msg}`, "_blank");
  };

  return (
    <section className="contact py-5" id="contact">
      <Container className="py-5">
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

          <Col lg={6}>
            <Card className="contact-card border-0 p-4 p-md-5 h-100 shadow-lg">
              <h4 className="text-white mb-4 mt-0">Envie uma mensagem</h4>
              <Form
                onSubmit={handleSendMessage}
                className="h-100 d-flex flex-column"
              >
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Label className="text-secondary small mb-1">
                      Nome
                    </Form.Label>
                    <Form.Control
                      id="contact_name"
                      type="text"
                      className={`custom-input ${
                        errors.nome ? "is-invalid" : ""
                      }`}
                      placeholder="Seu nome"
                    />
                    {errors.nome && (
                      <div className="text-danger small mt-1">
                        {errors.nome[0]}
                      </div>
                    )}
                  </Col>

                  <Col md={6}>
                    <Form.Label className="text-secondary small mb-1">
                      Telefone
                    </Form.Label>
                    <Form.Control
                      id="contact_phone"
                      type="tel"
                      className={`custom-input ${
                        errors.telefone ? "is-invalid" : ""
                      }`}
                      placeholder="11999999999"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                      }
                    />
                    {errors.telefone && (
                      <div className="text-danger small mt-1">
                        {errors.telefone[0]}
                      </div>
                    )}
                  </Col>

                  <Col xs={12}>
                    <Form.Label className="text-secondary small mb-1">
                      Email
                    </Form.Label>
                    <Form.Control
                      id="contact_email"
                      type="email"
                      className={`custom-input ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <div className="text-danger small mt-1">
                        {errors.email[0]}
                      </div>
                    )}
                  </Col>

                  <Col xs={12}>
                    <Form.Label className="text-secondary small mb-1">
                      Qual seu objetivo?
                    </Form.Label>
                    <Form.Control
                      id="contact_objective"
                      as="textarea"
                      rows={6}
                      className={`custom-input ${
                        errors.objetivo ? "is-invalid" : ""
                      }`}
                      placeholder="Ex: Emagrecimento, Hipertrofia..."
                    />
                    {errors.objetivo && (
                      <div className="text-danger small mt-1">
                        {errors.objetivo[0]}
                      </div>
                    )}
                  </Col>

                  <Col xs={12} className="mt-4">
                    <ButtonPoseidon
                      type="submit"
                      className="w-100 py-3 text-uppercase fw-bold"
                    >
                      Enviar via WhatsApp
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
