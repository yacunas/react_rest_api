import React from 'react'
import { Button as RButton } from 'react-bootstrap'

const Button = (props) => {
  return (
    <RButton variant={props.buttonVariant} size='sm'>{props.buttonLabel}</RButton>
  )
}

export default Button