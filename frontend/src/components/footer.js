import React from "react";
import NavLinks from "./navlinks";
import SocialIcons from "./social";
import MyContext from "./Context";
const Footer = () => {
  let date = new Date();
  return (
    <MyContext.Consumer>
      {(context) => (
        <footer className="white-text text-center">
          <div>
            <ul className="list-group" id="footer-list">
              <NavLinks />
            </ul>
          </div>
          <SocialIcons />
          <div>
            &copy;{date.getFullYear()} {context.first_name} {context.last_name}{" "}
          </div>
        </footer>
      )}
    </MyContext.Consumer>
  );
};

export default Footer;
