import React from 'react';
import ScrollSnap from 'scroll-snap'

import { Link } from 'react-router-dom';
import { Row, Container, Col, Image } from 'react-bootstrap';
import Back from "./landing/skins/back.svg";
import Arrow from "./landing/skins/arrowSmall.svg"

import 'bootstrap/dist/css/bootstrap.min.css';


function callback() {
    console.log('snapped')
  }


class Portfolio extends React.Component {

container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '65%',
    })

    snapElement.bind(callback)
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

    render () {
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
                <Row  className="FixedHeightContainer">
                    <Col className="Content" id="container" ref={this.container}>
                        <div style={{ marginTop: "150px" }}>
                            <Row>
                                <Col className="col-2 text-left" style={{ fontSize: "1.2vw", paddingTop: "80px" }}>  
                                    001
                                </Col>
                                <Col className="col-7 text-left" style={{ fontSize: "7vw", fontWeight:"600", WebkitTextStroke: "7px" }}>  
                                    <Link to="/view/portfolio/juice">The Juice App</Link>
                                </Col>
                                {/* <Col>
                                    <Image src={Arrow} className="position-relative background" style={{ position: "relative", zIndex: "-9999999", mixBlendMode: "multiply" }} />
                                </Col> */}
                            </Row>
                            <Row>
                                <Col className="col-2 text-left" style={{ fontSize: "1.2vw", fontWeight:"600" }}>
                                    2020
                                </Col>
                                <Col className="col-7 text-left" style={{ fontSize: "1.2vw" }}>
                                    UX/UI Design and Development 
                                </Col>
                                <Col className="col-3 text-right" style={{ fontSize: "1.2vw", paddingTop: "5px" }}>
                                    <a href="www.youtube.com">View on the App Store</a> 
                                    
                                </Col>
                            </Row>
                        </div>
                        <div style={{ marginTop: "150px" }}>
                            <Row>
                                <Col className="col-2 text-left" style={{ fontSize: "1.2vw", paddingTop: "80px" }}>  
                                    002
                                </Col>
                                <Col className="col-7 text-left" style={{ fontSize: "7vw", fontWeight:"600", WebkitTextStroke: "7px" }}>  
                                    <Link to="/view/portfolio/westcoastcustoms">WestCoastCustoms</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-2 text-left" style={{ fontSize: "1.2vw", fontWeight:"600" }}>
                                    2020
                                </Col>
                                <Col className="col-7 text-left" style={{ fontSize: "1.2vw" }}>
                                    UX/UI Design and Development 
                                </Col>
                                <Col className="col-3 text-right" style={{ fontSize: "1.2vw", paddingTop: "5px" }}>
                                    <a href="www.youtube.com">View on the App Store</a> 
                                </Col>
                            </Row>
                        </div>
                        <div style={{ marginTop: "150px" }}>
                            <Row>
                                <Col className="col-2 text-left" style={{ fontSize: "1.2vw", paddingTop: "80px" }}>  
                                    003
                                </Col>
                                <Col className="col-7 text-left" style={{ fontSize: "7vw", fontWeight:"600", WebkitTextStroke: "7px" }}>  
                                    <Link to="/view/portfolio/hypremium">Hypremium</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-2 text-left" style={{ fontSize: "1.2vw", fontWeight:"600" }}>
                                    2020
                                </Col>
                                <Col className="col-7 text-left" style={{ fontSize: "1.2vw" }}>
                                    UX/UI Design and Development 
                                </Col>
                                <Col className="col-3 text-right" style={{ fontSize: "1.2vw", paddingTop: "5px" }}>
                                    <a href="www.youtube.com">View on the App Store</a> 
                                </Col>
                            </Row>
                        </div>
                        <div style={{ marginTop: "150px" }}>
                            <Row>
                                <Col className="col-2 text-left" style={{ fontSize: "1.2vw", paddingTop: "80px" }}>  
                                    004
                                </Col>
                                <Col className="col-7 text-left" style={{ fontSize: "7vw", fontWeight:"600", WebkitTextStroke: "7px" }}>  
                                    <Link to="//view/portfolio/juice">The Juice App</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-2 text-left" style={{ fontSize: "1.2vw", fontWeight:"600" }}>
                                    2020
                                </Col>
                                <Col className="col-7 text-left" style={{ fontSize: "1.2vw" }}>
                                    UX/UI Design and Development 
                                </Col>
                                <Col className="col-3 text-right" style={{ fontSize: "1.2vw", paddingTop: "5px" }}>
                                    <a href="www.youtube.com">View on the App Store</a> 
                                </Col>
                            </Row>
                            <div style={{ height: "150px" }}>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )}
}

export default Portfolio