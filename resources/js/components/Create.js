import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import axios from 'axios';
import {useState} from "react";

function Create() {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    //POST REQUEST
    const submitForm = () => {
        axios.post(`http://localhost:8000/api/users`, {
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div>
            <h2>New User</h2>
            <div className={"row"}>
                <div className={"col-sm-3 ml-4"}>
                    <div className={"card p-4"}>

                        <label>Name</label>
                        <input type="text" name={"enteredName"} className={"form-control mb2"}
                               value={enteredName}
                               onChange={nameChangeHandler}/>

                        <label>Email</label>
                        <input type="email" name={"enteredEmail"} className={"form-control mb2"} value={enteredEmail}
                               onChange={emailChangeHandler}/>

                        <label>Password</label>
                        <input type="password" name={"enteredPassword"} className={"form-control mb2"}
                               value={enteredPassword}
                               onChange={passwordChangeHandler}/>

                        <button type={"button"} onClick={submitForm} className={"btn btn-info mt-2"}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Create;
