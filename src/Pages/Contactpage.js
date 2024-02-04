import React from 'react'
import Headingimg from '../Components/Headingimg/Headingimg'
import Contactpageimg from '../Pages/images/contacpage.jpg'
import Contactcard from '../Cards/Contactcard/Contactcard'

function Contactpage() {
  return (
    <div>
   <Headingimg cardimg={Contactpageimg} Title="About Us" story="Unveiling Our Vision and Values"/>
 <Contactcard/>
    </div>
  )
}

export default Contactpage
