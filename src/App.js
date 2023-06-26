import './App.css';
import logo from './logo192.png'
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {CounterButton} from "./components/CounterButton";
import {Grid} from "./components/grid/Grid";
import FigureImage from "react-bootstrap/FigureImage";

function App() {
  return (
    <Container fluid>
      <Row className={"vh-100"}>
        <Col sm={2} className={"Sidebar p-4 d-flex flex-column"}>
          <div className={"d-grid gap-3 shadow-sm Green"}>
            <h1 className={"display-6 text-center text-warning "}>Dev Dashboard</h1>
            <hr className={"hr border border-warning"}></hr>
            <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Home</button>
            <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Archive</button>
            <button type={"button"} className={"rounded-4 btn btn-outline-warning"}>Contact</button>
          </div>
          <div className={"Red mt-auto"}>
            <hr className={"hr border border-warning"}></hr>
            <FigureImage alt={"Dev Dashboard"} src={logo} className={""}></FigureImage>
          </div>
        </Col>
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
      </Row>
    </Container>
  );
}

export default App;
