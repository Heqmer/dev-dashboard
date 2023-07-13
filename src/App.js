import './App.css';
import {Container, Image} from "react-bootstrap";
import React from "react";
import logo from "./logo.png"
import {CounterButton} from "./components/CounterButton";
import {Grid} from "./components/grid/Grid";

function App() {
  return (
    <main data-bs-theme={"dark"}>
      <div className={"d-flex flex-column flex-shrink-0 p-3 bg-dark-subtle"} style={{width: 300}}>
        <h2 className={"text-center text-warning "}>Dev Dashboard</h2>
        <hr className={"hr border border-warning"}></hr>
        <ul className={"navbar-nav mb-auto gap-3 d-grid"}>
          <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Home</button>
          <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Archive</button>
          <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Contact</button>
        </ul>
        <hr className={"hr border border-warning"}></hr>
        <div className={"w-25"}>
          <Image alt={"Dev Dashboard"} src={logo} className={"img-fluid"}></Image>
        </div>
      </div>
      <Container fluid className={"MainPanel p-4 bg-dark text-white"}>
        <header>
          <p>
            Nested component test:
          </p>
          <p>
            <CounterButton/>
          </p>
          <Grid/>
        </header>
      </Container>
    </main>
  );
}

export default App;
