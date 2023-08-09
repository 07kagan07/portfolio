"use client"
import Aside from '@/components/Aside'
import Hero from '@/components/Hero'
import React from 'react'
import { StyledHomeContainer } from './style'
import About from '@/components/About'

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
        <div className='aside'>
            <Aside/>
        </div>
        <div className='content'>
            <Hero/>
            <About/>
        </div>
    </StyledHomeContainer>
  )
}

export default HomeContainer