import { React, useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { listBoarders, deleteBoarder } from '../../api/boarders-api';
import Button from '../button/Button';
import { Button as RButton } from 'react-bootstrap';

const TableRow = () => {
    const [boarders, setBoarders] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const boarders = await listBoarders();
            setBoarders(boarders);
        }
        fetchData();
    }, []);
    
    return (
        boarders.map((boarder, index) => {
            return (
                <tr key={boarder.id} className='align-middle'>
                    <td className='text-center'>{index+1}</td>
                    <td>
                        <Card style={{ width: '3rem' }} className='mx-auto'>
                            <Card.Img variant="top" src={boarder.avatar} />
                        </Card>    
                    </td>
                    <td>{boarder.first_name}</td>
                    <td>{boarder.last_name}</td>
                    <td className='text-center'>
                        <Link to={`/boarders/${boarder.id}`}><Button buttonVariant={'primary'} buttonLabel={'View'}/></Link>
                        &nbsp;
                        <Link to={`/edit/${boarder.id}`}><Button buttonVariant={'secondary'} buttonLabel={'Edit'}/></Link>
                        &nbsp;
                        <RButton variant='danger' size='sm' onClick={() => deleteBoarder(boarder.id)}>Delete</RButton>
                    </td>
                </tr>
            )
        })
    )
}

export default TableRow