import React from 'react';
import { useState } from 'react';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


function Mycomp() {
    const [formVal, setformVal] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const show = (e) => {
        e.preventDefault()
        alert(` Name :  ${formVal}
 Email : ${user}
 Password :${password}`)
        setformVal('');
        setUser('');
        setPassword('');
        (localStorage.setItem('newUser', JSON.stringify([...JSON.parse(localStorage.getItem('newUser'))
            || [],
        {
            names: formVal,
            mail: user,
            password: password
        }
        ]))
        )
        navigate(`/formDetails`)

    }

    return (
        <div>
            <div className="container p-5 bg-warning">
                <div className="row">

                    <h1 >FORM</h1>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form action="" onSubmit={(e) => show(e)} >
                            <div className='container-fluid p-5  '>
                                <div className="card  " >
                                    <div className="card-body ">
                                        <div className=''>
                                            <div className=' input-group'>
                                                <input id='' type='text' className='form-control mb-2' placeholder='Name' onChange={(manoj) => setformVal(manoj.target.value)} autoFocus value={formVal} />

                                                <span className=' mb-2 input-group-text'><MdOutlineAdminPanelSettings /></span>
                                            </div>

                                            <div className=' input-group  '>
                                                <input id='' type='text' className='form-control mb-2' placeholder='Email' onChange={(e) => setUser(e.target.value)} value={user} />


                                                <span className=' input-group-text mb-2'><HiOutlineMailOpen /></span>
                                            </div>

                                            <div className=' input-group'>
                                                <input id='' type='password' className='form-control mb-2' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />

                                                <span className=' mb-2 input-group-text'><RiLockPasswordLine /></span>
                                            </div>

                                            <div className='d-grid'><button className='btn btn-success   ' type='submit' >
                                                submit</button></div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>

                    <div className="col-md-3"></div>

                </div>
            </div>
        </div>
    )
}

export default Mycomp
