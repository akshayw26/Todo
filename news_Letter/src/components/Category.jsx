import React from 'react'
import Wrapper from './Wrapper'

const Category = () => {

     const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  return (

     <div className="bg-base-100 sticky top-14 z-10 ">
    <Wrapper>
    <div className='max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5 py-10'>
        {categories.map((category) =>{
            return(
           <button key={category} className="btn btn-primary">{category}</button>
            )
        })}
     
    </div>
    </Wrapper>
    </div>
  )
}

export default Category
