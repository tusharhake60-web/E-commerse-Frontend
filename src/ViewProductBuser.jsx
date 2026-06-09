import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BuserNavbar from './BuserNavbar';
export default function ViewProductBuser() {

    let [email, setemail] = useState("");
    let [product, setproduct] = useState([]);
    let [relode, setrelode] = useState(false);
    let [showmodal, setshowmodal] = useState(false);

    let [pname, setpname] = useState("");
    let [price, setprice] = useState(0);
    let [stock, setstock] = useState(0);
    let [catageroy, setcatageroy] = useState("");
    let [info, setinfo] = useState("");
    let [photo, setphoto] = useState("");
    let [pid, setpid] = useState(0);

    let handalphoto = (event) => {

        let file = event.target.files[0];
        let filepath = `./Asset/img/${file.name}`;
        console.log(filepath);
        setphoto(filepath);

    }


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userinfo"));
        setemail(user.email);
        axios.get(`https://e-commerce-backend-2-20tr.onrender.com/findpbyemail?email=${user.email}`)
            .then((response) => {
                setproduct(response.data);

            })
    }, [relode])

    let updateproduct = () => {

        let p = { pname, price, stock, catageroy, info, photo, email };
        axios.post(`https://e-commerce-backend-2-20tr.onrender.com/updateproduct?pid=${pid}`, p)
            .then((response) => {
                alert(response.data)
            })
            .catch((error) => {
                alert("update method error")
            })


    }
    let readytoupdate = (p) => {

        setshowmodal(true);
        setpname(p.pname);
        setcatageroy(p.catageroy);
        setinfo(p.info);
        setstock(p.stock);
        setphoto(p.photo);
        setprice(p.price);
        setemail(p.setemail);
        setpid(p.pid);

    }

    let deletep = (p) => {

        axios.delete(`https://e-commerce-backend-2-20tr.onrender.com/deleteproduct?pid=${p.pid}`)
            .then((response) => {
                alert(response.data);
                setrelode(!relode)
            })
            .catch((error) => {
                alert("delete product error")
            })
    }

    return (
        <div>
            <BuserNavbar></BuserNavbar>
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
                                        <div className='mt-auto d-flex gap-2 justify-content-center'>
                                            <button className='btn btn-danger' onClick={() => { deletep(p) }}>Delete</button>
                                            <button className='btn btn-warning' onClick={() => { readytoupdate(p) }}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {showmodal ? <div class="modal start d-block" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Update Product</h5>
                            <button type="button" class="btn-close" onClick={() => { setshowmodal(false) }} aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className='form-controle' onSubmit={updateproduct}>
                                <div className='row'>
                                    <div className='col mb-4'>
                                        <label>Product Name:</label><input type='text' onChange={(event) => { setpname(event.target.value) }} value={pname}></input>
                                    </div>


                                    <div className='col mb-4'>
                                        <label>Product Photo:</label><input type='file' accept="image/*" onChange={(event) => { handalphoto(event) }}></input>
                                    </div>


                                    <div className='col mb-4'>
                                        <label>Product Info:</label><input type='text' onChange={(event) => { setinfo(event.target.value) }} value={info} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col mb-4'>
                                        <label>Product Price : </label><input type='number' onChange={(event) => { setprice(event.target.value) }} value={price}></input>
                                    </div>
                                    <div className='col mb-4'>
                                        <label>Catageory :</label><select onChange={(event) => { setcatageroy(event.target.value) }} value={catageroy}>
                                            <option value="">Select Catsgeory</option>
                                            <option value="electronic">Electronics</option>
                                            <option value="product">Products</option>
                                        </select>
                                    </div>
                                    <div className='col mb-4'>
                                        <label>Stock :</label><input type='number' onChange={(event) => { setstock(event.target.value) }} value={stock}></input>
                                    </div>
                                    <div className='text-center mb-4'>

                                        <label className="form-label">Photo Preview</label><br></br>
                                        <img src={photo} width="250" alt="product"></img>

                                    </div>
                                    <div className='text-center'>
                                        <button className="btn btn-primary px-4">Update</button>
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
