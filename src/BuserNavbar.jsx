import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Login.css';
export default function BuserNavbar() {

    let nevigate = useNavigate();

    let logout = () => {
        localStorage.removeItem("userinfo");
        localStorage.removeItem("isloggedin");
        nevigate("/");


    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-info bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src="https://t3.ftcdn.net/jpg/02/98/18/60/360_F_298186090_Rimyxol4jsYvYbQg1i6sttQ5N3oebXgt.jpg" alt="product" width="60" height="60" className="rounded-circle"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/addproduct">Add Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/viewproductbuser">View Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/service">Service</Link>
                            </li>
                            <li>
                                <Link className='nav-link' to="/border">Orders</Link>
                            </li>
                            <li class="nav-item">
                                <button className='btn btn-danger mt-1 ms-2' onClick={logout}>logout</button>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
