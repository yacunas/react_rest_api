import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FormCard from '../common/form/FormCard';

const BoarderEdit = () => {
  const {id} = useParams();

    return (
      <Container className='mt-5'>
        <FormCard uniqueId={id} type={'edit'}/>
      </Container>    
    )
}

export default BoarderEdit