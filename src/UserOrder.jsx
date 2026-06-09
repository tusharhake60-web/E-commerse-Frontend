import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import UserNavBar from './UserNavBar'
export default function UserOrder() {

    let [orders, setorders] = useState([]);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userinfo"));
        axios.get(`https://e-commerce-backend-2-20tr.onrender.com/getordersuser?email=${user.email}`)
            .then((response) => {
                setorders(response.data);
            })
            .catch((error) => {
                alert("error orderdetails");
            })
    })
    let cancleorder = (oid) => {

        axios.delete(`https://e-commerce-backend-2-20tr.onrender.com/cancleorder?oid=${oid}`)
            .then((response) => {
                alert(response.data);
            })
            .catch((error) => {
                alert("order cancle error");
            })
    }
    return (
        <div>
            <UserNavBar></UserNavBar>
            <div className='container-fluid'>
                <div className='row mb-5 gy-2'>
                    {
                        orders.map((order) =>
                            <div className='col'>
                                <div class="card" style={{ "width": "15rem", }}>
                                    {/* <img src={order.image} class="card-img-top" alt="..."></img> */}
                                    <div class="card-body">
                                        <h5 class="card-title">{order.pname}</h5>
                                        <p class="card-text">
                                            <p>Product Name:<strong>{order.pname}</strong></p>
                                            <p>Order Product price:<strong>{order.price}</strong></p>
                                            <p>Address :<strong>{order.Address}</strong></p>
                                            <p>PIN Code:<strong>{order.pincode}</strong></p>
                                            <p>Name:<strong>{order.name}</strong></p>
                                        </p>
                                        <p>
                                            <button className='btn btn-danger' onClick={() => cancleorder(order.oid)}>Order Cancle</button>
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
