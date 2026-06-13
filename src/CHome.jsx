import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CommanNavBar from "./CommanNavBar";
import "./Home.css";

export default function CHome() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/getallproduct")
            .then((response) => {
                setProducts(response.data || []);
            })
            .catch(() => {
                setProducts([]);
            });
    }, []);

    return (
        <div>
            <CommanNavBar />

            <div className="home-container">

                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-copy">
                        <p className="eyebrow">
                            Premium Shopping, Delivered Fast
                        </p>

                        <h1>
                            Discover the Best Deals on Electronics,
                            Fashion & Daily Essentials
                        </h1>

                        <p className="hero-description">
                            MyShop brings you curated products from trusted
                            brands with fast delivery, secure payments and
                            easy returns. Shop smarter and save more every day.
                        </p>

                        <div className="hero-buttons">
                            <button
                                className="shop-btn"
                                onClick={() => navigate("/login")}
                            >
                                Shop Now
                            </button>

                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="category-section">
                    <h2>Shop By Categories</h2>

                    <div className="category-container">

                        <div className="category-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Electronics" />
                            <h3>Electronics</h3>
                        </div>

                        <div
                            className="category-card"

                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
                                alt="Fashion"
                            />
                            <h3>Fashion</h3>
                        </div>

                        <div
                            className="category-card"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                                alt="Food"
                            />
                            <h3>Food</h3>
                        </div>

                    </div>
                </section>

                {/* Featured Products */}
                <section className="product-section">
                    <h2>Featured Products</h2>

                    <div className="product-container">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div
                                    key={product.id || product.pname}
                                    className="home-product-card"
                                    onClick={() => navigate("/getallproduct")}
                                >
                                    <img
                                        src={product.photo}
                                        alt={product.pname}
                                    />

                                    <h3>{product.pname}</h3>
                                    <p>{product.info}</p>

                                    <div className="price-box">
                                        <span className="new-price">₹{product.price}</span>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate("/login");
                                        }}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No products available right now.</p>
                        )}
                    </div>
                </section>


                {/* Why Shop With Us */}
                <section className="features-section">
                    <h2>Why Shop With Us</h2>

                    <div className="feature-grid">

                        <div className="feature-card">
                            <h3>🚚 Fast Delivery</h3>
                            <p>
                                Get your order delivered quickly through our
                                trusted logistics network.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>💰 Best Prices</h3>
                            <p>
                                Enjoy daily deals and competitive prices on
                                top brands.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>🔒 Secure Checkout</h3>
                            <p>
                                Shop safely with encrypted payments and secure
                                transactions.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>🔄 Easy Returns</h3>
                            <p>
                                Hassle-free returns and customer-friendly
                                support.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Reviews */}
                <section className="review-section">
                    <h2>Customer Reviews</h2>

                    <div className="review-grid">

                        <div className="review-card">
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <p>
                                Amazing shopping experience and very fast
                                delivery.
                            </p>
                            <h4>- Rahul Sharma</h4>
                        </div>

                        <div className="review-card">
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <p>
                                Best prices compared to other e-commerce
                                websites.
                            </p>
                            <h4>- Priya Patil</h4>
                        </div>

                        <div className="review-card">
                            <h3>⭐⭐⭐⭐⭐</h3>
                            <p>
                                Great customer support and easy returns.
                            </p>
                            <h4>- Amit Kumar</h4>
                        </div>

                    </div>
                </section>

                {/* Newsletter */}
                <section className="newsletter-section">
                    <h2>Stay Updated</h2>

                    <p>
                        Subscribe to receive the latest offers,
                        discounts and product launches.
                    </p>

                    <div className="newsletter-box">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                        />

                        <button>Subscribe</button>
                    </div>
                </section>

            </div>
        </div>
    );
}