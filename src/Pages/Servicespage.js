import React from 'react'
import Services from '../Components/Services/Services'
import Headingimg from '../Components/Headingimg/Headingimg'
import  Contactpageimg from '../Pages/images/services.jpg'

function Servicespage() {
  return (
    <div>
      <Headingimg cardimg={Contactpageimg} Title="About Us" story="Unveiling Our Vision and Values"/>

      <Services/>
    </div>
  )
}

export default Servicespage
