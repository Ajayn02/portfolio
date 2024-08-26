import React from 'react'
import './About.css'
import { Row,Col } from 'react-bootstrap'

function About() {
  return (
    <>
    <div className='container about'>
        <h1 className='text-center'>About</h1>
        <Row className='abtrow mt-3'>
          
          <Col md={5} sm={10} className='abtcol1 p-4'>
          Hello I am Ajay , a skilled React developer who is enthusiastic about creating outstanding digital experiences, proficient in JavaScript, with an eye for detail . I am proficient in constructing scalable and reflectable applications; with skills on creating responsive Ul components, maintainable front-end architectures.
          </Col>
          <Col md={5} sm={10} className='abtcol2'>
            <img src="https://img.freepik.com/premium-vector/user-profile-interface-elements-illustration-ui_1278800-7797.jpg?w=740" alt="" />
          </Col>
        
        </Row>
    </div>
    </>
  )
}

export default About