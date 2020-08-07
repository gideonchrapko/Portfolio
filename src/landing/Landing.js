import React from "react";
import { Link } from 'react-router-dom';
import { Row, Container, Col, Image } from 'react-bootstrap';
import ThreeD from '../3D/ThreeD';
import BOne from "./skins/bgOne.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.scss"

const Landing = () => {

    return (
        <div>
            <Container className="left background" style={{ left: "0", width: "39%", position: "fixed"}}>
                <Row >
                    <Col className="col-lg-4 col-6 position-fixed"> 
                        <Image src={BOne} style={{ marginTop: "60px" }} />
                    </Col>
                    <Col className="col-8 offset-1">
                        <div style={{ fontSize: "3vw", WebkitTextStroke: "3px", marginTop: "150px" }}>
                            Hello, my name is Gideon Chrapko. I'm a UX Designer and Front End Developer. 
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 text-right" style={{ fontSize: "25pt", WebkitTextStroke: "3px" }}>
                        <Link to="/view/portfolio">Enter</Link>
                    </Col>
                </Row>
            </Container >
            <Container style={{ width: "70%", right: "0", bottom: "10px", position: "absolute", zIndex: "-1", height: "80%" }}>
                <ThreeD />
            </Container >
        </div>
    );
}

export default Landing;


                {/* <Row style={{ bottom: "0px", position: "fixed", padding: "30px" }}>
                    <Col className="col-12" style={{ fontSize: "25pt", WebkitTextStroke: "3px" }}>
                        <Link to="/view/portfolio">View</Link>
                    </Col>
                </Row> */}