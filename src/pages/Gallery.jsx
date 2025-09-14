import React from 'react';
import GalleryHeader from '../components/GalleryHeader';
import GalleriesArea from '../components/GalleriesArea';
import GalleryBody from '../components/GalleryBody';
import { Container } from 'react-bootstrap';

function Gallery({ title, description, images }) {
    return (
        <>
            <GalleryHeader title={title} description={description} />
            <hr></hr>
            <GalleryBody images={images}/>
        </>
    );
}

export default Gallery;