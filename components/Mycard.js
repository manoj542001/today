import React from 'react'
import { data } from './json'
import { useNavigate } from 'react-router-dom'
function Mycard() {
    console.log(data)
    const navigate = useNavigate()

    return (
        <div>
            <div className="container m-4 bg-warning">
                <div className="row row-cols-1 row-cols-md-3">
                    {data.carts[0].products.map((e, i) => (

                        <div className="p-3">
                            <div className="card " style={{
                                width: '18rem',

                            }} >
                                <div className="card-body ">
                                    <h5 className="card-title ">{e.title}</h5>

                                </div>
                                <ul className="list-group list-group-flush ">
                                    <li className="list-group-item"><span style={{ color: "#CA1111" }}>Price : </span><span class="badge bg-warning text-dark">{e.price}</span></li>
                                    <li className="list-group-item"> <span style={{ color: "#CA1111" }}>Quantity : </span>{e.quantity}</li>
                                    <li className="list-group-item"><span style={{ color: "#CA1111" }}>Total : </span>{e.total}</li>
                                    <li className="list-group-item"><span style={{ color: "#CA1111" }}>DiscountedPrice : </span>{e.discountedPrice}</li>
                                    <li className="list-group-item"><button className='btn btn-danger' onClick={() => navigate(`/card/${e.id}`)} > View Products</button></li>
                                </ul>
                            </div>

                        </div>

                    ))}
                </div>
            </div>


        </div>
    )
}

export default Mycard
