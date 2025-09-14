import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Element } from 'react-scroll';


// TODO upload method for dad, maybe cloudinary. Someway to flag images as featured for carousel and which galleries they belong to
const images = [
  { src: 'https://placehold.co/600x400', alt: 'Slide 1' },
  { src: 'https://placehold.co/600x400', alt: 'Slide 2' },
  { src: 'https://placehold.co/600x400', alt: 'Slide 3' },
];

function ArtCarousel() {
    return (
        <Element name="carousel">
            <Carousel>
                {images.map((img, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={img.src}
                            alt={img.alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Element>
    );
}

export default ArtCarousel;