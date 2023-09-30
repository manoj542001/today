import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from './json'

const Myform = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const singleCard = data.carts[0].products.find((e) => (e.id.toString() === id))

    return (

        <div>
            <h1 className='text-danger'>{singleCard.title} </h1>
            <div className="p-3 d-flex justify-content-center mb-5">
                <div className="card bg-warning" style={{
                    width: '18rem',

                }} >
                    <div className="card-body  ">
                        <h5 className="card-title ">{singleCard.title}</h5>

                    </div>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item"><span style={{ color: "#CA1111" }}>Price : </span><span class="badge bg-warning text-dark">{singleCard.price}</span></li>
                        <li className="list-group-item"> <span style={{ color: "#CA1111" }}>Quantity : </span>{singleCard.quantity}</li>
                        <li className="list-group-item"><span style={{ color: "#CA1111" }}>Total : </span>{singleCard.total}</li>
                        <li className="list-group-item"><span style={{ color: "#CA1111" }}>DiscountedPrice : </span>{singleCard.discountedPrice}</li>

                    </ul>
                </div>

            </div>

            <button onClick={() => navigate(`/cards`)} className='btn btn-danger mb-5'>back</button>
        </div>
    )
}

export default Myform
