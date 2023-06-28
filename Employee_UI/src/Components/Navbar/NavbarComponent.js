import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function NavbarComponent() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={goToHome} href="#home">
            Employee Management System
          </Navbar.Brand>

          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
