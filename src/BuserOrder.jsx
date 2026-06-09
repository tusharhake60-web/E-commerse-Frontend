import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BuserNavbar from './BuserNavbar';
export default function BuserOrder() {
    let [orders, setorders] = useState([]);


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userinfo"));

        axios.get(`https://e-commerce-backend-2-20tr.onrender.com/getordersbuser?email=${user.email}`)
            .then((response) => {
                console.log(response.data);
                setorders(response.data)
            })
            .catch((error) => {
                alert("error orderdetails")
            })
    }, [])


    return (
        <div>
            <BuserNavbar></BuserNavbar>
            <div className='container-fluid'>
                <div className='row mb-5 gy-2'>
                    {
                        orders.map((order) =>
                            <div className='col'>
                                <div class="card" style={{ "width": "15rem", }}>
                                    {/* <img src={order.image} class="card-img-top" alt="..."></img> */}
                                    <div class="card-body">
                                        <h5 class="card-title">{orders.pname}</h5>
                                        <p class="card-text">
                                            <p>Product Name:<strong>{order.pname}</strong></p>
                                            <p>Order Product price:<strong>{order.price}</strong></p>
                                            <p>Address :<strong>{order.Address}</strong></p>
                                            <p>PIN Code:<strong>{order.pincode}</strong></p>
                                            <p>Name:<strong>{order.name}</strong></p>
                                        </p>
                                        <p>
                                            <button className='btn btn-info'>Order Accept</button>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
