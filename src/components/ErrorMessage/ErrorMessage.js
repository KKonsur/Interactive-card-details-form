import React from 'react'
import './ErrorMessage.scss'

const ErrorMessage = props => (
   <p className='error-message'>{props.message}</p>
)

export default ErrorMessage