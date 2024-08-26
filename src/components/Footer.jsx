import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <div className='container-fluid bg-body-tertiary p-5'>
                <Row className=''>
                    <Col md={6} sm={12}>
                        {/* <h2>Portfolio</h2> */}
                        <p className='pt-3'>Thank you for visiting my portfolio! As a dedicated React developer with a passion for creating dynamic and responsive web applications, I am committed to delivering high-quality, user-centric solutions .</p>
                    </Col>
                    <Col md={2} sm={12} style={{display:'flex',flexDirection:"column",textAlign:'center'}}>
                        <h5 className='mb-3'>Connect</h5>
                        <a className='mb-3' href="https://github.com/Ajayn02" target='_blank'><i className="fa-brands fa-github fa-xl" style={{color: "#080808",}} /></a>
                        <a className='mb-3' href="" target='_blank'><i className="fa-brands fa-whatsapp fa-xl" style={{color: "#030303",}} /></a>
                        <a className='mb-3' href="https://www.linkedin.com/in/ajay-n02/" target='_blank'><i className="fa-brands fa-linkedin fa-xl" style={{color: "#030303",}} /></a>
                        <a className='mb-3' href="" target='_blank'><i className="fa-brands fa-x-twitter fa-xl" style={{color: "#0a0a0a",}} /></a>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className='d-grid pe-lg-5 pe-md-0 pe-sm-0'>
                            <h4 className='mb-3'>Feedback</h4>
                            <textarea name="" id="" className='form-control mb-3'></textarea>
                        </div>
                        <button className='btn btn-warning' style={{padding:'5px 30px'}}>Send</button>

                    </Col>
                </Row>
            </div>
              
        </>
    )
}

export default Footer