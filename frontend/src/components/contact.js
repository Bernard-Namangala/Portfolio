import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./contactform";
import Page from "react-page-loading";
import SocialIcons from "./social";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <motion.div {...props.Dynamic_page_animations}>
      <div className="padding-in-sides">
        <h1 className="text-center white-text">Contact me</h1>
        <p className="text-center white-text lead">
          Fill in the form below or send an email to
          <b className="text-primary"> bernardnamangala@gmail.com </b>
          if you want to talk about a project or just say hi
        </p>
        <ContactForm />
        <p className="text-left white-text lead">
          Wanna get social? follow me on social media
        </p>
        <div className="text-left">
          <SocialIcons size={26} />
        </div>
      </div>
    </motion.div>
  );
};

Contact.propTypes = {
  Dynamic_page_animations: PropTypes.object,
};

export default Contact;
