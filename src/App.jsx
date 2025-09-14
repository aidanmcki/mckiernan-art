import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Gallery from './pages/Gallery';
import Home from './pages/Home';

function App() {
    return (
        <>
            <AppNavbar />
            <Routes>
                <Route  
                    path="/"
                    element={<Home />}
                />
                <Route 
                    path="/birds" 
                    element={
                    <Gallery 
                        title={ "Birds" }
                        description={ "A collection of cute and quirky birds, some perched on driftwood foraged from the beaches of Lake Michigan." }
                        images={ [] }
                    />
                    } 
                />
                <Route 
                    path="/air-plant-holders" 
                    element={
                    <Gallery 
                        title={ "Air Plant Holders" }
                        description={ "A collection of simple, striking pieces built to host an air plant." }
                        images={ [] }
                    />
                    } 
                />
                <Route 
                    path="/large-works" 
                    element={
                    <Gallery 
                        title={ "Large Works" }
                        description={ "A collection of larger works, created through many hours of planning and work." }
                        images={ [] }
                    />
                    } 
                />
                <Route 
                    path="/birds" 
                    element={
                    <Gallery 
                        title={ "Asdf" }
                        description={ "Asdf" }
                        images={ [] }
                    />
                    } 
                />
                
            </Routes>
            <AppFooter />
        </>
    );
}

export default App;
