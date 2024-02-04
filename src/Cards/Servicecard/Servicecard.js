import React from 'react'
import './Servicecard.css'
import pic from '../../Components/Commitment/contractpic1.png'
function Servicecard({heading,para,iconpic}) {
  return (
    <div>
      <div className='outerbox'>
        <img src={iconpic} alt="" />
        <h3>{heading}</h3>
        <p>{para}</p>

      </div>
    </div>
  )
}

export default Servicecard
