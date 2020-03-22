import React, { useState, useEffect } from "react";
import Page from "react-page-loading";
import { motion } from "framer-motion";
import Project from "./projects";
import PropTypes from "prop-types";
import axios from "axios";

const Portfolio = props => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("/api/v1/projects/").then(res => {
      const retrieved_projects = res.data;
      setProjects(retrieved_projects);

      // retrieved_projects.map(project => console.log(project));
    });
  }, []);
  return (
    <Page {...props.loader}>
      <motion.div {...props.Dynamic_page_animations}>
        <div className="container">
          <div className="row justify-content-center" id="projects">
            {/* {boxes.map(count => (
              <Project key={count} />
            ))} */}
            {/* {projects} */}
            {projects.map((project, count) => (
              <Project key={count} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </Page>
  );
};

Portfolio.propTypes = {
  Dynamic_page_animations: PropTypes.object,
  loader: PropTypes.object
};
export default Portfolio;
