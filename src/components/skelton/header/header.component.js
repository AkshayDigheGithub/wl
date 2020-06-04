import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Header Name</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
