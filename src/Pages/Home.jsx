// import React from 'react'
// import Navbar from "../Components/Navbar"
import Slider from "../Components/Slider"
import Banner from "../Components/Banner"
import Posts from "../Components/Posts"
import Footer from "../Components/Footer"

const Home = () => {

  return (
    
    
    <>
   
    <Slider />
    <br />
    <div className="container">
       <div className="row"></div>
           <Banner />
           </div>  
           <br />  
    
      <div className="container">
       <div className="row"></div>
           <Posts />
           </div>  
           <br />  

           <br />  
   
          <Footer />

    </>
  )
}

export default Home