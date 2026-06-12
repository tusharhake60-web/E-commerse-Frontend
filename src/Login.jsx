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

    let [accountHolderName, setAccountHolderName] = useState("");
    let [accountNumber, setAccountNumber] = useState("");
    let [ifscCode, setIfscCode] = useState("");
    let [bankName, setBankName] = useState("");

    let userregister = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:8080/send?email=${email}`)
            .then((response) => {
                alert(response.data);
                if (response.data === "OTP Sent Successfully") {
                    setShowOtp(true);
                }
            })
            .catch(() => {
                alert("OTP sending failed")
            })
    }

    let verifiy = () => {
        let u = { fname, lname, email, password, cpassword, utype, accountHolderName, accountNumber, ifscCode, bankName }
        axios.post(`http://localhost:8080/verify?email=${email}&otp=${otp}`)
            .then((response) => {
                alert(response.data)
                if (response.data === "OTP Verified Successfully") {
                    axios.post(`http://localhost:8080/register`, u)
                        .then((response) => {
                            alert(response.data);
                            setregister(false);
                        })
                        .catch(() => {
                            alert("server error register")
                        })
                }
            })
            .catch(() => {
                alert("OTP verification failed")
            })
    }

    let login = (event) => {
        event.preventDefault();
        let user = { email, password };

        axios.post('http://localhost:8080/login', user)
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
        <div className='auth-page'>
            <CommanNavBar></CommanNavBar>

            <div className='auth-shell'>
                <div className='auth-hero'>
                    <span className='hero-badge'>Fresh Commerce</span>
                    <h1>Welcome to a smoother shopping experience.</h1>
                    <p>Create an account or sign in to explore products, track orders, and manage your business with ease.</p>
                    <ul className='hero-points'>
                        <li>Secure and fast onboarding</li>
                        <li>Personalized dashboards</li>
                        <li>Reliable order and payment flow</li>
                    </ul>
                </div>

                <div className='auth-card'>
                    <div className='auth-tabs'>
                        <button type='button' className={`auth-tab ${!register ? 'active' : ''}`} onClick={() => setregister(false)}>Create Account</button>
                        <button type='button' className={`auth-tab ${register ? 'active' : ''}`} onClick={() => setregister(true)}>Login</button>
                    </div>

                    {register ? (
                        <form className='auth-form' onSubmit={login}>
                            <h2>Welcome back</h2>
                            <p className='auth-subtitle'>Sign in to continue to your dashboard.</p>

                            <label>Email</label>
                            <input type='email' placeholder='Enter your email' onChange={(event) => { setemail(event.target.value) }}></input>

                            <label>Password</label>
                            <input type='password' placeholder='Enter your password' onChange={(event) => { setpassword(event.target.value) }}></input>

                            <button type='submit' className='auth-btn auth-btn-primary'>Login</button>
                        </form>
                    ) : (
                        <div>
                            <form className='auth-form' onSubmit={userregister} >
                                <h2>Create your account</h2>
                                <p className='auth-subtitle'>Join our marketplace and get started in minutes.</p>

                                <div className='form-grid'>
                                    <div>
                                        <label>First Name</label>
                                        <input type='text' placeholder='First name' onChange={(e) => { setfname(e.target.value) }}></input>
                                    </div>
                                    <div>
                                        <label>Last Name</label>
                                        <input type='text' placeholder='Last name' onChange={(e) => { setlname(e.target.value) }}></input>
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <input type='email' placeholder='Email address' onChange={(e) => { setemail(e.target.value) }}></input>
                                    </div>
                                    <div>
                                        <label>User Type</label>
                                        <select onChange={(e) => { setutype(e.target.value) }}>
                                            <option value=''>Select Option</option>
                                            <option value='bussiness user'>Bussiness User</option>
                                            <option value='user'>User</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type='password' placeholder='Password' onChange={(e) => { setpassword(e.target.value) }}></input>
                                    </div>
                                    <div>
                                        <label>Confirm Password</label>
                                        <input type='password' placeholder='Confirm password' onChange={(e) => { setcpassword(e.target.value) }}></input>
                                    </div>
                                </div>

                                {
                                    utype === "bussiness user" && (
                                        <div className='bank-grid'>
                                            <div>
                                                <label>Account Holder Name</label>
                                                <input type='text' placeholder='Account holder name' onChange={(e) => setAccountHolderName(e.target.value)} />
                                            </div>

                                            <div>
                                                <label>Account Number</label>
                                                <input type='text' placeholder='Account number' onChange={(e) => setAccountNumber(e.target.value)} />
                                            </div>

                                            <div>
                                                <label>IFSC Code</label>
                                                <input type='text' placeholder='IFSC code' onChange={(e) => setIfscCode(e.target.value)} />
                                            </div>

                                            <div>
                                                <label>Bank Name</label>
                                                <input type='text' placeholder='Bank name' onChange={(e) => setBankName(e.target.value)} />
                                            </div>
                                        </div>
                                    )
                                }

                                <button type='submit' className='auth-btn auth-btn-primary'>Register</button>
                            </form>

                            {
                                showOtp ? (
                                    <div className='otp-verification'>
                                        <label>Enter OTP</label>
                                        <input
                                            type='number'
                                            value={otp}
                                            className='otp-input'
                                            onChange={(e) => setotp(e.target.value)}
                                            placeholder='Enter code'
                                        />
                                        <button type='button' className='auth-btn auth-btn-secondary' onClick={verifiy}>
                                            Verify OTP
                                        </button>
                                    </div>
                                ) : null
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
