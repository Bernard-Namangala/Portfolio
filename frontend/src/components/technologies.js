import React from "react";
import styled from "@emotion/styled/macro";

const Technologies = ({ technologies }) => {
  const TechnologiesList = styled.div({
    width: "100%",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "center"
  });

  const Technology = styled.span({
    background: "#404040",
    marginLeft: "0.5rem",
    padding: "0.2rem 0.5rem",
    borderRadius: "10px",
    boxShadow: "2px 2px 4px 1px #fff",
    color: "#ddd",
    marginTop: "0.5rem"
  });

  return (
    <TechnologiesList>
      {technologies.map((technology, key) => (
        <Technology key={key}>{technology["technology_name"]}</Technology>
      ))}
    </TechnologiesList>
  );
};

export default Technologies;
