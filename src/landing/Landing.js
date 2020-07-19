import React from "react";
import { Link } from 'react-router-dom'

import ScrollSnap from 'scroll-snap'

import { Row, Container, Col } from 'react-bootstrap';
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
                    <header class="masthead">
                        <div class="container h-100">
                            <div class="row align-items-center" style={{ marginTop: '20px' }}>
                                <div class="col-4 text-right header">
                                    July 19, 2020<br/><br/><br/>
                                </div>
                                <div class="col-4 text-right header">
                                    Contact<br/>
                                    gideonchrapko@hotmail.ca<br/><br/>
                                </div>
                                <div class="col-2 text-right header">
                                    Location<br/>
                                    Vancouver, BC, Canada<br/><br/>
                                </div>
                                <div class="col-2 text-right header">
                                    Social <br/>
                                    Behance <br/>
                                    Linkedin
                                </div>
                            </div>
                            <div class="row align-items-center" style={{ marginTop: '20px' }}>
                                <div class="col-2 text-left header">
                                    <Link to="/About">About</Link><br/>
                                    <Link to="/WorkExperience">Work Experience</Link>
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