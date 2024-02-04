import React from 'react'
import './Expertise.css'
import pic2 from './market.jpg'
import pic1 from './recruitment.jpg'
import pic3 from './consultant.jpg'
function Expertise() {
  return (
    <div className='expertisecontainer'>
        <h2 id='hedlineexpertise'>Our Expertise</h2>
      <section class="articles">
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={pic1} alt="" />
            </figure>
            <div class="article-body">
              <h2>Strategic Recruitment</h2>
              <p>
              JOBKA specializes in strategic recruitment processes, understanding the unique needs and goals of each client. Tailored recruitment strategies are developed to attract top-tier talent for managerial positions.
              </p>
          
            </div>
          </div>
        </article>

        <article>
          <div class="article-wrapper">
            <figure>
              <img src={pic2} alt="" />
            </figure>
            <div class="article-body">
              <h2>Global Market Knowledge</h2>
              <p>With a presence in the global business world, JOBKA possesses in-depth knowledge of international markets and recruitment trends.The agency can navigate diverse cultural and industry nuances to source the best talent globally
              </p>

          
            </div>
          </div>
        </article>
        <article>

          <div class="article-wrapper">
            <figure>
              <img src={pic3} alt="" />
            </figure>
            <div class="article-body">
              <h2>Qualified Consultants</h2>
              <p>
              JOBKA prides itself on a team of accomplished and highly qualified consultants.These experts bring industry-specific knowledge, ensuring a deep understanding of client requirements and candidate qualifications.
              </p>
         
            </div>
          </div>
        </article>
        

       
      </section>
    </div>
  )
}

export default Expertise
