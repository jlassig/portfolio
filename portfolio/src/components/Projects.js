
import React, { useState, useEffect } from "react"
import { projects } from "../data/projects"
import Lightbox from "./Lightbox"
import {skillList} from "../data/skills"

export default function Projects() {
  const [selectedSkill, setSelectedSkill] = useState("All")
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    setFilteredImages(
      selectedSkill === "All"
        ? projects
        : projects.filter((project) => project.skill === selectedSkill)
    )
  }, [selectedSkill])

//the skills that populate the skills dropdown. 
 const skills = ["All", ...skillList];

//  this is a list of images, either all of them if the user doesn't select a skill or the filtered images if the user does select a skill. 
  const imagesToDisplay = selectedSkill === "All" ? projects : filteredImages

  return (
    <section id="projects">

    <h2 className="gallery-h2">Projects Gallery</h2>

      {/* the user chooses a skill from the drop down (otherwise all the projects are shown in the lightBox. ) */}
      <div>
        <div className="select-skill">
          <label>Select skill:</label>
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}>
            {skills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
        
        {/* The lightbox showes the images based on either all or the filteredImages.  */}
        <Lightbox images={imagesToDisplay} />
      </div>
    </section>
  )
}
