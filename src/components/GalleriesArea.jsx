import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';

const cards = [
  { src: 'https://placehold.co/400x600', alt: 'Gallery 1', link: '/birds', title: 'Birds'},
  { src: 'https://placehold.co/400x600', alt: 'Gallery 2', link: '/birds', title: 'Ornaments'},
  { src: 'https://placehold.co/400x600', alt: 'Gallery 3', link: '/birds', title: 'Birds'},
  { src: 'https://placehold.co/400x600', alt: 'Gallery 4', link: '/birds', title: 'Birds'},
];

function GalleryCard({src, alt, link, title}) {
    return (
        <a href={link} className="gallery-card">
            <img src={src} alt={alt} className="img-fluid" />
            <div className="gallery-text">
                {title}
            </div>
        </a>
    );
}

function GalleriesArea() {
    return (
        <Element name="galleries">
            <Container className="my-5 galleries-area">
                <h2>Galleries</h2>
                <Row>
                    {cards.map((c) => (
                    <Col lg={3} sm={12} md={6}>
                        <GalleryCard src={c.src} alt={c.alt} link={c.link} title={c.title} />
                    </Col>
                    ))}
                </Row>
            </Container>
        </Element>
    );
}

export default GalleriesArea;