import React from 'react'
import './Clientcrouselcard.css'

import client1 from './client1.png'
import client2 from './client2.png'
import client3 from './client3.png'
import client4 from './client4.png'
import client5 from './client5.png'
import client6 from './client6.png'
function Clientcrouselcard() {
  return (
    <div className='Our_Client'>
    <h3 id='Our_Client'>Our Reputed Clients</h3>
  <div class="slider">
    
<div class="slide-track-1">
  
    <div class="slide">
    <img src={client1} alt="Comapany1"/>
    </div>

    <div class="slide">
    <img src={client2} alt="Comapany1"/>
    </div>
    <div class="slide">
      <img src={client3} alt="Comapany1"/>
    </div>
    <div class="slide">
      <img src={client4} alt="Comapany1"/>
    </div>
    <div class="slide">
      <img src={client5} alt="Comapany1"/>
    </div>
    <div class="slide">
      <img src={client6} alt="Comapany1"/>
    </div>
  
    <div class="slide">
    <img src={client1} alt="Comapany1"/>
    </div>

    <div class="slide">
    <img src={client2} alt="Comapany1"/>
    </div>
    <div class="slide">
      <img src={client3} alt="Comapany1"/>
    </div>
    <div class="slide">
      <img src={client4} alt="Comapany1"/>
    </div>
    <div class="slide">
      <img src={client5} alt="Comapany1"/>
    </div>
    <div class="slide">
      <img src={client6} alt="Comapany1"/>
    </div>
  
  
  

</div>
</div>
</div>
  )
}

export default Clientcrouselcard
