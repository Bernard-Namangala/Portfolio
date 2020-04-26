import React, { Component, createContext } from "react";
import ReactDom from "react-dom";
import "core-js/es/map";
import "core-js/es/set";
import "babel-polyfill";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Dynamic from "./dynamic";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import MyContext from "./Context";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      social: [],
    };
    this.Dynamic_page_animations = {
      initial: "initial",
      animate: "in",
      exit: "out",
      variants: {
        initial: {
          opacity: 0,
          x: "-100vw",
          scale: 0.8,
        },
        in: {
          opacity: 1,
          x: 0,
          scale: 1,
        },
        out: {
          opacity: 0,
          x: "100vw",
          scale: 1.2,
        },
      },
      transition: {
        duration: 0.6,
        type: "tween",
        ease: "anticipate",
      },
      id: "dynamic",
      // className: "position-absolute w-100",
    };
  }

  componentDidMount() {
    //getting information for the home page from api
    axios.get("/api/v1/person/1").then((res) => {
      const info = res.data;
      this.setState(info);
    });
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        <BrowserRouter>
          <div className="container" id="main-container">
            <div className="row">
              <div id="root" className="col-md-12">
                <Navbar />
              </div>
            </div>
            <div className="mt-5"></div>
            <div className="row" id="dynamic-child-holder">
              <Dynamic Dynamic_page_animations={this.Dynamic_page_animations} />
            </div>
          </div>
          <div className="container">
            <Footer />
          </div>
        </BrowserRouter>
      </MyContext.Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
