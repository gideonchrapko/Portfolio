import React from 'react'

class NavDrop extends React.Component {
        
    render () {


        var path = window.location.pathname;
        (function (){
            if(path === "/") {
                styleName="Cart__close"
                }  else {
                styleName="Cart__open"
                }
            }
        })();


            // // let styleName;
            // let permission = this.expression(window.location.pathname);
            // if (permission === "/") {
            //     return (<div className="Cart__open">
            //             hello
            //         </div>)
            // } else {
            //     return (<div className="Cart__closed">
            //     Fuck
            //      </div>)
            // }
        }




    };


export default NavDrop;


class App extends React.Component {

   
    render () {

        // let styleName;
        // var path = window.location.pathname;
        // (function (){
        //     if(path === "/") {
        //         styleName="Cart__close"
        //         }  else {
        //         styleName="Cart__open"
        //         }
        //     })();

        // function style() {
        //     let styleName;
        //     let path = window.location.pathname;
        //     if (path === "/") {
        //         styleName="Cart__closed"
        //     } else {
        //         styleName="Cart__open"
        //     }
        //     return styleName;
        // }

        // function formatDate(date) {
        //     return date.toLocaleDateString();
        //   }
        // date: new Date(),


    return (
        <Router>
        <Route render={(props) => {
            let HomePageStyling = 'Cart__closed';
            if (props.location === '/') {
                HomePageStyling = 'Cart__open';
            }
            return (
            <div>
            <div id="container">
                <Container>
                    <Row>
                        <Col className="position-fixed background col-5 offset-6">
                            <Image src={BTwo}/>
                        </Col>
                        <Col className="position-fixed background col-lg-3 col-4" style={{  left: "60px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col className="position-fixed background col-lg-3 col-4 offset-lg-3 offset-4" style={{ left: "18px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col className="position-fixed background col-lg-3 col-4 offset-lg-6 offset-8" style={{ left: "-15px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col className="position-fixed background col-lg-3 col-4 offset-lg-9 offset-12 d-none d-sm-flex" style={{ left: "-45px", marginTop: "15px" }}> 
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
                                    <a href="http://www.example.com/theme.css">Email</a>
                                </Col>
                                <Col className="col-2 text-right" >
                                    Social <br/>
                                    <a href="http://www.example.com/theme.css">Behance</a><br/>
                                    <a href="http://www.example.com/theme.css">Linkedin</a>
                                </Col>
                            </Row>
                            {/* className={`nav ${styleName}`} */}
                            <Row style={{ WebkitTextStroke: "2px", textAlign: "center" }} className={'nav' + HomePageStyling} >
                                <Col className="col-3">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </Col>
                                <Col className="col-3">
                                    <Link to="/about">
                                        About
                                    </Link>
                                </Col>
                                    <Col className="col-3">
                                        <Link to="/portfolio">
                                            Portfolio
                                        </Link>
                                    </Col>
                                    <Col className="col-3">
                                        <Link to="/workexperience">
                                            Work Experience
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </header>
                    </div>
                </div>  
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/about" component={About} />
                    <Route path="/workexperience" component={WorkExperience} />
                    <Route path="/portfolio" component={Portfolio} />
                </Switch>
                </div>
            );
        }}
        />
</Router>

);
}
}

export default App;

        
        // <Router>
            <div>
            <div id="container">
                <Container>
                    <Row>
                        <Col className="position-fixed background col-5 offset-6">
                            <Image src={BTwo}/>
                        </Col>
                        <Col className="position-fixed background col-lg-3 col-4" style={{  left: "60px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col className="position-fixed background col-lg-3 col-4 offset-lg-3 offset-4" style={{ left: "18px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col className="position-fixed background col-lg-3 col-4 offset-lg-6 offset-8" style={{ left: "-15px", marginTop: "15px" }}> 
                            <Image src={BThree} />
                        </Col>
                        <Col className="position-fixed background col-lg-3 col-4 offset-lg-9 offset-12 d-none d-sm-flex" style={{ left: "-45px", marginTop: "15px" }}> 
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
                                    <a href="http://www.example.com/theme.css">Email</a>
                                </Col>
                                <Col className="col-2 text-right" >
                                    Social <br/>
                                    <a href="http://www.example.com/theme.css">Behance</a><br/>
                                    <a href="http://www.example.com/theme.css">Linkedin</a>
                                </Col>
                            </Row>
                            {/* className={`nav ${styleName}`} */}
                            <Row style={{ WebkitTextStroke: "2px", textAlign: "center" }} className={`nav ${this.styleName}`} >
                                <Col className="col-3">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </Col>
                                <Col className="col-3">
                                    <Link to="/about">
                                        About
                                    </Link>
                                </Col>
                                    <Col className="col-3">
                                        <Link to="/portfolio">
                                            Portfolio
                                        </Link>
                                    </Col>
                                    <Col className="col-3">
                                        <Link to="/workexperience">
                                            Work Experience
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </header>
                    </div>
                </div>  
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/about" component={About} />
                    <Route path="/workexperience" component={WorkExperience} />
                    <Route path="/portfolio" component={Portfolio} />
                </Switch>
                </div>
        //     </Router>











        // this works



        class App extends React.Component{
            render () {
            return (
                <Router>
                        <Route render={() => {
                            let HomePageStyling;
                            if (window.location.pathname === '/') {
                                HomePageStyling = 'Cart__open';
                            } else {
                                HomePageStyling = 'Cart__closed';
                            }
                            console.log(HomePageStyling);
                            return (
                                <div>
                    <div id="container">
                        <Container>
                            <Row>
                                <Col className="position-fixed background col-5 offset-6">
                                    <Image src={BTwo}/>
                                </Col>
                                <Col className="position-fixed background col-lg-3 col-4" style={{  left: "60px", marginTop: "15px" }}> 
                                    <Image src={BThree} />
                                </Col>
                                <Col className="position-fixed background col-lg-3 col-4 offset-lg-3 offset-4" style={{ left: "18px", marginTop: "15px" }}> 
                                    <Image src={BThree} />
                                </Col>
                                <Col className="position-fixed background col-lg-3 col-4 offset-lg-6 offset-8" style={{ left: "-15px", marginTop: "15px" }}> 
                                    <Image src={BThree} />
                                </Col>
                                <Col className="position-fixed background col-lg-3 col-4 offset-lg-9 offset-12 d-none d-sm-flex" style={{ left: "-45px", marginTop: "15px" }}> 
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
                                            <a href="http://www.example.com/theme.css">Email</a>
                                        </Col>
                                        <Col className="col-2 text-right" >
                                            Social <br/>
                                            <a href="http://www.example.com/theme.css">Behance</a><br/>
                                            <a href="http://www.example.com/theme.css">Linkedin</a>
                                        </Col>
                                    </Row>
                                    {/* className={`nav ${styleName}`} */}
                                    <Row style={{ WebkitTextStroke: "2px", textAlign: "center" }} className={`nav ${HomePageStyling}`} >
                                        <Col className="col-3">
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </Col>
                                        <Col className="col-3">
                                            <Link to="/about">
                                                About
                                            </Link>
                                        </Col>
                                            <Col className="col-3">
                                                <Link to="/portfolio">
                                                    Portfolio
                                                </Link>
                                            </Col>
                                            <Col className="col-3">
                                                <Link to="/workexperience">
                                                    Work Experience
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </header>
                            </div>
                        </div>  
                        <Switch>
                            <Route path="/" exact component={Landing} />
                            <Route path="/about" component={About} />
                            <Route path="/workexperience" component={WorkExperience} />
                            <Route path="/portfolio" component={Portfolio} />
                        </Switch>
                        </div>
                            );
                        }}
                        />
                    </Router>
            )}
        }
        
        
        export default App;