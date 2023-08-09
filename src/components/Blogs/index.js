"use client"
import React,{useState} from 'react'
import {BlogDatas} from './mockBlogs'
import BlogCard from './BlogCard'
import { StyledBlogs } from './style'

const Blogs = () => {
  const [loadMore, setLoadMore] = useState(false)
  return (
    <StyledBlogs id='blog'>
      <div className='container'>
        <h3>Blog</h3>
        <div className='row g-3'>
          {(loadMore?BlogDatas:BlogDatas.slice(0,3))?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
        </div>
        <button className='bg-transparent border border-1 rounded-3 border-secondary my-3 fw-semibold' onClick={()=>setLoadMore(!loadMore)}>Load {loadMore?"less":"More"}</button>
      </div>
    </StyledBlogs>
  )
}

export default Blogs