import React from "react";
import { motion } from "framer-motion";
import Page from "react-page-loading";
import PropTypes from "prop-types";
import MyContext from "./Context";
const About = (props) => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <Page {...props.loader}>
          <motion.div {...props.Dynamic_page_animations}>
            <div className="padding-in-sides">
              <div className="position-relative">
                <h1 className="text-center white-text">About me</h1>
                <p className="lead white-text">{context.about}</p>
              </div>
            </div>
          </motion.div>
        </Page>
      )}
    </MyContext.Consumer>
  );
};

About.propTypes = {
  Dynamic_page_animations: PropTypes.object,
  loader: PropTypes.object,
};

export default About;
