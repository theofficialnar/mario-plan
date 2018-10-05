import React from "react";

const ProjectDetails = ({
  match: {
    params: { id }
  }
}) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            odio nulla, autem voluptatum similique sint rem minima explicabo
            distinctio dolore.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Anonymous</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
