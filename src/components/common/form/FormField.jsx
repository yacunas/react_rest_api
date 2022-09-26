import React from 'react'
import Form from 'react-bootstrap/Form'

const FormField = (props) => {
    
  return (
    <Form.Group className='mb-3'>
        <Form.Label>{props.inputLabel}</Form.Label>
        <Form.Control required value={props.inputValue} type="text" placeholder={props.inputLabel} onChange={(e) => props.handleChange(e.target.value)}/>
    </Form.Group>
  )
}

export default FormField