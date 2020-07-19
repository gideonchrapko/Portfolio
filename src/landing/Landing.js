import React from "react";
import { Link } from 'react-router-dom'

import ScrollSnap from 'scroll-snap'

// import SectionOne from "./landing/SectionOne"
// import SectionTwo from "./landing/SectionTwo"
// import SectionThree from "./landing/SectionThree"
// import SectionFour from "./landing/SectionFour"
import About from "../About"
import WorkExperience from "../WorkExperience"

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
                <div className="page first-page">
                    <Link to="/About">About</Link>
                    <Link to="/WorkExperience">Work Experience</Link>
                    <div>Landing</div>
                    <div className="hint">scroll down</div>
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