import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../styles/Navbar.css";

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-custom navbar-expand-lg navbar-dark bg-dark">
                <Link to='/' class="navbar-brand">CRUD</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">

                        <li className="aa nav-item mr-5">
                            <Link to='/' className="nav-link">
                                getAllUsers
                            </Link>
                        </li>

                        <li className="nav-item mr-5">
                            <Link to='/create' className="nav-link">
                                createNewUser
                            </Link>
                        </li>

                        {/*<li className="nav-item mr-5">*/}
                        {/*    <Link to='/mygallery' className="nav-link">*/}
                        {/*        myGallery*/}
                        {/*    </Link>*/}
                        {/*</li>*/}


                        {/*<li className="nav-item mr-5">*/}
                        {/*    <Link to='/smery' className="nav-link">*/}
                        {/*        Umelecké smery*/}
                        {/*    </Link>*/}
                        {/*</li>*/}

                        {/*<li className="nav-item">*/}
                        {/*    <Link to='/contact' className="nav-link" href="#">Kontakt</Link>*/}
                        {/*</li>*/}
                    </ul>

                </div>
            </nav>
        </>
    )
}
