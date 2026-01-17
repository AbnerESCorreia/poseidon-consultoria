import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { z } from "zod";
import bgServicesVid from "../assets/bgServicesVid.mp4";
import ButtonPoseidon from "./ui/ButtonPoseidon";
import BaseModal from "./ui/BaseModal";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [errors, setErrors] = useState({});

  const plans = [
    {
      title: "PLANO START",
      price: "70",
      trimestral: "189",
      semestral: "336",
      description:
        "Para iniciantes: treino já montado para quem nunca treinou.", // Adicionado
      features: [
        { text: "Treino já montado", included: true },
        { text: "Direcionamento inicial", included: true },
        { text: "Avaliação física", included: false },
        { text: "Dieta personalizada", included: false },
      ],
      recommended: false,
    },
    {
      title: "PLANO ESSENCIAL",
      price: "150",
      trimestral: "405",
      semestral: "720",
      description:
        "Para quem quer resultados com treino personalizado para seu objetivo.", // Adicionado
      features: [
        { text: "Avaliação física online", included: true },
        { text: "Treino personalizado", included: true },
        { text: "Suporte online", included: true },
        { text: "Ajustes de treino", included: true },
        { text: "Dieta personalizada", included: false },
      ],
      recommended: true,
    },
    {
      title: "PLANO AVANÇADO",
      price: "230",
      trimestral: "621",
      semestral: "1.104",
      description:
        "Para você que quer ainda mais resultados e suporte completo.", // Adicionado
      features: [
        { text: "Avaliação completa", included: true },
        { text: "Treino + Dieta individual", included: true },
        { text: "Ajustes frequentes", included: true },
        { text: "Suporte exclusivo", included: true },
        { text: "Acompanhamento contínuo", included: true },
      ],
      recommended: false,
    },
  ];

  // Esquema de Validação com Zod
  const userSchema = z.object({
    nome: z
      .string()
      .min(3, "O nome deve ter pelo menos 3 letras")
      .refine((val) => val.trim().split(" ").length >= 2, {
        message: "Digite seu nome completo (nome e sobrenome)",
      }),
    whatsapp: z
      .string()
      .min(10, "Mínimo de 10 dígitos (DDD + número)")
      .max(11, "Máximo de 11 dígitos (DDD + número)")
      .regex(/^[0-9]+$/, "Insira apenas números"),
  });

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setErrors({});
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome_comprador").value;
    const whatsapp = document.getElementById("whatsapp_comprador").value;
    const pagamento = document.getElementById("metodo_pagamento").value;

    const validation = userSchema.safeParse({ nome, whatsapp });

    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const plano = selectedPlan?.title;
    const valor = selectedPlan?.price;

    const mensagem =
      `🔱 *NOVA INSCRIÇÃO - POSEIDON* 🔱%0A%0A` +
      `👤 *Cliente:* ${nome}%0A` +
      `📱 *WhatsApp:* ${whatsapp}%0A` +
      `💎 *Plano:* ${plano}%0A` +
      `💰 *Valor:* R$ ${valor}%0A` +
      `💳 *Método:* ${pagamento}%0A%0A` +
      `---%0A` +
      `_Favor enviar o link de pagamento da InfinitePay._`;

    const seuNumero = "5511977129082";
    window.open(`https://wa.me/${seuNumero}?text=${mensagem}`, "_blank");
  };

  return (
    <section className="services" id="servicos">
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
          <p className="services__text mx-auto text-secondary">
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
                <h3 className="service-card__title fw-bold">{plan.title}</h3>
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
                  className="w-100 mt-auto fw-bold"
                  onClick={() => handleOpenModal(plan)}
                >
                  Assinar Agora
                </ButtonPoseidon>

                <p className="service-card__description mt-3 mb-0 text-center small text-secondary italic">
                  {plan.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="services__discounts mt-5 text-center">
          <Row className="justify-content-center g-3">
            <Col md={4}>
              <div className="discount-pill">
                <h4 className="mb-2 fw-bold">Trimestral</h4>
                <strong>10% de Desconto</strong>
                <p className="m-0">3x sem juros</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="discount-pill">
                <h4 className="mb-2 fw-bold">Semestral</h4>
                <strong>20% de Desconto</strong>
                <p className="m-0">6x sem juros</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <BaseModal
        show={showModal}
        handleClose={handleClose}
        title="Finalizar Inscrição"
      >
        <Form onSubmit={handleSendWhatsApp}>
          <Row className="g-3 mb-3">
            <Col md={6}>
              <Form.Label className="fw-bold small text-secondary">
                PLANO SELECIONADO
              </Form.Label>
              <Form.Control
                readOnly
                value={selectedPlan?.title || ""}
                className="input-locked"
              />
            </Col>
            <Col md={6}>
              <Form.Label className="fw-bold small text-secondary">
                VALOR MENSAL
              </Form.Label>
              <Form.Control
                readOnly
                value={selectedPlan ? `R$ ${selectedPlan.price}` : ""}
                className="input-locked"
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold text-white">
              Nome Completo
            </Form.Label>
            <Form.Control
              id="nome_comprador"
              type="text"
              placeholder="Como deseja ser chamado?"
              className={`input-poseidon ${errors.nome ? "is-invalid" : ""}`}
            />
            {errors.nome && (
              <div className="text-danger small mt-1">{errors.nome[0]}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold text-white">Seu WhatsApp</Form.Label>
            <Form.Control
              id="whatsapp_comprador"
              type="tel"
              placeholder="Ex: 11999999999"
              className={`input-poseidon ${
                errors.whatsapp ? "is-invalid" : ""
              }`}
            />
            {errors.whatsapp && (
              <div className="text-danger small mt-1">{errors.whatsapp[0]}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold text-white">
              Forma de Pagamento
            </Form.Label>
            <Form.Select id="metodo_pagamento" className="input-poseidon">
              <option value="Cartão de Crédito">
                Cartão de Crédito (Até 12x)
              </option>
              <option value="PIX">PIX (À vista com desconto)</option>
              <option value="Boleto">Boleto Bancário</option>
            </Form.Select>
          </Form.Group>

          <ButtonPoseidon
            type="submit"
            className="w-100 fw-bold py-3 text-uppercase btn-primary-poseidon" // Adicione a classe de estilo aqui
          >
            Ir para Pagamento Seguro
          </ButtonPoseidon>
        </Form>
      </BaseModal>
    </section>
  );
};

export default Services;
