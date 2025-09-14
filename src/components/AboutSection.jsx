import React from 'react';
import { Element } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';


function AboutSection() {
    return (
        <Element name="about">
            <Container className="my-5 about-container">
                <Row>
                    <Col md={6}>
                        <img
                            src="https://placehold.co/600x400"
                            alt="About Marty"
                            className="img-fluid about-image"
                        />
                    </Col>
                    <Col md={6}>
                        <h2>Hi, I'm Marty...</h2>
                        <p>
                            I have been crafting unique stained glass art pieces for over 20 years.
                            Each piece is handmade with care and precision...
                        </p>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}

export default AboutSection;