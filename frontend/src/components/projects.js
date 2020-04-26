import React from "react";
import styled from "@emotion/styled/macro";
import Technologies from "./technologies";
const Project = ({ project }) => {
  const DisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
  });
  const Title = styled.h4({
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    fontWeight: "4",
    backgroundColor: "rgba(0,0,0,.65)",
  });
  const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
    height: "auto",
  });

  const SubTitle = styled.h5({
    fontFamily: "Helvetica",
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
  });
  const Paragraph = styled.div({
    transform: "translate3d(0,-50px,0)",
    transition: "transform 350ms ease",
  });
  const ButtontoProject = styled.a({
    position: "absolute",
    bottom: "20px",
    left: "31%",
    padding: "0.1rem 1rem",
    color: "#fff",
    background: "orange",
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
    transitionDelay: "350ms",
    borderRadius: "10px",
    border: "1px solid #fff",
    ":hover": {
      textDecoration: "none",
      fontSize: "17px",
      color: "#fff",
    },
  });

  const Background = styled.div({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    cursor: "pointer",
    boxShadow:
      "5px 5px rgba(0, 0, 0, 0.4), 10px 10px rgba(0, 0, 0, 0.3), 15px 15px rgba(0, 0, 0, 0.2),20px 20px rgba(0, 0, 0, 0.1),25px 25px rgba(0, 0, 0, 0.05)",
    backgroundImage: `url(${project.images[0].image})`,
    overflowY: "hidden",
    backgroundColor: "red",
    backgroundPosition: "center",
    [`:hover ${DisplayOver}`]: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${SubTitle}, :hover ${Paragraph}, :hover ${ButtontoProject}`]: {
      transform: "translate3d(0,0,0)",
    },
    [`:hover ${Hover}`]: {
      opacity: 1,
    },
  });

  return (
    <Background>
      <DisplayOver>
        <Title>{project.project_name}</Title>
        <Hover>
          <Paragraph>
            <Technologies technologies={project.technologies} />
          </Paragraph>
          <ButtontoProject href={`/project/${project.id}`}>
            Project details
          </ButtontoProject>
        </Hover>
      </DisplayOver>
    </Background>
  );
};

export default Project;
