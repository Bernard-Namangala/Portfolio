import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Skills", link: "/skills" }
  ];
  return (
    <React.Fragment>
      {links.map((link, i) => (
        <li className="list-group-item" key={i}>
          <NavLink to={link.link} className="nav-item nav-link text-center">
            {link.text}
          </NavLink>
        </li>
      ))}
    </React.Fragment>
  );
};

export default NavLinks;
