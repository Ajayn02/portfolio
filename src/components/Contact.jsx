import React from 'react'
import './Contact.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <>
      <div className='container contct' id='contact'>
        <h1 className='text-center'>Contact</h1>

        <div className='d-flex justify-content-center  '>


          <form action="" className='frm '>
            <FloatingLabel controlId="name" label="Your Name" className="mb-3" >
              <Form.Control type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="Subect" label="Subject" className="mb-3">
              <Form.Control type="text" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="msg" label="Message" className="mb-3" >
            <Form.Control style={{ height: '100px' }} type="text" placeholder="Type Your Message Here" />
            </FloatingLabel>

            <div className='d-grid'>
              <button className='btn btn-warning'>SUBMIT</button>
            </div>

          </form>

        </div>
      </div>

    </>
  )
}

export default Contact