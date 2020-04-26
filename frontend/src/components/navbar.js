import React from "react";
import NavLinks from "./navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Spring } from "react-spring/renderprops";
import MyContext from "./Context";

const Navbar = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 2000 }}
        >
          {(config) => (
            <div style={config}>
              <nav className="navbar navbar-expand-md">
                <a className="navbar-brand" href="/">
                  <img
                    src={context.profile_photo}
                    width="60"
                    height="60"
                    alt="logo"
                  />
                </a>

                <span className="text-center" id="top-intro">
                  <span className="white-text">
                    {context.first_name} {context.last_name}
                  </span>
                  <br />
                  <span className="white-text">
                    {context.developer_position}
                  </span>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav ml-auto">
                    <NavLinks />
                  </div>
                </div>
              </nav>
            </div>
          )}
        </Spring>
      )}
    </MyContext.Consumer>
  );
};
export default Navbar;
