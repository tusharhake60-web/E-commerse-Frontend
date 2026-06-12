import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import BuserNavbar from './BuserNavbar';
import './AddProduct.css'
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
        axios.post(`http://localhost:8080/addproduct`, p)
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
            <form className="product-card" onSubmit={addproduct}>

                <div className="form-header">
                    <h2>Add New Product</h2>
                    <p>Fill product details and upload image</p>
                </div>

                <div className="product-grid">

                    <div className="input-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            onChange={(e) => setpname(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Price</label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            onChange={(e) => setprice(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Stock</label>
                        <input
                            type="number"
                            placeholder="Available stock"
                            onChange={(e) => setstock(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Category</label>
                        <select onChange={(e) => setcatageroy(e.target.value)}>
                            <option>Select Category</option>
                            <option value="electronic">Electronics</option>
                            <option value="product">Products</option>
                        </select>
                    </div>

                </div>

                <div className="input-group">
                    <label>Product Information</label>
                    <textarea
                        rows="4"
                        placeholder="Write product description..."
                        onChange={(e) => setinfo(e.target.value)}
                    />
                </div>

                <div className="upload-section">

                    <div className="upload-box">
                        <label>Upload Product Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handalphoto}
                        />
                    </div>

                    <div className="preview-box">
                        <h5>Preview</h5>

                        <img
                            src={
                                photo ||
                                "https://via.placeholder.com/250x250?text=Product+Image"
                            }
                            alt="preview"
                        />
                    </div>

                </div>

                <button className="add-product-btn">
                    Add Product
                </button>

            </form>
        </div>
    )
}
