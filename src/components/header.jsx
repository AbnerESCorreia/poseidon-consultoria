import { Navbar, Nav, Container } from "react-bootstrap";
import ButtonPoseidon from "./ui/ButtonPoseidon";

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar p-3" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          POSEIDON<span className="text-warning">.</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#services">Serviços</Nav.Link>
            <Nav.Link href="#testimonials">Depoimentos</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
          <ButtonPoseidon type="secondary" href="https://wa.me/5511977129082">
            Contatar
          </ButtonPoseidon>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
