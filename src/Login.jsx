import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CommanNavBar from './CommanNavBar';
import './Login.css';
export default function Login() {

    let nevigate = useNavigate();

    let [register, setregister] = useState(false);
    let [fname, setfname] = useState("");
    let [lname, setlname] = useState("");
    let [password, setpassword] = useState("");
    let [cpassword, setcpassword] = useState("");
    let [email, setemail] = useState("");
    let [utype, setutype] = useState("");
    let [otp, setotp] = useState(0);
    let [showOtp, setShowOtp] = useState(false);
    // let [otpVerified, setOtpVerified] = useState(false);

    let userregister = (event) => {
        event.preventDefault();

        axios.post(`https://e-commerce-backend-k0tt.onrender.com/send?email=${email}`)
            .then((response) => {
                alert(response.data);
                if (response.data === "OTP Sent Successfully") {
                    setShowOtp(true);

                }
            })
            .catch((error) => {
                alert("OTP sending failed")
            })




    }

    let verifiy = () => {
        let u = { fname, lname, email, password, cpassword, utype }
        axios.post(`https://e-commerce-backend-k0tt.onrender.com/verify?email=${email}&otp=${otp}`)
            .then((response) => {
                alert(response.data)
                //register user only if otp is verified successfully
                if (response.data === "OTP Verified Successfully") {
                    axios.post(`https://e-commerce-backend-k0tt.onrender.com/register`, u)
                        .then((response) => {
                            alert(response.data);
                            setregister(false);
                        })
                        .catch((error) => {
                            alert("server error register")
                        })
                }
            })
            .catch((error) => {
                alert("OTP verification failed")
            })


    }

    let login = (event) => {
        event.preventDefault();
        let user = { email, password };

        axios.post('https://e-commerce-backend-k0tt.onrender.com/login', user)
            .then((response) => {
                if (response.data) {
                    let user = response.data;
                    alert(user.fname);
                    console.log(response.data);
                    localStorage.setItem("userinfo", JSON.stringify(response.data))


                    if (user.utype.toLowerCase() === "bussiness user") {

                        nevigate("/bussinessdashboard");
                    }
                    else {
                        nevigate("/userdashboard");

                    }
                }


            })
            .catch(() => { })
    }



    return (
        <div className='bg'  >
            <CommanNavBar></CommanNavBar>

            {register ?

                <form className='d-flex flex-column align-items-center gap-3 form-control' onSubmit={login}>
                    <h1 style={{ textAlign: "center" }}>User Login</h1>
                    <div className='row' >
                        <div className='col'>
                            <label>Email :</label><input type="text" onChange={(event) => { setemail(event.target.value) }}></input><br></br>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label>Password :</label><input type="password" onChange={(event) => { setpassword(event.target.value) }}></input><br></br>
                        </div>

                    </div>
                    <div className='row w-30'>
                        <div className='col'>
                            <button type='submit' className='btn btn-info'>Login</button>
                        </div>
                        <div className='col'>
                            <button type='button' className='btn btn-warning' onClick={() => { setregister(false) }}>Register</button>
                        </div>

                    </div>




                </form> :
                <div  >


                    <form className='d-flex flex-column align-items-center gap-3 form-control' onSubmit={userregister} >
                        <h1 style={{ textAlign: "center" }}>User Registation</h1>
                        <div className='row w-100'>
                            <div className='col'>
                                <label className='form-label'>First Name:</label><input type='text' onChange={(e) => { setfname(e.target.value) }}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label'>Last Name :</label><input type='text' onChange={(e) => { setlname(e.target.value) }}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label'>Email :</label><input type='email' onChange={(e) => { setemail(e.target.value) }}></input>
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col'>
                                <label className='form-label'>Password :</label><input type='password' onChange={(e) => { setpassword(e.target.value) }}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label'>C Password : </label><input type='password' onChange={(e) => { setcpassword(e.target.value) }}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label'>User Type :</label><select onChange={(e) => { setutype(e.target.value) }}>
                                    <option value="">Select Option</option>
                                    <option value="bussiness user">Bussiness User</option>
                                    <option value="user">User</option>
                                </select>
                            </div>


                        </div>
                        <div className='row w-70'>
                            <div className='col'>
                                <button type='submit' className='btn btn-info '>Register</button>
                            </div>
                            <div className='col'>
                                <button type='button' className='btn btn-warning' onClick={() => { setregister(true) }}> login</button>
                            </div>
                        </div>


                    </form>
                    {
                        showOtp ? (
                            <div className='otp-verification mt-4'>
                                <div className='otp-field'>
                                    <label className='form-label'>Enter OTP</label>
                                    <input
                                        type='number'
                                        value={otp}
                                        className='form-control otp-input'
                                        onChange={(e) => setotp(e.target.value)}
                                        placeholder='Enter code'
                                    />
                                </div>
                                <button type='button' className='btn btn-primary otp-verify-btn' onClick={verifiy}>
                                    Verify OTP
                                </button>
                            </div>
                        ) : null
                    }

                </div>


            }
        </div>
    )
}
