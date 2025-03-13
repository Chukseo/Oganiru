import React from 'react'
import Jumbotron3 from '../Components/Jumbotron3'
import Footer from '../Components/Footer'
import Blogdetail from '../Components/Blogdetail'

const Postdetail = () => {
  return (
    <>
    <Jumbotron3 />
    <br />
    
    <div className="container">
       <div className="row"></div>
           <Blogdetail />
           </div>
            <br />

            <Footer />
    </>
  )
}

export default Postdetail