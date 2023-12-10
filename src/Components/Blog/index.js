import React from 'react'
import './style.css'
import { blogData } from '../../Utils/data'

const Blog = () => {
  return (
    <div className='container blog'>
      {
        blogData.map((blogItems) => {
          return(
            <div className='blog-container'>
              <div className='left'>
                   <i class="fa fa-arrow-right" aria-hidden="true"></i>
                   <div>{blogItems.title}</div>
              </div>
              <div> Nov 2, 2022 </div>
            </div>
          )
        })
      }
      {/* <i class="fa fa-arrow-right" aria-hidden="true"></i>
      <div>Basic markdown style guide</div>
      <div> Nov 2, 2022 </div> */}
    </div>
  )
}

export default Blog