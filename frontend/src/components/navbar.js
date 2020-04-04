import React from "react";
import NavLinks from "./navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Spring } from "react-spring/renderprops";
import PropTypes from "prop-types";

const Navbar = ({ first_name, last_name, position, profile_photo }) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 2000 }}
    >
      {config => (
        <div style={config}>
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="/">
              <img src={profile_photo} width="60" height="60" alt="logo" />
            </a>
            <span className="text-center" id="top-intro">
              <span className="white-text">
                {first_name} {last_name}
              </span>
              <br />
              <span className="white-text">{position}</span>
            </span>
            <button
              className="navbar-toggler white-text"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <NavLinks />
              </div>
            </div>
          </nav>
        </div>
      )}
    </Spring>
  );
};

Navbar.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  first_name: "",
  last_name: "",
  position: ""
};
export default Navbar;
