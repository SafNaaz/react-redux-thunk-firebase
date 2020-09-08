import React from "react";

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptate, optio doloribus incidunt explicabo iusto neque ab eveniet
            magnam dicta tempore consectetur totam blanditiis quibusdam
            voluptatum vero, eos aliquam enim.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Safnas</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}
