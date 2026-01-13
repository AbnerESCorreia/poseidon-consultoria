import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ButtonPoseidon from "./ui/ButtonPoseidon";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 logo-text">
          POSEIDON<span className="dot-yellow">.</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links-container">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#services">Serviços</Nav.Link>
            <Nav.Link href="#testimonials">Depoimentos</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://wa.me/5511977129082"
              target="_blank"
              className="p-0"
            >
              <ButtonPoseidon type="secondary">Contatar</ButtonPoseidon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
