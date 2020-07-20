import React from "react";
import { Link } from 'react-router-dom'
import ScrollSnap from 'scroll-snap'
import { Row, Container, Col, Image } from 'react-bootstrap';

import BOne from "./skins/bOne.png"
import BTwo from "./skins/bTwo.png"
import BThree from "./skins/bThree.png"
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
                <div className="containerFluid h-100">
                    <header className="masthead">
                        <Image src={BOne} style={{ left: "20px", top: "60px", height: "100vh", width: "auto", position: "fixed", zIndex: "-9" }} className="background" />
                        <Image src={BTwo} style={{ top: "30px", right: "45px", height: "auto", width: "40vw", position: "fixed", zIndex: "-9" }} className="background" />
                        <Image src={BThree} style={{ right: "20px", top: "-80px", height: "100vh", width: "auto", position: "fixed", zIndex: "-9" }} className="background" />
                    </header>
                    <header className="masthead" style={{ position: "fixed", width: "100%", zIndex: "9" }}>
                        <div className="container h-100">
                            <div className="row frame" style={{ marginTop: "20px" }}>
                                <div className="col-4 text-left">
                                    July 19, 2020<br/><br/><br/>
                                </div>
                                <div className="col-4 text-right">
                                    Location<br/>
                                    Vancouver, BC, Canada<br/><br/>
                                </div>
                                <div className="col-2 text-right">
                                    Contact<br/>
                                    Email<br/><br/>
                                </div>
                                <div className="col-2 text-right">
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
                <header className="container">
                        <div className="row">
                            <div className="col-6 offset-4"> 
                                <Image src={PinkArrow} style={{ top: "300px", marginLeft: "50px", height: "40vh", width: "auto", position: "absolute", zIndex: "-7" }} className="background" />
                                <Image src={OrangeArrow} style={{ top: "350px", height: "40vh", width: "auto", position: "absolute", zIndex: "-8" }} className="background" />
                            </div>
                        </div>
                    </header>
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
                <div className="page second-page">
                    <div>ProjectOne</div>
                </div>
                <div className="page third-page">
                    <div>ProjectTwo</div>
                </div>
                <div className="page fourth-page">
                    <div>ProjectThree</div>
                </div>
                <div className="page fifth-page">
                    <div>ProjectFour</div>
                    <div className="hint">scroll up</div>
                </div>
            </div>
        </div>
    );
    }
}

export default Landing;