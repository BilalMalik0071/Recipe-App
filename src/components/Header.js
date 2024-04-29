import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Link to={'/'}>
            <Navbar.Brand href="#home" className='p-0'>
              <img
                alt=""
                src="https://i.postimg.cc/j5HhzM12/my-recipes-logo-png-transparent-my-recipes-logo-removebg-preview.png"
                width="130"
                height="50"
                className="d-inline-block align-top,imglogo"
              />{' '}
              <span></span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
