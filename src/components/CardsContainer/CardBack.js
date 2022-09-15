import React from 'react'
import './CardBack.scss'

const CardBack = ({ cvc }) => (
   <div className="card-back">
      <p className='card-cvc'>{cvc ? cvc : '000'}</p>
   </div>
)

export default CardBack