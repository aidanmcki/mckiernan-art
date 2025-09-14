import React from 'react';
import { Container } from 'react-bootstrap';

function GalleryHeader({ title, description }) {
    return (
        <Container>
            <h2>{title}</h2>
            <p>{description}</p>
        </Container>
    );
}

export default GalleryHeader;