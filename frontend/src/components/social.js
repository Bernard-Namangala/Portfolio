import React, { useEffect, useState } from "react";
import axios from "axios";
import MyContext from "./Context";

const SocialIcons = (props) => {
  const image_dimentions = {
    width: props.size,
    height: props.size,
    alt: "social media icon",
  };

  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="social">
          {context.social.map((icon, key) => (
            <a href={icon.link} key={key} target="_">
              <img src={icon.icon} {...image_dimentions} />
            </a>
          ))}
        </div>
      )}
    </MyContext.Consumer>
  );
};

SocialIcons.defaultProps = {
  size: 48,
};
export default SocialIcons;
