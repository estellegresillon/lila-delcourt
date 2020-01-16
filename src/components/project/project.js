import React from "react";

const Project = ({ location }) => {
  const projectName = location.pathname.substr(1);

  return (
    <div>{projectName}</div>
  );
};

export default Project;
