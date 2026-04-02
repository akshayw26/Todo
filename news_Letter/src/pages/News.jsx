import React from 'react'
import Wrapper from '../components/Wrapper'
import axios from 'axios'


const fetchNews = async() =>{

    //https://www.youtube.com/@coding_school4u

    const response = await axios('https://newsapi.org/v2/everything?q=tesla&apiKey=')
    console.log(response.data)
}

const News = () => {
  return (
    <Wrapper>
    <div className=' grid grid-cols-2 gap-6 sm:grid-cols-4 pb-10 '>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    </div>
    </Wrapper>
  )
}

const NewsCard = () =>{
    return(
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    )
}

export default News
