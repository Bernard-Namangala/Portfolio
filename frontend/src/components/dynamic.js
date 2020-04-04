import React from "react";
import { AnimatePresence } from "framer-motion";
import Intro from "./intro";
import Error from "./Error";
import About from "./About";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Project from "./project";
import Skills from "./skills";
import { Route, Switch, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const Dynamic = props => {
  const location = useLocation();
  const loader = {
    loader: "bubble-spin",
    color: "#ddd",
    size: 7
  };
  return (
    <div
      style={{ position: "relative" }}
      className="col-md-12"
      id="dynamic-content-holder"
    >
      <AnimatePresence exitBeforeEnter>
        {/* Begining of swich */}
        <Switch location={location} key={location.pathname}>
          <Route
            path="/"
            exact
            render={config => (
              <Intro
                introduction_main={props.introduction_main}
                introduction_typed={props.introduction_typed}
                name={props.first_name}
                Dynamic_page_animations={props.Dynamic_page_animations}
                loader={loader}
              />
            )}
          />

          <Route
            path="/about"
            exact
            render={config => (
              <About
                Dynamic_page_animations={props.Dynamic_page_animations}
                loader={loader}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={config => (
              <Contact
                Dynamic_page_animations={props.Dynamic_page_animations}
                loader={loader}
              />
            )}
          />
          <Route
            path="/portfolio"
            exact
            render={config => (
              <Portfolio
                loader={loader}
                Dynamic_page_animations={props.Dynamic_page_animations}
              />
            )}
          />
          <Route
            path="/project/:project_id(\d+)"
            exact
            render={config => (
              <Project
                loader={loader}
                Dynamic_page_animations={props.Dynamic_page_animations}
              />
            )}
          />

          <Route
            path="/skills"
            exact
            render={config => (
              <Skills
                loader={loader}
                Dynamic_page_animations={props.Dynamic_page_animations}
              />
            )}
          />

          <Route
            render={config => (
              <Error
                Dynamic_page_animations={props.Dynamic_page_animations}
                loader={loader}
              />
            )}
          />
        </Switch>
        {/* End of swich */}
      </AnimatePresence>
    </div>
  );
};

Dynamic.propTypes = {
  introduction_main: PropTypes.string,
  introduction_typed: PropTypes.string,
  first_name: PropTypes.string,
  Dynamic_page_animations: PropTypes.object
};
export default Dynamic;
