import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Page from "react-page-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Corousel from "./carousel";
import { useParams } from "react-router-dom";
import axios from "axios";
const Project = props => {
  let { project_id } = useParams();
  const [project_name, setProjectName] = useState([]);
  const [project_summary, setProjectSummary] = useState([]);
  const [project_description, setProjectDescription] = useState("");
  const [github_repo, setGithubRepo] = useState("");
  const [live_demo, setLiveDemo] = useState("");
  const [project_images, setProjectImages] = useState([]);
  const [technologies, setTech] = useState([]);

  useEffect(() => {
    axios.get(`/api/v1/projects/${project_id}`).then(res => {
      const retrieved_project = res.data;
      setProjectName(retrieved_project.project_name);
      setProjectSummary(retrieved_project.project_summary);
      setProjectDescription(retrieved_project.project_description);
      setGithubRepo(retrieved_project.github_repo);
      setLiveDemo(retrieved_project.live_demo);
      setProjectImages(retrieved_project.images);
      setTech(retrieved_project.technologies);
    });
  }, [project_id]);
  return project_name.length > 1 ? (
    <Page {...props.loader}>
      <motion.div {...props.Dynamic_page_animations}>
        <div
          id="project-holder"
          className="white-text text-left small-padding-in-sides"
        >
          <a href="/portfolio">
            <FontAwesomeIcon icon={faArrowLeft} /> go back to all projects
          </a>
          <h1>{project_name}</h1>
          <span className="lead">{project_summary}</span>
          <div>
            <a
              href={live_demo}
              target="_"
              className="btn btn-tempt btn-lg mt-2"
            >
              <FontAwesomeIcon icon={faEye} /> Visit website
            </a>
            <span className="m-2"></span>
            <a
              href={github_repo}
              target="_"
              className="btn btn-tempt btn-lg mt-2"
            >
              <FontAwesomeIcon icon={faGithub} /> Github repository
            </a>
            <div className="mt-5"></div>
            <div className="w-100 d-flex justify-content-center">
              {/* carousel */}
              <Corousel images={project_images} />
              {/* end of courosel */}
            </div>
            <div className="mt-5"></div>
            <section
              id="project-description-section"
              className="d-flex flex-column"
            >
              <h2>About Project</h2>
              <div>{project_description}</div>
            </section>
            <div className="mt-5"></div>
            <section>
              <h2>Technologies used</h2>
              <ul className="tech-used-in-project">
                {/* <li>{project.technologies[0]}</li> */}
                {technologies.map((technology, key) => (
                  <li key={key}>{technology.technology_name}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </motion.div>
    </Page>
  ) : (
    <Page {...props.loader}>
      <motion.div {...props.Dynamic_page_animations}>
        <span>oops project does not exist</span>
      </motion.div>
    </Page>
  );
};

export default Project;
