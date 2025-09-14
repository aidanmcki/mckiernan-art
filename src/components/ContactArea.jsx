import React from 'react';
import { Element } from 'react-scroll';
import { Container } from 'react-bootstrap';

function ContactArea() {
    return (
        <Element name="contact">
            <Container className="my-5 contact-container">
                <h2>Contact</h2>
                <p>For questions or comissions, feel free to reach out by email at <a>martymckiernan@gmail.com</a>.</p>
            </Container>
        </Element>
    );
}

export default ContactArea;