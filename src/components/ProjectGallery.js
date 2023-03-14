import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import Projects from "../projects.json";


function ProjectGallery() {


    return(
        <div className="contianer">
            <div className="row align-items-center justify-content-center mt-4">
                {Projects.map((project) => {
                    return (
                        <ProjectCard key={project.key} title={project.title} image={project.image} description={project.description} link={project.link} />
                    )
                })
                }
            </div>
           
            
            
    
        </div>
    )
}
export default ProjectGallery;