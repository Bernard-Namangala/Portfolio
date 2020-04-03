import React, { Component } from "react";
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

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.Dynamic_page_animations = {
      initial: "initial",
      animate: "in",
      exit: "out",
      variants: {
        initial: {
          opacity: 0,
          x: "-100vw",
          scale: 0.8
        },
        in: {
          opacity: 1,
          x: 0,
          scale: 1
        },
        out: {
          opacity: 0,
          x: "100vw",
          scale: 1.2
        }
      },
      transition: {
        duration: 0.6,
        type: "tween",
        ease: "anticipate"
      },
      id: "dynamic"
      // className: "position-absolute w-100",
    };
  }

  componentDidMount() {
    //getting information for the home page from api
    axios.get("/api/v1/home/").then(res => {
      const home_info = res.data[0];
      this.setState(home_info);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container" id="main-container">
          <div className="row">
            <div id="root" className="col-md-12">
              <Navbar
                first_name={this.state.first_name}
                last_name={this.state.last_name}
                position={this.state.developer_position}
                profile_photo={this.state.profile_photo}
              />
            </div>
          </div>
          <div className="mt-5"></div>
          <div className="row" id="dynamic-child-holder">
            <Dynamic
              introduction_main={this.state.introduction_main}
              introduction_typed={this.state.introduction_typed}
              first_name={this.state.first_name}
              Dynamic_page_animations={this.Dynamic_page_animations}
            />
          </div>
        </div>
        <div className="container">
          <Footer
            first_name={this.state.first_name}
            last_name={this.state.last_name}
          />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
