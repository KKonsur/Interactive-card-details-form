import React from 'react'
import { useState, useEffect } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import './CardForm.scss'

const CardForm = props => {
   const [cardInfo, setCardInfo] = useState({ name: '', number: '', month: '', year: '', cvc: '' })
   const [errorMessages, setErrorMessages] = useState({})
   const [isValidate, setIsValidate] = useState({ nameValidate: true, numberValidate: true, dateValidate: true, cvcValidate: true })

   useEffect(() => {
      props.handleGetCardInfo(cardInfo)
   })

   const handleValidation = () => {
      if (cardInfo.name === '') {
         setErrorMessages(prevState => ({ ...prevState, nameError: `Can't be blank` }))
         setIsValidate(prevState => ({ ...prevState, nameValidate: false }))
      }
      else {
         setErrorMessages(prevState => ({ ...prevState, nameError: '' }))
         setIsValidate(prevState => ({ ...prevState, nameValidate: true }))
      }

      if (cardInfo.number === '') {
         setErrorMessages(prevState => ({ ...prevState, numberError: `Can't be blank` }))
         setIsValidate(prevState => ({ ...prevState, numberValidate: false }))
      } else if (cardInfo.number.length < 19 || /^[0-9\s]*$/.test(cardInfo.number) === false) {
         setErrorMessages(prevState => ({ ...prevState, numberError: `Wrong format` }))
         setIsValidate(prevState => ({ ...prevState, numberValidate: false }))
      }
      else {
         setErrorMessages(prevState => ({ ...prevState, numberError: '' }))
         setIsValidate(prevState => ({ ...prevState, numberValidate: true }))
      }

      if ((cardInfo.month || cardInfo.year) === '') {
         setErrorMessages(prevState => ({ ...prevState, dateError: `Can't be blank` }))
         setIsValidate(prevState => ({ ...prevState, dateValidate: false }))
      } else if (cardInfo.year.length < 2 || cardInfo.month.length < 2) {
         setErrorMessages(prevState => ({ ...prevState, dateError: `Wrong format` }))
         setIsValidate(prevState => ({ ...prevState, dateValidate: false }))
      } else {
         setErrorMessages(prevState => ({ ...prevState, dateError: '' }))
         setIsValidate(prevState => ({ ...prevState, dateValidate: true }))
      }

      if (cardInfo.cvc === '') {
         setErrorMessages(prevState => ({ ...prevState, cvcError: `Can't be blank` }))
         setIsValidate(prevState => ({ ...prevState, cvcValidate: false }))
      } else if (cardInfo.cvc.length < 3) {
         setErrorMessages(prevState => ({ ...prevState, cvcError: 'Wrong format' }))
         setIsValidate(prevState => ({ ...prevState, cvcValidate: false }))
      }
      else {
         setErrorMessages(prevState => ({ ...prevState, cvcError: '' }))
         setIsValidate(prevState => ({ ...prevState, cvcValidate: true }))
      }
   }

   const handleFormSubmit = e => {
      e.preventDefault()
      if (isValidate.nameValidate && isValidate.numberValidate && isValidate.dateValidate && isValidate.cvcValidate)
         props.handleSubmit()
   }

   const handleCardNameChange = e => {
      const { name, value } = e.target
      setCardInfo({ ...cardInfo, [name]: value })
   }

   const handleCardNumberChange = e => {
      const { value, name } = e.target
      let val = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim()
      setCardInfo({ ...cardInfo, [name]: val })
   }

   const handleCardMonthChange = e => {
      const { value, name } = e.target
      let val = value.replace(/[^0-9]/g, '')
      if (val > 12) {
         val = 12
      }
      setCardInfo({ ...cardInfo, [name]: val })
   }

   const handleCardYearChange = e => {
      const { value, name } = e.target
      let val = value.replace(/[^0-9]/g, '')
      setCardInfo({ ...cardInfo, [name]: val })
   }

   const handleCardCVCChange = e => {
      const { value, name } = e.target
      let val = value.replace(/[^0-9]/g, '')
      setCardInfo({ ...cardInfo, [name]: val })
   }

   return (
      <div className='card-form-container'>
         <form onSubmit={handleFormSubmit} className='card-form'>
            <label htmlFor="">Cardholder name</label>
            <input name='name' className={!isValidate.nameValidate ? 'input-error' : null} value={cardInfo.name} onChange={handleCardNameChange} type="text" placeholder='e.g Jane Appleseed' />
            {!isValidate.nameValidate && <ErrorMessage message={errorMessages.nameError} />}
            <label htmlFor="">Card number</label>
            <input name='number' className={!isValidate.numberValidate ? 'input-error' : null} value={cardInfo.number} type="text" maxLength={19} placeholder='e.g 1234 5678 9123 0000' onChange={handleCardNumberChange} />
            {!isValidate.numberValidate && <ErrorMessage message={errorMessages.numberError} />}
            <div className="card-form__date-cvc">
               <div className="card-form__date">
                  <label htmlFor="">Exp. date (MM/YY)</label>
                  <div className="card-form__date-inputs">
                     <input name='month' className={!isValidate.dateValidate ? 'input-error' : null} type="text" placeholder='MM' maxLength={2} value={cardInfo.month} onChange={handleCardMonthChange} />
                     <input name='year' className={!isValidate.dateValidate ? 'input-error' : null} type="text" placeholder='YY' maxLength={2} value={cardInfo.year} onChange={handleCardYearChange} />
                  </div>
                  {!isValidate.dateValidate && <ErrorMessage message={errorMessages.dateError} />}
               </div>
               <div className="card-form__cvc">
                  <label htmlFor="">CVC</label>
                  <input name='cvc' className={!isValidate.cvcValidate ? 'input-error' : null} onChange={handleCardCVCChange} value={cardInfo.cvc} type="text" placeholder='e.g 123' maxLength={3} />
                  {!isValidate.cvcValidate && <ErrorMessage message={errorMessages.cvcError} />}
               </div>
            </div>
            <button onClick={handleValidation} type="submit">Confirm</button>
         </form>
      </div>
   )
}

export default CardForm