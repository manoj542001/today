import React from 'react'
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate()
    const newuser = JSON.parse(localStorage.getItem('newUser'))
    console.log(newuser[0].names);
    const remove = () => {
        localStorage.removeItem('newUser');
        navigate('/form')
    }
    return (
        <div>

            <h1>Details </h1>
            <table class="table table-striped">
                <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{newuser[0].names}</td>
                    <td>{newuser[0].mail}</td>
                    <td>{newuser[0].password}</td>
                    <td><button className='btn btn-danger' onClick={remove}>Delete</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Details
