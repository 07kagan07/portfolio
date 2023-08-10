"use client"
import React,{useState} from 'react'
import {projectDatas} from './mockProjects'
import ProjectCard from './ProjectCard'
import { StyledProjects } from './style'

const Projects = () => {
  const [loadMore, setLoadMore] = useState(false)
  console.log(projectDatas.length)
  return (
    <StyledProjects id='projects'>
      <div className='container'>
        <h3>Projects</h3>
        <div className='row g-3'>
          {(loadMore?projectDatas:projectDatas.slice(0,2))?.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
        {projectDatas.length>2 && <button className='bg-transparent border border-1 rounded-3 border-secondary my-3 fw-semibold' onClick={()=>setLoadMore(!loadMore)}>Load {loadMore?"less":"More"}</button>}
      </div>
    </StyledProjects>
  )
}

export default Projects