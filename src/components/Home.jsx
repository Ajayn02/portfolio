import React from 'react'
import './Home.css'
import { Row,Col } from 'react-bootstrap'


function Home() {
  return (
    <>
        <div className='container intro'>
            <Row className='d-flex'>
                <Col md={5} sm={10} className='col1'>
                    <h4>Hi, I am Ajay !</h4>
                    <h1>React Developer</h1>
                    <div className='d-flex mt-2'>
                      <a href='#works' className='btn btn-warning me-3 bth1' >Projects</a>
                      <a href='#contact' className='btn btn-tertiary border bth2'>Contact</a>
                     

                    </div>
                </Col>
                <Col md={5} sm={10} className='col2'>
                   <img src="https://img.freepik.com/premium-vector/vector-developer-man-developing-program-him-desk_983889-221.jpg?w=740" alt="No" />
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Home