import React, { useState, useEffect } from "react";
import Page from "react-page-loading";
import { motion } from "framer-motion";
import Project from "./projects";
import PropTypes from "prop-types";
import axios from "axios";
import MyContext from "./Context";

const Portfolio = (props) => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <Page {...props.loader}>
          <motion.div {...props.Dynamic_page_animations}>
            <div className="container">
              <div className="row justify-content-center" id="projects">
                {context.projects.map((project, count) => (
                  <Project key={count} project={project} />
                ))}
              </div>
            </div>
          </motion.div>
        </Page>
      )}
    </MyContext.Consumer>
  );
};

Portfolio.propTypes = {
  Dynamic_page_animations: PropTypes.object,
  loader: PropTypes.object,
};
export default Portfolio;
