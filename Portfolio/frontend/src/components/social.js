import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const SocialIcons = props => {
  const image_dimentions = {
    width: props.size,
    height: props.size,
    alt: "social media icon"
  };

  const [icons, setIcons] = useState([]);
  useEffect(() => {
    axios.get("/api/v1/social/").then(res => {
      const social_media_icons = res.data;
      console.log(res.data);
      setIcons(social_media_icons);
    });
  }, []);

  return (
    <div className="social">
      {icons.map((icon, key) => (
        <a href={icon.link} key={key} target="_">
          <img src={icon.icon} {...image_dimentions} />
        </a>
      ))}
    </div>
  );
};

SocialIcons.defaultProps = {
  size: 48
};
export default SocialIcons;
