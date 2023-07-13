import './App.css';
import {Col} from "react-bootstrap";
import React from "react";
import {CounterButton} from "./components/CounterButton";
import {Grid} from "./components/grid/Grid";

function App() {
  return (
    <main className={"d-flex "}>
      <div className={"d-flex flex-column flex-shrink-0 p-3 bg-dark"} style={{width: 300}}>
        {/*<h1 className={"text-center text-warning "}>Dev Dashboard</h1>*/}
        {/*<hr className={"hr border border-warning"}></hr>*/}
        <ul className={"nav nav-pills flex-column mb-auto"}>
          <li>
            <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Home</button>
          </li>
          <li>
            <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Archive</button>
          </li>
          <li>
            <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Contact</button>
          </li>
        </ul>
        <hr className={"hr border border-warning"}></hr>
        {/*<Image alt={"Dev Dashboard"} src={logo} className={""}></Image>*/}
      </div>
      <Col sm={10} className={"MainPanel p-4"}>
        <header>
          <p>
            Nested component test:
          </p>
          <p>
            <CounterButton/>
          </p>
          <Grid/>
        </header>
      </Col>
    </main>
  );
}

export default App;
