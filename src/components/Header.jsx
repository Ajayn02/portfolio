import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
       <Navbar className="bg-dark " style={{color:"whitesmoke"}}>
        <Container >
          <Navbar.Brand  ><h2  style={{color:"whitesmoke"}}>Portfolio</h2></Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header