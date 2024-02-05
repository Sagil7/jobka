import React from 'react'
import './Crousel.css'
import crousel1img from './crousel3.jpg'
import crousel2img from './crousel4.jpg'
import crousel3img from './crousel5.jpg'
import { Link } from 'react-router-dom'

const Crousel = () => {
    return ( 
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={crousel1img} className="d-block w-100" data-bs-interval="4000" alt="..." />
            <div className="carousel-caption d-none d-md-block crousel1" >
              <h1 className='Covertitle' >Unifying Endeavors </h1>
              <h1 className='Covertitle' id='downcovertitle' >Fortifying Workforce .</h1>
              <Link to="/about"> <button className='crouselbutton' >About Us</button></Link>
             
            </div>
          </div>
          <div className="carousel-item">
            <img src={crousel2img} className="d-block w-100" data-bs-interval="4000" alt="..." />
            <div className="carousel-caption d-none d-md-block crousel1">
              <h1 className='Covertitle' >Tapping into Capabilities </h1>
              <h1 className='Covertitle' id='downcovertitle' > Soaring to Success.</h1>
              <Link to="/services"> <button className='crouselbutton' >Our Services</button></Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={crousel3img} className="d-block w-100" data-bs-interval="4000" alt="..." />
            <div className="carousel-caption d-none d-md-block crousel1">
              <h1 className='Covertitle' >Driving Growth with  </h1>
              <h1 className='Covertitle' id='downcovertitle' >Dynamic Talent Management .</h1>
              <Link to="/services"> <button className='crouselbutton' >Our Services</button></Link>
            </div>
          </div>
     
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
  
export default Crousel