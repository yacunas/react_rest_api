import { React, useState, useEffect } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { createBoarder, editBoarder, listBoarder } from '../../api/boarders-api';
import FormSelect from './FormSelect';
import FormField from './FormField';
import { useNavigate } from 'react-router-dom';

const FormCard = (props) => {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if(props.type === 'edit'){
      const fetchData = async () => {
        const boarder = await listBoarder(props.uniqueId);
        setFirstName(boarder.first_name);
        setLastName(boarder.last_name);
        setPhoneNumber(boarder.phone_number);
        setGender(boarder.gender);
      }
      fetchData();
    }
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      const boarder = {
        id: props.uniqueId,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        gender: gender
      }
      
      if(props.type === 'edit'){editBoarder(boarder)}
      else if(props.type === 'create'){createBoarder(boarder)}
      navigate('/');
    }
    event.preventDefault();
    setValidated(true);
  };

  return (
    <Card>
        <Card.Header as="h5">{props.uniqueId}</Card.Header>
        <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='mb-4'>
            <Row>
            <FormField inputLabel={'First Name'} value={firstName} handleChange={value => setFirstName(value)} />
            <FormField inputLabel={'Last Name'} value={lastName} handleChange={value => setLastName(value)} />
            <FormField inputLabel={'Phone Number'} value={phoneNumber} handleChange={value => setPhoneNumber(value)} />
            <FormSelect selectLabel="Gender" value={gender} handleChange={value => setGender(value)}/>
            </Row>
            <Button type="submit">Submit</Button>
        </Form>  
        </Card.Body>
    </Card>
    
  )
}

export default FormCard