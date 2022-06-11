import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

function Edit(props) {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const [users, setUsers] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchUser()
    }, []);

    const fetchUser = () => {
        axios.get(`http://localhost:8000/api/users/` + id + `/edit`).then((res) => {
            setEnteredName(res.data.name);
            setEnteredEmail(res.data.email);
        });
    }

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
        axios.put(`http://localhost:8000/api/users/`+id, {
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
            <h2>Edit User</h2>
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

                        <button type={"button"} onClick={submitForm} className={"btn btn-info mt-2"}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Edit;
