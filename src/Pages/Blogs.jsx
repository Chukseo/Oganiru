import React from 'react'
import Jumbotron2 from '../Components/Jumbotron2'
import Posts from '../Components/Posts'
// import Post from '../Components/Post'
import Footer from '../Components/Footer'
const Blogs = () => {
  return (
    <>
    <Jumbotron2 />
    <br />
    
    <div className="container">
       <div className="row"></div>
           <Posts />
           </div>
            <br />

            <Footer />
    </>

  )
}

export default Blogs