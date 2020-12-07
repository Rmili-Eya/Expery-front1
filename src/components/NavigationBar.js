import React from 'react';
import {useState,useEffect} from 'react';
import{ Nav , Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Nav.css';

export const NavigationBar = () => (

   
     <Navbar expand="lg">
         <Navbar.Brand className="text-white" href="/">Expery</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
                 <Nav.Item> <Nav.Link href="/">For Entrepreneur</Nav.Link> </Nav.Item>
                 <Nav.Item> <Nav.Link href="/about">For Experts</Nav.Link> </Nav.Item>
               
                <div className="Buttons">
                 <Nav.Item><Button>Login</Button>  </Nav.Item>
                 <Nav.Item> <Button>Sign Up</Button>  </Nav.Item>
                 </div>
            </Nav>
         </Navbar.Collapse>
     </Navbar>
  
)
export default NavigationBar;