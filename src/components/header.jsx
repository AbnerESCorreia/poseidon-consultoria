import React, { useState, useEffect } from "react";
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
      className={`transition-all ${scrolled ? "scrolled" : "bg-transparent"}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          POSEIDON<span className="text-warning">.</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#servicos">Serviços</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
          <ButtonPoseidon variant="secondary">Área do Aluno</ButtonPoseidon>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
