import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from '../Assets/contact/github.png';
import linkedin from '../Assets/contact/linkedin.png';
import '../styles/header.css';

export default function Header() {
  return (
    <Navbar collapseOnSelect className='navbar fixed-top'  bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="#home" className="mainIcon">S</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='flex-right'>
          <Nav className="ms-auto justify-item-end">
            <Nav.Link href="#home" className=" navList">Home</Nav.Link>
            <Nav.Link href="#about" className=" navList">About</Nav.Link>   
            <Nav.Link href="#tech" className=" navList">Technologies</Nav.Link>
            <Nav.Link href="#projects" className=" navList">Projects</Nav.Link>    
            <Nav.Link href="#contact" className=" navList">Contact</Nav.Link>
            <a href="https://github.com/saikiranpb"  target="_blank">
              <img src={github} style={{width:"56px",height:"35px",marginLeft:"10px",marginTop:"5px"}}></img>
            </a> 
            <a href="https://www.linkedin.com/in/saikiranpb"  target="_blank">
              <img src={linkedin} style={{width:"33px",height:"33px",marginLeft:"10px",marginTop:"5px"}}></img>
            </a>         
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
  )
}
