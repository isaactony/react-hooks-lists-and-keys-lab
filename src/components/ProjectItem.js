import React from "react";

function ProjectItem( {name, about, technologies } ) {

  // const getTechnologies = technologies.map((technology) => { 
  //   return <span key={technology.id}>{technology}</span>
  //  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => {
          return <span key={index}>{technology}</span>})} 

      </div>
    </div>
  );
}

export default ProjectItem;
