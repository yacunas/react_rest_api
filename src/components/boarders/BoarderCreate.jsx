import { React } from 'react';
import { Container } from 'react-bootstrap';
import FormCard from '../common/form/FormCard';
import { v4 as uuid } from 'uuid';

const BoarderCreate = () => {
  
  return (
    <Container className='mt-5'>
      <FormCard uniqueId={uuid()} type={'create'}/>
    </Container>    
    
  )
}

export default BoarderCreate