import React from 'react'
import CardBack from './CardBack'
import CardFront from './CardFront'
import './CardsContainer.scss'

const CardsContainer = props => (
   <div className='cards-container'>
      <CardFront cardInfo={props.cardInfo} />
      <CardBack cvc={props.cardInfo.cvc} />
   </div>
)


export default CardsContainer