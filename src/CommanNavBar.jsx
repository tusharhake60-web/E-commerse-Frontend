import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function CommanNavBar() {

    let navigate = useNavigate();

    let login = () => {
        navigate("/login");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img
                            src="https://t3.ftcdn.net/jpg/02/98/18/60/360_F_298186090_Rimyxol4jsYvYbQg1i6sttQ5N3oebXgt.jpg"
                            alt="product"
                            width="60"
                            height="60"
                            className="rounded-circle"
                        />
                        <span className="ms-2 fw-bold">Ecommerce</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/chome">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger mt-2 mt-lg-0 ms-lg-2" onClick={login}>
                                    Login / Register
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
