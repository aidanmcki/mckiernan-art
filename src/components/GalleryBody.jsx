import React from 'react';
import { Container } from 'react-bootstrap';
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

function GalleryBody({ images }) {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {images.map((img, idx) => (
                <img key={idx} src={img.src} alt={img.alt} />
            ))}
        </Masonry>
    );
}

export default GalleryBody;