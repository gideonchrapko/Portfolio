import React from "react";
import { Link } from 'react-router-dom';
import { Row, Container, Col, Image } from 'react-bootstrap';
import ThreeD from '../3D/ThreeD';
import BOne from "./skins/bgOne.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.scss"

const Landing = () => {

    return (
        <div className="background" >
            <Container className="left" style={{ left: "0", width: "39%", position: "fixed"}}>
                <Row>
                    <Col className="col-lg-4 col-6 position-fixed"> 
                        <Image src={BOne} style={{ marginTop: "60px" }}/>
                    </Col>
                    <Col className="col-8 offset-1">
                        <div style={{ fontSize: "3vw", WebkitTextStroke: "3px", marginTop: "150px" }}>
                            death to your family for 1000 years
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                    <Col className="col-12 text-right" style={{ fontSize: "25pt", WebkitTextStroke: "3px" }}>
                        <Link to="/view/portfolio">Enter</Link>
                    </Col>
                </Row> */}
            </Container >
            <Container style={{ width: "150%", left: "0", right: "0", bottom: "0px", position: "absolute", zIndex: "-1", height: "100%" }}>
                <ThreeD />
            </Container >
            <Container>
                <Row>
                    <Col className="col-11 text-right" style={{ fontSize: "25pt", WebkitTextStroke: "3px", bottom: "0", position: "absolute" }}>
                        <Link to="/view/portfolio">Enter</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;