import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import BuserNavbar from './BuserNavbar';
export default function AddProduct() {


    let [pname, setpname] = useState("");
    let [price, setprice] = useState(0);
    let [stock, setstock] = useState(0);
    let [catageroy, setcatageroy] = useState("");
    let [info, setinfo] = useState("");
    let [photo, setphoto] = useState("");
    let [email, setemail] = useState("");


    useEffect(() => {

        let user = JSON.parse(localStorage.getItem("userinfo"));
        setemail(user.email);

    }, [])
    let handalphoto = (event) => {

        let file = event.target.files[0];
        let filepath = `./Asset/img/${file.name}`;
        console.log(filepath);
        setphoto(filepath);

    }

    let addproduct = (event) => {
        event.preventDefault();
        let p = { pname, price, info, stock, photo, email, catageroy };
        axios.post(`https://e-commerce-backend-2-20tr.onrender.com/addproduct`, p)
            .then((response) => {
                alert(response.data)
            })
            .catch((error) => {
                alert("add product error")
            })



    }
    return (
        <div>
            <BuserNavbar></BuserNavbar>
            <form className='form-controle' onSubmit={addproduct}>
                <h1 className='text-center text-danger  mb-4'>Add Product</h1>
                <div className='row'>
                    <div className='col mb-4'>
                        <label>Product Name:</label><input type='text' onChange={(event) => { setpname(event.target.value) }}></input>
                    </div>


                    <div className='col mb-4'>
                        <label>Product Photo:</label><input type='file' accept="image/*" onChange={(event) => { handalphoto(event) }} ></input>
                    </div>


                    <div className='col mb-4'>
                        <label>Product Info:</label><input type='text' onChange={(event) => { setinfo(event.target.value) }}></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col mb-4'>
                        <label>Product Price : </label><input type='number' onChange={(event) => { setprice(event.target.value) }}></input>
                    </div>
                    <div className='col mb-4'>
                        <label>Catageory :</label><select onChange={(event) => { setcatageroy(event.target.value) }}>
                            <option value="">Select Catsgeory</option>
                            <option value="electronic">Electronics</option>
                            <option value="product">Products</option>
                        </select>
                    </div>
                    <div className='col mb-4'>
                        <label>Stock :</label><input type='number' onChange={(event) => { setstock(event.target.value) }}></input>
                    </div>
                    <div className='text-center mb-4'>

                        <label className="form-label">Photo Preview</label><br></br>
                        <img src={photo} alt="product" width="250"></img>

                    </div>
                    <div className='text-center'>

                        <button className="btn btn-primary px-4">Add Product</button>


                    </div>

                </div>






            </form>
        </div>
    )
}
