import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer-fitpro pt-5 pb-4">
      <Container>
        {/* Linha Principal: Logo, Menu e Redes */}
        <Row className="align-items-center mb-4">
          {/* Logo */}
          <Col md={3} className="text-start">
            <h4 className="footer-fitpro__logo fw-bold mb-0">
              POSEIDON<span>.</span>
            </h4>
          </Col>

          {/* Navegação Centralizada */}
          <Col md={6} className="text-center">
            <nav className="footer-fitpro__nav d-flex justify-content-center gap-4">
              <a href="#about">Sobre</a>
              <a href="#services">Serviços</a>
              <a href="#testimonials">Depoimentos</a>
              <a href="#contact">Contato</a>
            </nav>
          </Col>

          {/* Redes Sociais à Direita */}
          <Col md={3} className="text-end">
            <div className="footer-fitpro__social d-flex justify-content-end gap-3">
              <a
                href="https://www.instagram.com/consultoriaposeidon"
                className="social-circle"
              >
                <RiInstagramLine />
              </a>
            </div>
          </Col>
        </Row>

        {/* Linha Divisória Fina */}
        <hr className="footer-fitpro__divider mb-4" />

        {/* Copyright */}
        <Row>
          <Col className="text-center text-secondary small">
            <p>© 2026 Poseidon Consultoria. Todos os direitos reservados.</p>
            <i>Desenvolvido por AbnerESCorreia</i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
