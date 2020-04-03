import React from "react";
import { motion } from "framer-motion";
import Page from "react-page-loading";

const Skills = props => {
  return (
    <Page {...props.loader}>
      <motion.div {...props.Dynamic_page_animations}>
        <div className="container" id="fit-skills">
          <h1 className="text-left">What am i good at?</h1>
          <h3 className="text-left">Programming Languages</h3>
          <ul className="text-left">
            <li>Python</li>
            <li>Javascript</li>
          </ul>
          <h3 className="text-left">Front-end</h3>
          <ul className="text-left">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Reactjs</li>
            <li>Scss/Sass</li>
            <li>Jquery</li>
          </ul>
          <h3 className="text-left">Back-end</h3>
          <ul className="text-left">
            <li>Django</li>
            <li>Django rest framework</li>
            <li>Nodejs</li>
          </ul>
        </div>
      </motion.div>
    </Page>
  );
};

export default Skills;
