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

const Dynamic = (props) => {
  const location = useLocation();

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
            render={(config) => (
              <Intro Dynamic_page_animations={props.Dynamic_page_animations} />
            )}
          />

          <Route
            path="/about"
            exact
            render={(config) => (
              <About Dynamic_page_animations={props.Dynamic_page_animations} />
            )}
          />
          <Route
            path="/contact"
            exact
            render={(config) => (
              <Contact
                Dynamic_page_animations={props.Dynamic_page_animations}
              />
            )}
          />
          <Route
            path="/portfolio"
            exact
            render={(config) => (
              <Portfolio
                Dynamic_page_animations={props.Dynamic_page_animations}
              />
            )}
          />
          <Route
            path="/project/:project_id(\d+)"
            exact
            render={(config) => (
              <Project
                Dynamic_page_animations={props.Dynamic_page_animations}
              />
            )}
          />

          <Route
            path="/skills"
            exact
            render={(config) => (
              <Skills Dynamic_page_animations={props.Dynamic_page_animations} />
            )}
          />

          <Route
            render={(config) => (
              <Error Dynamic_page_animations={props.Dynamic_page_animations} />
            )}
          />
        </Switch>
        {/* End of swich */}
      </AnimatePresence>
    </div>
  );
};

Dynamic.propTypes = {
  Dynamic_page_animations: PropTypes.object,
};
export default Dynamic;
