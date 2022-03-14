import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { ImHome } from "react-icons/im";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdBedroomChild } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

function Top() {
  return (
    <Navbar collapseOnSelect expand="lg" className="top mb-3">
      <div className="container-fluid">
        <Navbar.Brand href="/home">
          <img
            src="./img/logo.png"
            alt="logo"
            width="auto"
            height="95"
            className="imagem-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              eventKey="1"
              className="text-color text-light"
              href="/home"
            >
              <span className="icones">
                <ImHome />
              </span>
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              className="text-color text-light"
              href="/sobre"
            >
              <span className="icones">
                <AiFillInfoCircle />
              </span>
              Sobre
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              className="text-color text-light"
              href="/acomodacao"
            >
              <span className="icones">
                <MdBedroomChild />
              </span>
              Acomodações
            </Nav.Link>
            <Nav.Link
              eventKey="4"
              className="text-color text-light"
              href="/contato"
            >
              <span className="icones">
                <IoMdContact />
              </span>
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export default Top;
