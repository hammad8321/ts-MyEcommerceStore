// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import {  Container, Nav, Navbar, } from "react-bootstrap";
import { Outlet } from "react-router";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>My Scam E-Commerce Store</Navbar.Brand>           
          </Container>
          <Nav>
            <a className="nav-link" href="/cart">
              Cart
            </a>
            <a className="nav-link" href="/signin">
              Sign in
            </a>
          </Nav>
        </Navbar>
      </header>
      <main  >
        <Container className="mt-3 ">
        <Outlet  />
        </Container>
      </main>

      <footer >
        <div  className="text-center">All right Reserved </div>{" "}
      </footer>
    </div>
  );
}

export default App;
