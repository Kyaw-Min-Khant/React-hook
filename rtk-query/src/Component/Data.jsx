import React from 'react'
import { useGetBlogApiQuery } from '../features/BlogApi'

const Data = () => {
  const {data:blog}=useGetBlogApiQuery();
  console.log(blog)
  return (
    <div>
    {blog?.map((item,index)=>{
 return(<img src={item.image} key={index} alt="" />)
    })}
    </div>
  )
}

export default Data