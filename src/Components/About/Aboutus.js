import React from 'react'
import './About.css'
import pic1 from './aboutpic2.jpg'
function Aboutus() {
  return (
    <>
    <div className='maincontainer1'>
      <div className="threecontainer">
        <h2>Welcom To Jobka</h2>
        <h6>Welcome to JOBKA Manpower Recruitment Agency – Your Gateway to Exceptional Talent</h6>
        <p>Established in 2018, JOBKA Manpower Recruitment Agency is a proud 100% locally owned company dedicated to providing comprehensive recruitment solutions to the dynamic business world. Our firm commitment to excellence and a team of accomplished, qualified consultants have positioned us as a market leader in the global business landscape.</p>
        <p>At JOBKA, we believe that our vision serves as the guiding light to excellence. We have pioneered and nurtured our organization to become a trusted partner for businesses seeking top-tier talent across various industries. Our mission is to bridge the gap between exceptional individuals and organizations striving for excellence in their managerial hierarchy.</p>
        <p>What sets JOBKA apart is our unwavering commitment to scrutinizing individuals meticulously, ensuring that we connect businesses with the most qualified and suitable candidates</p>
      </div>
      <div className="threecontainer" id='piccontainer'>
        <img src={pic1} alt="" />
      </div>
      <div className="threecontainer">
      <h2>Why choose us</h2>
      <div className="innercard">
        <h4>PROVEN TRACK RECORD</h4>
        <p>With a track record of successfully navigating and delivering on metro tenders, we bring wealth of experience to every project. </p>
      </div>
      <div className="innercard">
        <h4>COMPREHENSIVE SOLUTIONS</h4>
        <p>From labor supply to electrical work and job contracts, we offer end-to-end solutions tailored to the unique requirements of metro infrastructure projects. </p>
      </div>
      <div className="innercard">
        <h4>COMMITMENT TO EXCELLENCE</h4>
        <p>Excellence is not just a goal, it's our standard. Our commitment to delivering high-quality services is unwavering, and we continuously strive to raise the bar in all aspects of our operations</p>
      </div>
       
      </div>
    </div>
    </>
  )
}

export default Aboutus
