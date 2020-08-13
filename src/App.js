import React from "react";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group"
import { playOne, playTwo, exit } from './timeline/Timeline'

import About from "./About"
import WorkExperience from './WorkExperience'
import Landing from './landing/Landing'
import Portfolio from './Portfolio'
import Hypremium from './project/Hypremium'
import WestCoastCustoms from './project/WestCoastCustoms'
import Juice from './project/Juice'

import BTwo from "./landing/skins/bgTwo.svg"
import BThree from "./landing/skins/bgThree.svg";
import BThree1 from "./landing/skins/bgThree1.svg";

import { Row, Container, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.scss"

class App extends React.Component{
    render () {
    return (
        <Router>
                <Route render={({ location }) => {
                    const { pathname, key } = location;
                    return (
                        <TransitionGroup component={null}>
                            <Transition
                                        key={key}
                                        appear={true}
                                        onEnter={(node, appears) => playOne(pathname, node, appears)}
                                        
                                        onExit={(node, appears) => exit(node, appears)}
                                        timeout={{enter: 750, exit: 0}}
                            >
                            <div>
                                <div>
                                    <Container>
                                        <Row>
                                            <Col className="position-fixed background col-5 offset-6">
                                                <Image src={BTwo}/>
                                            </Col>
                                            <Col className="position-fixed background col-6" style={{ left: "40px", marginTop: "15px",  }}> 
                                                <Image src={BThree1} />
                                            </Col>
                                            <Col className="position-fixed background col-6 offset-6" style={{ left: "0px", marginTop: "15px" }}> 
                                                <Image src={BThree} />
                                            </Col>
                                        </Row>
                                    </Container>
                                    <div className="containerFluid">
                                        <header style={{ position: "fixed", width: "100%", zIndex: "9" }}>
                                            <Container>
                                                <Row className="row frame" style={{ marginTop: "20px", WebkitTextStroke: "2px" }}>
                                                    <Col className="col-4 text-left">
                                                        July 19, 2020<br/>
                                                    </Col>
                                                    <Col className="col-4 text-right" style={{ borderRight: "2px solid black" }}>
                                                        Location<br/>
                                                        Vancouver, BC, Canada<br/>
                                                    </Col>
                                                    <Col className="col-2 text-right" style={{ borderRight: "2px solid black" }}>
                                                        Contact<br/>
                                                        <a href="mailto: gideonchrapko@gmail.com">Email</a>
                                                    </Col>
                                                    <Col className="col-2 text-right" >
                                                        Social <br/>
                                                        <a href="https://www.behance.net/gideonchrapko">Behance</a><br/>
                                                        <a href="https://www.linkedin.com/in/gideon-chrapko-230220a0/">Linkedin</a>
                                                    </Col>
                                                </Row>
                                                <Row style={{ WebkitTextStroke: "2px", textAlign: "center" }} className="nav" >
                                                    <Col className="col-3">
                                                        <Link to="/">
                                                            Home
                                                        </Link>
                                                    </Col>
                                                    <Col className="col-3">
                                                        <Link to="/view/about">
                                                            About
                                                        </Link>
                                                    </Col>
                                                        <Col className="col-3">
                                                            <Link to="/view/portfolio">
                                                                Portfolio
                                                            </Link>
                                                        </Col>
                                                        <Col className="col-3">
                                                            <Link to="/view/workexperience">
                                                                Work Experience
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </header>
                                        </div>
                                    </div>  
                                <Switch location={location}>
                                    <Route path="/" exact component={Landing} />
                                    <Route path="/view/about" component={About} />
                                    <Route path="/view/workexperience" component={WorkExperience} />
                                    <Route path="/view/portfolio" exact component={Portfolio} />
                                    <Route path="/view/portfolio/hypremium" component={Hypremium} />
                                    <Route path="/view/portfolio/westcoastcustoms" component={WestCoastCustoms} />
                                    <Route path="/view/portfolio/juice" component={Juice} />
                                </Switch>
                            </div>
                            </Transition>
                        </TransitionGroup>
                        );
                    }}
                    />
            </Router>
    )}
}

export default App;