import React, {useEffect, useState} from 'react';

import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';


function HomePage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        axios.get('http://localhost:8000/api/users').then(res => {
            setUsers(res.data);
        })
    }

    return (<div>
        <table className={"table"}>
            <thead>
            <tr>
                <th>Sno.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

            {users.map((user, index) => (
                <tr key={user.id}>
                    <td>{index}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>edit</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>);
}

export default HomePage;
