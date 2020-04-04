import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Page from "react-page-loading";
import axios from "axios";
import PropTypes from "prop-types";

const About = props => {
  const [about, setAbout] = useState();
  useEffect(() => {
    axios.get("/api/v1/about/").then(res => {
      const about_info = res.data[0];
      setAbout(about_info["about"]);
    });
  }, []);

  return (
    <Page {...props.loader}>
      <motion.div {...props.Dynamic_page_animations}>
        <div className="padding-in-sides">
          <div className="position-relative">
            <h1 className="text-center white-text">About me</h1>

            <p className="lead white-text">{about}</p>
          </div>
        </div>
      </motion.div>
    </Page>
  );
};

About.propTypes = {
  Dynamic_page_animations: PropTypes.object,
  loader: PropTypes.object
};

export default About;
