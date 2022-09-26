import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink }from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar sticky='top' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/create">Create</Nav.Link>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar