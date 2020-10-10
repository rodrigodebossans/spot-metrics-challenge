import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand href='/'>Spot Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='shopping-list'>Lista de compras</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
