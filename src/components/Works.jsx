import React from 'react'
import './Works.css'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
                                                                
function Works() {
    return (
        <>
            <div className="container-fluid work" id='works'>
                <Row className='rows'>
                    <h1 className='text-center'>Project's</h1>
                    <Col lg={3} md={5} sm={10} className='cols'>
                        <Card className='cards'>
                            <Card.Img variant="top" src="https://img.freepik.com/free-vector/list-concept-illustration_114360-2498.jpg?t=st=1724323554~exp=1724327154~hmac=bc8a73629ae198a008b607b622f8b12390ccde12eb008c807284ca1389f6c876&w=740" />
                            <Card.Body className='text-center'>
                                <Card.Title className='text-center'>Task Manager</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <button className='btn btn-warning px-3 '>View</button>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={5} sm={10} className='cols'>
                        <Card className='cards'>
                            <Card.Img variant="top" src="https://img.freepik.com/free-vector/conversation-concept-illustration_114360-1305.jpg?t=st=1724323626~exp=1724327226~hmac=887f7edd05d3f131bc11e0e4bd81f335f13ddddad59c04a1d02173cef54f313b&w=740" />
                            <Card.Body className='text-center'>
                                <Card.Title className='text-center'>Real-Time Chat App</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <button className='btn btn-warning px-3 '>View</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={3} md={5} sm={10} className='cols'>
                        <Card className='cards'>
                            <Card.Img variant="top" src="https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories-vector-isolated-concept-metaphor-illustration_335657-2764.jpg?t=st=1724323680~exp=1724327280~hmac=f06350251c30dd317be2ab549d14a65d519cb5896d904778a6327aee7e729f95&w=740" />
                            <Card.Body className='text-center'>
                                <Card.Title className='text-center'>Admin-Dashboard</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <button className='btn btn-warning px-3 '>View</button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </div>
        </>
    )
}

export default Works