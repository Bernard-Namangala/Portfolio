import React from "react";
import { motion } from "framer-motion";
import Page from "react-page-loading";
const Error = props => {
  return (
    <Page {...props.loader}>
      <motion.div {...props.Dynamic_page_animations}>
        <div>Error paage does not exist</div>
      </motion.div>
    </Page>
  );
};

export default Error;
