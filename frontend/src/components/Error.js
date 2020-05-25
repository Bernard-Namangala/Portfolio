import React from "react";
import { motion } from "framer-motion";
import Page from "react-page-loading";
const Error = (props) => {
  return (
    <motion.div {...props.Dynamic_page_animations}>
      <div>
        oops page does not exist Go <a href="/">Home</a>
      </div>
    </motion.div>
  );
};

export default Error;
