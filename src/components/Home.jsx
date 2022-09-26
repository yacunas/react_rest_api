import {React} from 'react';
import {Container} from 'react-bootstrap';
import BoardersList from './boarders/BoardersList';

const Home = () => {
  return (
   <>
   <Container>
    <h1 className='text-center mt-5'>Rest API Exercise</h1>
    <BoardersList/>
   </Container>
   </>
   )
}

export default Home