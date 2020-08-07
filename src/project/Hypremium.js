import React from 'react'

import { Link } from 'react-router-dom';
import { Row, Container, Col, Image } from 'react-bootstrap';
import Back from "../landing/skins/back.svg";
import Profile from "../landing/skins/profile.svg";

const Hypremium = () => {
    return (
        <div>
            <div 
            style={{ 
                backgroundColor: "#E4E4D9", 
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
                        <Link to="/view/portfolio">
                            Back
                        </Link>
                    </Col>
                    <Col className="position-fixed background col-lg-2 col-4 offset-1" style={{ left: "-45px", marginTop: "100px" }}> 
                        <Image src={Back} />
                    </Col>
                    <Col className="position-fixed background col-3 offset-8" style={{ marginTop: "100px" }} >
                        <Image src={Profile} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row  className="FixedHeightContainer">
                    <Col className="Content">
                        <Row>
                            <Col className="col-3 text-right offset-9" style={{ marginTop: "30px", padding: "40px" }}>
                                <h1>Project Name</h1>
                                <h5>Year</h5>
                                <h5>Location</h5>
                                <h5>Project Title</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-6">
                            <h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                                sint occaecat cupidatat non proident, sunt in culpa qui 
                                officia deserunt mollit anim id est laborum.<br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                                sint occaecat cupidatat non proident, sunt in culpa qui 
                                officia deserunt mollit anim id est laborum.
                            </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-2 offset-1" style={{ fontSize: "25pt", WebkitTextStroke: "3px" }}>
                                <Link to="/view/portfolio">
                                    Back
                                </Link>
                            </Col>
                            <Col className="col-2 offset-7" style={{ fontSize: "25pt", WebkitTextStroke: "3px" }} >
                                <Link to="/view/portfolio/westcoastcustoms">
                                    Next
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hypremium