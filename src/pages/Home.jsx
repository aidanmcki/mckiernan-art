import React from 'react';
import ArtCarousel from '../components/ArtCarousel';
import AboutSection from '../components/AboutSection';
import ContactArea from '../components/ContactArea';
import GalleriesArea from '../components/GalleriesArea';

function Home() {
    return (
        <>
            <ArtCarousel />
            <AboutSection />
            <hr></hr>
            <GalleriesArea />
            <hr></hr>
            <ContactArea />
            <hr></hr>
        </>
    );
}

export default Home;