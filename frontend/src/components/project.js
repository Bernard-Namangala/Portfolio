import React, { useContext } from "react";
import { motion } from "framer-motion";
import Page from "react-page-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Corousel from "./carousel";
import { useParams } from "react-router-dom";
import MyContext from "./Context";

const Project = (props) => {
  let { project_id } = useParams();
  const context = useContext(MyContext);
  const current_project = context.projects.filter(
    (project) => project.id == project_id
  );
  if (current_project.length < 1) {
    return (
      <motion.div {...props.Dynamic_page_animations}>
        <span>oops project does not exist</span>
      </motion.div>
    );
  }
  return (
    <MyContext.Consumer>
      {(context) => (
        <motion.div {...props.Dynamic_page_animations}>
          {context.projects
            .filter((project) => project.id == project_id)
            .map((filteredProject, key) => (
              <div
                id="project-holder"
                className="white-text text-left small-padding-in-sides"
                key={key}
              >
                <a href="/portfolio">
                  <FontAwesomeIcon icon={faArrowLeft} /> go back to all projects
                </a>
                <h1>{filteredProject.project_name}</h1>
                <span className="lead">{filteredProject.project_summary}</span>
                <div>
                  <a
                    href={filteredProject.live_demo}
                    target="_"
                    className="btn btn-tempt btn-lg mt-2"
                  >
                    <FontAwesomeIcon icon={faEye} /> Visit website
                  </a>
                  <span className="m-2"></span>
                  <a
                    href={filteredProject.github_repo}
                    target="_"
                    className="btn btn-tempt btn-lg mt-2"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Github repository
                  </a>
                  <div className="mt-5"></div>
                  <div className="w-100 d-flex justify-content-center">
                    {/* carousel */}
                    <Corousel images={filteredProject.images} />
                    {/* end of courosel */}
                  </div>
                  <div className="mt-5"></div>
                  <section
                    id="project-description-section"
                    className="d-flex flex-column"
                  >
                    <h2>About Project</h2>
                    <div>{filteredProject.project_description}</div>
                  </section>
                  <div className="mt-5"></div>
                  <section>
                    <h2>Technologies used</h2>
                    <ul className="tech-used-in-project">
                      {/* <li>{project.technologies[0]}</li> */}
                      {filteredProject.technologies.map((technology, key) => (
                        <li key={key}>{technology.technology_name}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            ))}
        </motion.div>
      )}
    </MyContext.Consumer>
  );
};

export default Project;
