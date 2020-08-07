import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Container, Col, Image } from 'react-bootstrap';
import Back from "./landing/skins/back.svg";
import Arrow from "./landing/skins/arrowSmall.svg"

import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
    return (
        <div >
            <div 
                style={{ 
                    backgroundColor: "#FFBA00", 
                    height: "80vh", 
                    bottom: "0px", 
                    width: "100%",
                    position: "fixed",
                    mixBlendMode: "multiply",
                    borderRadius: "41px 41px 0px 0px",
                    }}>
            </div>
            <Container>
                <Row >
                    <Col className="col-2 position-fixed" style={{ fontSize: "25pt", WebkitTextStroke: "3px", marginTop: "150px", zIndex: "1" }}>
                        <Link to="/">
                            Back
                        </Link>
                    </Col>
                    <Col className="position-fixed background col-lg-2 col-4 offset-1" style={{ left: "-45px", marginTop: "100px" }}> 
                        <Image src={Back} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row  className="FixedHeightContainer" style={{ paddingBottom: "100px" }}>
                    <Col className="Content">
                        <Row style={{ marginTop: "100px" }}>
                            <Col className="col-3 text-left" style={{ fontSize: "2vw", paddingTop: "60px" }}>  
                                001
                            </Col>
                            <Col className="col-6 text-left" style={{ fontSize: "6vw", fontWeight:"600", WebkitTextStroke: "4px" }}>  
                                <Link to="/view/portfolio/juice">The Juice App</Link>
                            </Col>
                            {/* <Col>
                                <Image src={Arrow} className="position-relative background" style={{ position: "relative", zIndex: "-9999999", mixBlendMode: "multiply" }} />
                            </Col> */}
                        </Row>
                        <Row>
                            <Col className="col-3 text-left" style={{ fontSize: "2vw", fontWeight:"600" }}>
                                2020
                            </Col>
                            <Col className="col-6 text-left" style={{ fontSize: "2vw" }}>
                                UX/UI Design and Development 
                            </Col>
                            <Col className="col-3 text-right" style={{ fontSize: "1.5vw", paddingTop: "5px" }}>
                                <a href="www.youtube.com">View on the App Store</a> 
                                
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "100px" }}>
                            <Col className="col-3 text-left" style={{ fontSize: "2vw", paddingTop: "60px" }}>  
                                002
                            </Col>
                            <Col className="col-6 text-left" style={{ fontSize: "6vw", fontWeight:"600", WebkitTextStroke: "4px" }}>  
                                <Link to="/view/portfolio/westcoastcustoms">WestCoastCustoms</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-3 text-left" style={{ fontSize: "2vw", fontWeight:"600" }}>
                                2020
                            </Col>
                            <Col className="col-6 text-left" style={{ fontSize: "2vw" }}>
                                UX/UI Design and Development 
                            </Col>
                            <Col className="col-3 text-right" style={{ fontSize: "1.5vw", paddingTop: "5px" }}>
                                <a href="www.youtube.com">View on the App Store</a> 
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "100px" }}>
                            <Col className="col-3 text-left" style={{ fontSize: "2vw", paddingTop: "60px" }}>  
                                003
                            </Col>
                            <Col className="col-6 text-left" style={{ fontSize: "6vw", fontWeight:"600", WebkitTextStroke: "4px" }}>  
                                <Link to="/view/portfolio/hypremium">Hypremium</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-3 text-left" style={{ fontSize: "2vw", fontWeight:"600" }}>
                                2020
                            </Col>
                            <Col className="col-6 text-left" style={{ fontSize: "2vw" }}>
                                UX/UI Design and Development 
                            </Col>
                            <Col className="col-3 text-right" style={{ fontSize: "1.5vw", paddingTop: "5px" }}>
                                <a href="www.youtube.com">View on the App Store</a> 
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "100px" }}>
                            <Col className="col-3 text-left" style={{ fontSize: "2vw", paddingTop: "60px" }}>  
                                004
                            </Col>
                            <Col className="col-6 text-left" style={{ fontSize: "6vw", fontWeight:"600", WebkitTextStroke: "4px" }}>  
                                <Link to="//view/portfolio/juice">The Juice App</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-3 text-left" style={{ fontSize: "2vw", fontWeight:"600" }}>
                                2020
                            </Col>
                            <Col className="col-6 text-left" style={{ fontSize: "2vw" }}>
                                UX/UI Design and Development 
                            </Col>
                            <Col className="col-3 text-right" style={{ fontSize: "1.5vw", paddingTop: "5px" }}>
                                <a href="www.youtube.com">View on the App Store</a> 
                            </Col>
                            <div style={{ height: "200px" }}>

                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio