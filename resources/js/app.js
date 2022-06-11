import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './components/HomePage';
import MyGallery from './components/MyGallery';
import Create from './components/Create';

import Navbar from './components/Navbar'

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';


import '../../node_modules/font-awesome/css/font-awesome.min.css'
import "./styles/App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true)
        }, 2000);
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes >
                <Route path="/" exact element={<HomePage />} />
                <Route path="/mygallery" exact element={
                    <SimpleReactLightbox>
                        <MyGallery />
                    </SimpleReactLightbox>
                } />
                <Route path="/create" exact element={<Create />} />
            </Routes >
        </Router>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
