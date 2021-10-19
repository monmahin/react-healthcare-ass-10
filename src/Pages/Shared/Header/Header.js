import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hook/useAuth';




import logo from '../Header/logo/bona-logo.png'
const Header = () => {
    const { user, logOut } = useAuth()
    
    console.log(user)
    return (
        
    <Navbar  collapseOnSelect expand="lg" bg="info" variant="dark" sticky="top">
     <Container>
                <Navbar.Brand as={Link} to="/home#home">
                    <img alt="" src={logo} width="70px" />HealthCare
                </Navbar.Brand>
        <Navbar.Toggle/>     
        
            <Navbar.Collapse>
                
          <Nav className="ms-auto">
               <Nav.Link  as={HashLink} to="/home#home">Home</Nav.Link>
               <Nav.Link  as={Link} to="/directory">Directory</Nav.Link>
               <Nav.Link  as={HashLink} to="/home#services">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/home#doctors">Specialist</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>

                        
                        {user?.email ? <Button onClick={logOut} variant='dark' >Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }


                        {user?.email &&
                            <Nav.Link> <img src={user.photoURL } alt="" width="30px" /> </Nav.Link>
                        }
                        {user?.email &&
                            <Nav.Link>{user.displayName}</Nav.Link>
                        }


             
           </Nav>  
        </Navbar.Collapse>
        
     </Container>
  </Navbar>
        
    );
};

export default Header;