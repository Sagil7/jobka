import React from 'react'
import Crousel from '../Components/Crousel/Crousel'
import Servicecard from '../Cards/Servicecard/Servicecard'
import Aboutus from '../Components/About/Aboutus'
import Expertise from '../Components/Experties/Expertise'
import Commitment from '../Components/Commitment/Commitment'
import Testimonial from '../Cards/Testimonial/Testimonial'
import Clientcrouselcard from '../Cards/Clientcrouselcard/Clientcrouselcard'

function Home() {
  return (
    <div>
        <Crousel/>
        <Aboutus/>
        <Expertise/>
        {/* <Testimonial/> */}
        <Commitment/>
        <Clientcrouselcard/>

  
    </div>
  )
}

export default Home
