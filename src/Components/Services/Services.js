import React from 'react'
import './Services.css'
import Servicecard from '../../Cards/Servicecard/Servicecard'
import pic1 from './construction.png'
import pic2 from './oil.png'
import pic3 from './healthcare.png'
import pic4 from './manufacturing.png'
import pic5 from './transport.png'
import pic6 from './pharma.png'
import pic7 from './operation.png'
import pic8 from './Engineering.png'
function Services() {
  return (
    
    <div className='aboutcontentcontainer'>
    <h2>Our Services</h2>
    <div className='contentconatiner'>
  <p>
    Proficiency Across Diverse IndustriesIn the vast landscape of industries, unique skills and expertise are essential for successful execution. JOBKA Manpower Recruitment Agency excels in providing specialized manpower supply services tailored to meet the distinct demands of various sectors. Our commitment extends across the following industries, ensuring that your specific needs are met with precision and professionalism."</p>
  <p>From executive leadership in corporate realms to skilled professionals in technical domains, we understand that each industry requires a distinct set of talents. JOBKA's dedicated manpower supply services cater to a spectrum of sectors, including but not limited to manufacturing, technology, healthcare, finance, and beyond. Our goal is to seamlessly match the right skills with the right industry, fostering excellence and efficiency in every partnership. Trust JOBKA to be your reliable partner in delivering top-notch talent across diverse industries.</p>
  <div className='line'></div>
  <div className='secondline'></div>

  </div>
  <div className="cardcontainer">
  <h3>Industry we Serve</h3>

    <div className="rowcontainer">
        <Servicecard iconpic={pic1} heading="Construction & Real Estate" para="The Construction/Real Estate industry, a cornerstone of any economy, thrives on a solid foundation of rapid automation and mechanization. Balancing technology, it stands as a dynamic and rapidly advancing sector, playing a pivotal role in shaping the economic landscape "/>
        <Servicecard iconpic={pic2}  heading="Oil & Gas " para="The Oil and Gas Industry has significantly fueled global economic development. As the industry expands, it generates numerous job opportunities worldwide. From conceptualization and design to construction, management, and operation of projects, a diverse workforce is essential to drive the success of international ventures within the Oil & Gas sector."/>
        <Servicecard iconpic={pic3}  heading="Healthcare" para="Connecting Exceptional Talent to Transform Lives
In the ever-evolving field of healthcare, JOBKA specializes in recruiting top-tier professionals who are dedicated to making a difference. From skilled medical practitioners to administrative experts"/>
      

    </div>
    <div className="rowcontainer">
    
    <Servicecard  iconpic={pic4} heading="Manufacturing Industries" para="Powering Productivity with Exceptional Talent
JOBKA understands the critical role manufacturing plays in global economies. Our recruitment services focus on identifying and securing skilled professionals across various manufacturing sectors."/>
    <Servicecard iconpic={pic5}  heading="Transport & Logistics" para="Navigating Success Through Strategic Workforce Solutions
In the fast-paced world of transport and logistics, JOBKA is your partner in building a dynamic and efficient workforce. Our recruitment services cater to the diverse needs of this industry."/>
    <Servicecard  iconpic={pic6} heading="Pharma" para="Accelerating Innovation in Pharmaceutical Recruitment
The pharmaceutical industry demands precision and innovation. JOBKA's recruitment services in the pharma sector are tailored to connect you with highly skilled professionals."/>
        

    </div>
    <div className="rowcontainer">
    
    <Servicecard  iconpic={pic7} heading="Operation & Maintenance: " para="Optimizing Performance through Skilled Workforce
JOBKA specializes in recruitment services for the Operation & Maintenance sector, providing access to highly skilled professionals who ensure the seamless operation and upkeep of critical assets."/>
    <Servicecard iconpic={pic8}  heading="Engineering" para="Building Tomorrow's Solutions, Today
JOBKA's recruitment services in the engineering sector are dedicated to sourcing the visionary minds and technical experts shaping the future. Whether your needs lie in civil, mechanical, electrical, or any specialized engineering field, we connect you with the talent that drives innovation and excellence. "/>
    <Servicecard iconpic={pic1}  heading="
Infrastructure" para="Elevating Infrastructure Excellence through Strategic Recruitment
JOBKA excels in providing recruitment services tailored for the infrastructure sector, where precision and reliability are paramount. Our focus spans across civil engineering, project management, and specialized roles essential for the planning, development, and maintenance of robust infrastructure projects."/>
        

    </div>
   
  </div>
 

</div>
  )
}

export default Services
