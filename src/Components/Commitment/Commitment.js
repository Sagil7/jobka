import React from 'react'
import pic1 from './contractpic1.png'
import pic2 from './contractpic2.png'
import pic3 from './contractpic3.png'
import './Commitment.css'
import { Link } from 'react-router-dom'
function Commitment() {
  return (
    <>
    <h2 id='headline'>Our Contractual Commitment</h2>
    <div className="outercard">
      <div class="card" style={{ width: '18rem' }}>
        <img src={pic1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h6 class="card-title">TRANSPARENT AGREEMENTS</h6>
          <p class="card-text">Our contracts are characterized by transparency, ensuring that all terms and  conditions are clearly articulated. </p>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src={pic2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h6 class="card-title">ADHERENCE TO DEADLINES</h6>
          <p class="card-text">Time is of the essence in metro projects, andwe take deadlines seriously.Our contracts include stringent timelines,backed by a commitment to timely delivery.</p>
        </div>
      </div>
      <div class="card" style={{ width: '18rem' }}>
        <img src={pic3} class="card-img-top" alt="..." />
        <div class="card-body">
          <h6 class="card-title">QUALITY ASSURANCE</h6>
          <p class="card-text">Quality is non-negotiable at Jobka Hirings Pvt Ltd.Our contracts explicitly outline the quality standards that govern our services.</p>
        </div>
      </div>


    </div>
    <div className="goodtalks">
      <p>At JOBKA, expertise, innovation, and personalized service converge to unlock your team's full potential. Join us on a confident journey through the complexities of the global business arena. </p>
    </div>
    </>
  )
}

export default Commitment
