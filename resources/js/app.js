import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import Navbar from './components/Navbar'

import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import "./styles/App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/create" exact element={<Create/>}/>
                <Route path="/edit/:id" exact element={<Edit/>}/>
            </Routes>
        </Router>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
