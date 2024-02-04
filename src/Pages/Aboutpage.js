import React from 'react'
import Headingimg from '../Components/Headingimg/Headingimg'
import Aboutpageimg from '../Pages/images/aboutuspage.jpg'
import Aboutcontent from '../Components/About/Aboutcontent'
import Testimonial from '../Cards/Testimonial/Testimonial'

function Aboutpage() {
  return (
    <div>
       <Headingimg cardimg={Aboutpageimg} Title="About Us" story="Unveiling Our Vision and Values"/>
       <Aboutcontent/>
       <Testimonial/>
    
    </div>
  )
}

export default Aboutpage
