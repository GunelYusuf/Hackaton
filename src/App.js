import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Model1 from "./Model1";
import Model2 from "./Model2";
import Model3 from "./Model3";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  let background = require("./alastech-logo.png");
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/Model1">
            <img
              src={background}
              alt="Alastech Logo"
              width="100%"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Model1">Model 1</Nav.Link>
            <Nav.Link href="/Model2">Model 2</Nav.Link>
            <Nav.Link href="/Model3">Model 3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/Model1" element={<Model1 />} />
          <Route path="/Model2" element={<Model2 />} />
          <Route path="/Model3" element={<Model3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
