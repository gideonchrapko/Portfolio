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
import Enter from "./skins/enter.svg"

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
                        <Col lg={{ span: 4, offset: 0 }} className="position-fixed background"> 
                              <Image src={BOne} style={{ marginTop: "60px"}} />
                         </Col>
                         <Col lg={{ span: 6, offset: 5}} className="position-fixed background"> 
                            <Image src={BTwo} style={{ right: "0px", marginTop: "-5px" }} />
                        </Col>
                        <Col lg={{ span: 3 }} className="position-fixed background" style={{  marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col lg={{ span: 3, offset: 3 }} className="position-fixed background" style={{ left: "18px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col lg={{ span: 3, offset: 6 }} className="position-fixed background" style={{ left: "-15px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col lg={{ span: 3, offset: 9 }} className="position-fixed background" style={{ left: "-45px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                    </Row>
                </Container>
                <div className="containerFluid">
                    <header className="masthead" style={{ position: "fixed", width: "100%", zIndex: "9" }}>
                        <div className="container">
                            <div className="row frame" style={{ marginTop: "20px", WebkitTextStroke: "2px" }}>
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
                        </div>
                    </header>
                </div>
                <Container className="page first-page">
                    <Row>
                        <Col lg={{ span: 5 }}>
                            <div style={{ fontSize: "37pt", WebkitTextStroke: "3px", textAlign: "Left" }}>
                                Hello, my name is Gideon Chrapko. I am a UX Designer and Front End Developer. 
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
    }
}

export default Landing;