import React from 'react';
import {Table} from 'react-bootstrap';
import TableBody from '../common/table/TableBody';
import TableHead from '../common/table/TableHead';

const BoardersList = () => {
  return (
        <Table bordered hover size='sm'>
            <TableHead/>
            <TableBody/>
        </Table>
  )
}

export default BoardersList