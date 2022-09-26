import React from 'react'
import {Form} from 'react-bootstrap'

const FormSelect = (props) => {
  return (
    <Form.Group className='mb-3'>
        <Form.Label>{props.selectLabel}</Form.Label>
        <Form.Select value={props.selectValue} onChange={(e) => props.handleChange(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
    </Form.Group>
  )
}

export default FormSelect