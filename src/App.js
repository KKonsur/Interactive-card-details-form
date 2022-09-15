import React, { useState } from 'react'
import CardForm from './components/CardForm/CardForm'
import Summary from './components/Summary/Summary'
import CardsContainer from './components/CardsContainer/CardsContainer'

const App = () => {
   const [isSubmit, setIsSubmit] = useState(false)
   const [cardInfo, setCardInfo] = useState({})

   const handleSubmit = () => {
      setIsSubmit(true)
   }

   const handleGetCardInfo = data => {
      setCardInfo(data)
   }

   const handleClearData = () => {
      setIsSubmit(false)
      setCardInfo({})
   }

   return (
      <div className='container'>
         <CardsContainer isSubmit={isSubmit} cardInfo={cardInfo} />
         {isSubmit ?
            <Summary handleClearData={handleClearData} isSubmit={isSubmit} cardInfo={cardInfo} />
            :
            <CardForm handleSubmit={handleSubmit} handleGetCardInfo={handleGetCardInfo} />}
      </div>)
}

export default App