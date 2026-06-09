import React from 'react';

import BuserNavbar from './BuserNavbar';
import UserNavbar from './UserNavBar';






function Home() {

    let u = JSON.parse(localStorage.getItem("userinfo"));

    return (
        <div style={{ backgroundColor: "#FFB6C1" }} >


            {u.utype === "bussiness user" ? <BuserNavbar></BuserNavbar> : <UserNavbar></UserNavbar>}

            <div className="category-container">

                <div className="category-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                        alt="Electronics"
                    />
                    <h3>Electronics</h3>
                </div>

                <div className="category-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
                        alt="Fashion"
                    />
                    <h3>Fashion</h3>
                </div>

                <div className="category-card">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                        alt="Food"
                    />
                    <h3>Food</h3>
                </div>

            </div>


        </div>
    );
}



export default Home;
