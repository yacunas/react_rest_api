import { React, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { listBoarder } from '../api/boarders-api';

const BoarderDetail = () => {
    const {id} = useParams();
    const [boarder, setBoarder] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const boarder = await listBoarder(id);
            setBoarder(boarder);
        }
        fetchData();
    }, []);

    if(!boarder) return null

  return (
    <Container >
        {
            boarder ?
            <Container className='my-3'>
                <Link to='/'>
                    <Button variant="outline-secondary" size='sm' className='mb-2'>Back</Button>
                </Link>
                <Card style={{ width: '20rem' }} className='mx-auto'>
                    <Card.Header>{boarder.id}</Card.Header>
                    <Card.Img variant="top" src={boarder.avatar} />
                    <Card.Body>
                        <Card.Title>{boarder.first_name} {boarder.last_name}</Card.Title>
                        <Card.Text>
                        {boarder.phone_number}
                        </Card.Text>
                        <Card.Text>
                        {boarder.gender}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            :
            'No record found'
        }
    </Container>
  )
}

export default BoarderDetail