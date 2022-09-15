import React from 'react'
import './CardFront.scss'

const CardFront = ({ cardInfo }) => {
   const { number, name, month, year } = cardInfo
   return (
      <div className="card-front">
         <div className="circles">
            <div className='circles__one'></div>
            <div className='circles__two'></div>
         </div>
         <p className='card-number'>{number ? number : '0000 0000 0000 0000'}</p>
         <div className="card-info">
            <p className="card-info__name">{name ? name : 'Jane Appleseed'}</p>
            <p className="card-info__date">{month ? month : '00'}/{year ? year : '00'}</p>
         </div>
      </div>
   )
}

export default CardFront