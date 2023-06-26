import './App.css';
import logo from './logo.png'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import {CounterButton} from "./components/CounterButton";
import {Grid} from "./components/grid/Grid";

function App() {


  return (
    <div className={"Background"}>
      <Container fluid className={"InnerBack"}>
        <Row className={"FullHeightRow"}>
          <Col sm={2} className={"Navbar flex-column flex-shrink-0 p-4 text-white bg-dark"}>
            <div className={"d-grid gap-3 "}>
              <Button style={{borderRadius: 15}}>Home</Button>
              <Button style={{borderRadius: 15}}>Archive</Button>
              <Button style={{borderRadius: 15}}>Contact</Button>
              <Image alt={"Dev Dashboard"} src={logo} className={"img-fluid align-bottom align-center xs"}></Image>
            </div>
          </Col>
          <Col sm={9} className={"MainPanel text-white bg-dark"}>
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
    </div>
  );
}

export default App;
