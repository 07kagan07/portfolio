"use client";
import React, { useEffect, useState } from 'react'
import { StyledHomeContainer } from './style'
import Aside from '@/components/Aside'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const HomeContainer = () => {
  const [projects, setProjects] = useState([])
  const[isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetch('/api/project')
      const projects = await data.json()
      setProjects(projects);
      setIsLoading(false);
    }
    fetchProjects();
  }, [])

  return (
    <StyledHomeContainer>
        <div className='aside'>
            <Aside/>
        </div>
        <div className='content'>
            <Hero/>
            <About/>
            <Projects projectDatas={projects} isLoading={isLoading}/>
            <Contact/>
        </div>
    </StyledHomeContainer>
  )
}

export default HomeContainer