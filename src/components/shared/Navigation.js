import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
let clave = "";
let num = "";
clave = (e) => {
  num = e.target.value;
};

let submitHandler = (e) => {
  if (num === "") {
    window.location.href = "/";
  } else {
    window.location.href = `/busqueda/${num}`;
  }
};
function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">ReactJS - Autos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/con-puerto">Provincias con Puerto</Nav.Link>
          <Nav.Link href="/mapa">Mapa Argentina</Nav.Link>
        </Nav>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="number"
            placeholder="Buscar"
            aria-label="Search"
            name="clave"
            onChange={clave}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={submitHandler}
          >
            Buscar
          </button>
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
