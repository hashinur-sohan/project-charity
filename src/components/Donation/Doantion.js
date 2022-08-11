import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Doantion = () => {
    return (
        <div>
            <h2>Our Projects</h2>
            <Container className='do'>
                <Row md={4}>
                    <Col>
                        {/* PROJECT MASJID */}
                        <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                            <Card.Title>Food Donation</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>





                    <Col xs={6}>
                        
                        {/* PROJECT EDUCATION */}
                        <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/7406919/pexels-photo-7406919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                            <Card.Title>Donation For Masjid</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        
                    </Col>


                    <Col>

                            {/* PROJECT MASJID */}
                            <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/067F/production/_117536610_7ccb7290-9f62-4e97-a3e1-b774f5756e69.jpg" />
                                    <Card.Body>
                                <Card.Title>Help War Affected People</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                    
                    </Col>
                </Row>
            </Container>
<br />
            <Container>
                <Row md={4}>
                    <Col>
                        {/* PROJECT MASJID */}
                        <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://stat.medact.org/uploads/2015/11/10055757036_4817730ebc_o-1024x768.jpg" />
                                <Card.Body>
                            <Card.Title>Vaccine Distribution</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>





                    <Col xs={6}>
                        
                        {/* PROJECT EDUCATION */}
                        <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.news18.com/ibnlive/uploads/2020/10/1602687299_andhra-rain.jpg?impolicy=website&width=510&height=356" />
                                <Card.Body>
                            <Card.Title>Help Flood Affected People</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        
                    </Col>
<br />

                    <Col>

                            {/* PROJECT MASJID */}
                            <div>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-51577820,imgsize-14098,width-400,resizemode-4/51577820.jpg" />
                                    <Card.Body>
                                <Card.Title>Free Education</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                    
                    </Col>
                </Row>
            </Container>
           
           
            

               
                

                
    

            
        
    </div>
        
    );
};

export default Doantion;