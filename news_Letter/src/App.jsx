import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import News from './pages/News'
import Category from './components/Category'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     
       <Navbar />
       <Wrapper>
       <Category/>
       <News/>
       <Footer/>
      </Wrapper>
      
    </>
  )
}

export default App
