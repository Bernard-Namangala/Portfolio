import React from "react";
import NavLinks from "./navlinks";
import SocialIcons from "./social";
import PropTypes from "prop-types";
const Footer = ({ first_name, last_name, links }) => {
  let date = new Date();
  return (
    <footer className="white-text text-center">
      <div>
        <ul className="list-group" id="footer-list">
          <NavLinks links={links} />
        </ul>
      </div>
      <SocialIcons />
      <div>
        &copy;{date.getFullYear()} {first_name} {last_name}{" "}
      </div>
    </footer>
  );
};
Footer.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  links: PropTypes.array
};
export default Footer;
