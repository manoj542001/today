import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apicard = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        axios.get('https://fakestoreapi.com/products').then((res) => setData(res.data))
    }
    useEffect(() => { fetchData() }, [])
    console.log(data)
    return (
        <div>
            <div className="container">
                <div className="row ">
                    {data.map((e, i) => (
                        <div className="col-md-4 my-3">
                            <div className="card w-100 h-100" id={e.id}>
                                <img src={e.image} alt="" className='card-top' />
                                <div className="card-body">

                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </div>

        </div>
    )
}

export default Apicard
