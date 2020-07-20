import React from "react";
import { Link } from 'react-router-dom'
import ScrollSnap from 'scroll-snap'
import BOne from "./skins/bOne.png"
import BTwo from "./skins/bTwo.png"
import BThree from "./skins/bThree.png"
import { Row, Container, Col, Image } from 'react-bootstrap';
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
                        <Image src={BOne} style={{ left: "30px", top: "60px", height: "100vh", width: "auto", position: "fixed", zIndex: "-9" }} className="background" />
                        <Image src={BTwo} style={{ top: "30px", right: "5px", height: "20vh", width: "auto", position: "fixed", zIndex: "-9" }} className="background" />
                        <Image src={BThree} style={{ right: "40px", top: "-80px", height: "100vh", width: "auto", position: "fixed", zIndex: "-9" }} className="background" />
                    </header>
                    <header className="masthead" style={{ position: "fixed", width: "100vw", zIndex: "9" }}>
                        <div className="container h-100">
                            <div className="row frame" style={{ marginTop: '20px' }}>
                                <div className="col-4 text-right">
                                    July 19, 2020<br/><br/><br/>
                                </div>
                                <div className="col-4 text-right">
                                    Contact<br/>
                                    gideonchrapko@hotmail.ca<br/><br/>
                                </div>
                                <div className="col-2 text-right">
                                    Location<br/>
                                    Vancouver, BC, Canada<br/><br/>
                                </div>
                                <div className="col-2 text-right">
                                    Social <br/>
                                    Behance <br/>
                                    Linkedin
                                </div>
                            </div>
                            <div className="row align-items-center" style={{ marginTop: '20px' }}>
                                <div className="col-2 text-left frame">
                                    <Link to="/About">About</Link><br/>
                                    <Link to="/WorkExperience">Work Experience</Link><br/><br/>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="page first-page">
                    <div>Info</div>
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