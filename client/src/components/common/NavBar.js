import { Link, NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { isAuthenticated, handleLogout, getUserId } from './Auth'
import Logo from '../images/van-logo.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

//Custom imports 

const NavBar = () => {
  // ! State
  const [userId, setUserId] = useState('')

  // ! Navigation
  const navigate = useNavigate()


  return (
    <div className='navbar-container sticky-top'>
      <Navbar expand="md" className="navbar sticky-top">
        <Container>
          <Navbar.Brand as={Link} to='/' className='intro-navbar'><img
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-center img-nav"
            alt="Logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" if="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/locations">
                Locations
              </Nav.Link>
              {isAuthenticated() ?
                <>
                  <Nav.Link as={Link} to={`/profile/${getUserId()}`}>
                    Profile
                  </Nav.Link>
                  <span className='nav-link' onClick={() => handleLogout(navigate)}><span className='red-text'>Logout</span></span>
                </>
                :
                <>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    <span className='red-text'>Login</span>
                  </Nav.Link>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
