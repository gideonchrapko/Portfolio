import React from "react";
import { Link } from 'react-router-dom'
import ScrollSnap from 'scroll-snap'
import { Row, Container, Col, Image } from 'react-bootstrap';
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import SectionFour from "./SectionFour"

import BOne from "./skins/bgOne.svg"
import BTwo from "./skins/bgTwo.svg"
import BThree from "./skins/bgThree.svg"
import BFour from "./skins/bgFour.svg"
import PinkArrow from "./skins/pinkarrow.png"
import OrangeArrow from "./skins/orangearrow.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.scss"

function callback() {
    console.log('snapped')
  }

class Landing extends React.Component {

    container = React.createRef()

    bindScrollSnap() {
      const element = this.container.current
      const snapElement = new ScrollSnap(element, {
        snapDestinationY: '100%',
        timeout: 10,
        duration: 100,
      })
      snapElement.bind(callback)
    }
    componentDidMount() {
      this.bindScrollSnap()
    }

  render() {
    return (
        <div>
            <div id="container" ref={this.container}>
                <Container>
                    <Row>
                        <Col lg={{ span: 2, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{ span: 4, offset: 1 }} className="position-fixed background"> 
                              <Image src={BOne} style={{ marginLeft: "-50px" }} />
                         </Col>
                         <Col lg={{ span: 6, offset: 5}} md={{ span: 6, offset: 5 }} xs={{ span: 7, offset: 5 }} className="position-fixed background"> 
                            <Image src={BTwo} style={{ right: "0px", marginTop: "50px" }} />
                        </Col>
                        <Col lg={{ span: 2, offset: 9 }} xs={{ span: 4, offset: 8 }} className="position-fixed background"> 
                            <Image src={BThree} style={{ right: "0px", marginTop: "100px" }} />
                        </Col>
                        <Col lg={{ span: 2, offset: 0 }} md={{ span: 3, offset: 0 }} xs={{ span: 4, offset: 1}} className="position-fixed background"> 
                            <Image src={BFour} style={{ marginLeft: "-50px", marginTop: "10px" }} />
                        </Col>
                    </Row>
                </Container>
                <div className="containerFluid h-100">
                    <header className="masthead" style={{ position: "fixed", width: "100%", zIndex: "9" }}>
                        <div className="container h-100">
                            <div className="row frame" style={{ marginTop: "20px", WebkitTextStroke: "1px" }}>
                                <div className="col-4 text-left">
                                    July 19, 2020<br/>
                                </div>
                                <div className="col-4 text-right" style={{ borderRight: "2px solid black" }}>
                                    Location<br/>
                                    Vancouver, BC, Canada<br/>
                                </div>
                                <div className="col-2 text-right" style={{ borderRight: "2px solid black" }}>
                                    Contact<br/>
                                    Email<br/><br/>
                                </div>
                                <div className="col-2 text-right" >
                                    Social <br/>
                                    Behance <br/>
                                    Linkedin
                                </div>
                            </div>
                            <div className="row align-items-center" style={{ marginTop: '20px' }}>
                                <div className="col-lg-2 col-md-2 col-4 text-left frame">
                                    <Link to="/About" style={{ color: "black", textDecoration: "none" }}>
                                        About
                                    </Link><br/>
                                    <Link to="/WorkExperience" style={{ color: "black", textDecoration: "none" }}>
                                        Work Experience
                                    </Link><br/><br/>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                {/* <Container>
                    <Row>
                        <Col className="frame">

                        </Col>
                    </Row>
                </Container> */}
                <Container>
                    <Row >
                        <Col lg={{ span: 5, offset: 3 }} xs={{ span: 7, offset: 1 }} >
                            <Image src={PinkArrow} style={{ top: "300px", marginLeft: "100px", width: "100%", position: "absolute", zIndex: "-7" }} className="background" />
                            <Image src={OrangeArrow} style={{ top: "350px", position: "absolute", width: "100%", zIndex: "-8" }} className="background" />
                        </Col>
                    </Row>
                </Container>
                <div className="page first-page">
                    <div style={{ fontSize: "60pt", WebkitTextStroke: "6px", textAlign: "center", marginTop: "200px" }}>
                            Gideon Chrapko
                        <br/>
                        <div style={{ fontSize: "20pt", WebkitTextStroke: "3px", marginTop: "-20px" }}>
                            UI/UX Design Portfolio
                        </div>
                        <br/>
                        <div style={{ fontSize: "10pt", WebkitTextStroke: "0px", marginTop: "-100px" }}>
                            Scroll
                        </div>
                    </div>
                </div>
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour>
                </SectionFour>
            </div>
        </div>
    );
    }
}

export default Landing;