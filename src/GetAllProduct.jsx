import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserNavBar from './UserNavBar'
export default function GetAllProduct() {

    let [product, setproduct] = useState([]);
    let [showmodal, setshowmodal] = useState(false);
    let [name, setname] = useState("");
    let [price, setprice] = useState(0);
    let [uemail, setuemail] = useState("");
    let [bemail, setbemail] = useState("");
    let [Address, setAddress] = useState("");
    let [pincode, setpincode] = useState(0);
    let [mobile, setmobile] = useState(0);
    let [pname, setpname] = useState("");
    let [image, setimage] = useState("");

    useEffect(() => {
        axios.get("https://e-commerce-backend-2-20tr.onrender.com/getallproduct")
            .then((response) => {
                setproduct(response.data)
            })
            .catch((error) => {
                alert("product showe error")
            })
    }, [])



    let order = (p) => {
        setshowmodal(true)
        let user = JSON.parse(localStorage.getItem("userinfo"));

        setbemail(p.email);
        setuemail(user.email);
        setprice(p.price);
        setpname(p.pname);
        setimage(p.photo);


    }

    let corder = (event) => {
        event.preventDefault();

        let order = { name, mobile, bemail, uemail, Address, pincode, price, pname, image };
        axios.post("https://e-commerce-backend-2-20tr.onrender.com/addorder", order)
            .then((response) => {
                alert(response.data);
            })
            .catch((error) => {
                alert("order server error")
            })
    }
    return (
        <div>
            <UserNavBar></UserNavBar>
            <div className='container-fluid'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5'>
                    {
                        product.map((p) =>
                            <div className='col'>
                                <div className="card product-card h-100">
                                    <img src={p.photo} className="card-img-top" alt={p.pname}></img>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{p.pname}</h5>
                                        <div className="card-text mb-3">
                                            <p>Product price: <strong>{p.price}</strong></p>
                                            <p>Product Info: <strong>{p.info}</strong></p>
                                            <p>Category: <strong>{p.catageroy}</strong></p>
                                            <p>Stock: <strong>{p.stock}</strong></p>
                                        </div>
                                        <div className='mt-auto d-flex justify-content-center'>
                                            <button className='btn btn-warning' onClick={() => { order(p) }}>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            {/* Order model */}


            {showmodal ? <div class="modal start d-block" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Order Product</h5>
                            <button type="button" class="btn-close" onClick={() => { setshowmodal(false) }} aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className='form-controle' onSubmit={corder}>
                                <div className='row'>
                                    <div className='col mb-4'>
                                        <label>Name :</label><input type='text' onChange={(event) => { setname(event.target.value) }}></input>
                                    </div>
                                    <div className='col mb-4'>
                                        <label>PIN Code :</label><input type='number' onChange={(event) => { setpincode(event.target.value) }} />
                                    </div>

                                    <div className='col mb-4'>
                                        <label>Address :</label><input type='test' onChange={(event) => { setAddress(event.target.value) }} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col mb-4'>
                                        <label>Product Price : </label><input type='number' onChange={(event) => { setprice(event.target.value) }} value={price}></input>
                                    </div>

                                    <div className='col mb-4'>
                                        <label>Mobile No:</label><input type='number' onChange={(event) => { setmobile(event.target.value) }}></input>
                                    </div>

                                    <div className='text-center'>
                                        <button className="btn btn-primary px-4">Order</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> : null}

        </div>


    )
}
