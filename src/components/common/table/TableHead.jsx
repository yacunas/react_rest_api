import React from 'react'

const TableHead = () => {
  return (
    <thead>
        <tr>
            <th className='text-center'>#</th>
            <th className='text-center'>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th className='text-center'>Action</th>
        </tr>
    </thead>
  )
}

export default TableHead