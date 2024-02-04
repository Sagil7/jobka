import React from 'react'
import Hiringzone from '../Components/Hiringzone/Hiringzone'
import Headingimg from '../Components/Headingimg/Headingimg'
import Aboutpageimg from '../Pages/images/client.jpg'
import Clientcrouselcard from '../Cards/Clientcrouselcard/Clientcrouselcard'

function Clientzone() {
  return (
    <div>
      <Headingimg cardimg={Aboutpageimg} Title="About Us" story="Unveiling Our Vision and Values"/>
      <Hiringzone/>
      <Clientcrouselcard/>
    </div>
  )
}

export default Clientzone
