import React from 'react'
import { Link } from 'react-router-dom'
import CommanNavBar from './CommanNavBar'
export default function CHome() {
    return (
        <div>
            <CommanNavBar></CommanNavBar>
            <div className="home-container">

                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-copy">
                        <p className="eyebrow">Premium shopping, delivered fast</p>
                        <h1>Discover the best deals on electronics, fashion and daily essentials</h1>
                        <p className="hero-description">
                            MyShop brings you curated products from trusted brands with fast delivery, secure payment and easy returns.
                            Explore bestselling items, special offers and a seamless shopping experience built for every shopper.
                        </p>

                    </div>
                </section>

                {/* Categories */}
                <section className="category-section">

                    <h2>Shop By Categories</h2>

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

                </section>

                {/* Featured Products */}
                <section className="product-section">

                    <h2>Featured Products</h2>

                    <div className="product-container">

                        <div className="home-product-card">
                            <img
                                src="https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
                                alt="Wireless Headphone"
                            />
                            <h3>Wireless Headphones</h3>
                            <p>₹1999</p>
                        </div>

                        <div className="home-product-card">
                            <img
                                src="https://m.media-amazon.com/images/I/71Swqqe7XAL._SX679_.jpg"
                                alt="Smart Watch"
                            />
                            <h3>Smart Watch</h3>
                            <p>₹2999</p>
                        </div>

                        <div className="home-product-card">
                            <img
                                src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
                                alt="Running Shoes"
                            />
                            <h3>Running Shoes</h3>
                            <p>₹1499</p>
                        </div>

                    </div>

                </section>

                <section className="features-section">
                    <h2>Why Shop With Us</h2>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <h3>Fast Delivery</h3>
                            <p>Get your order delivered on time with our trusted courier partners.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Best Prices</h3>
                            <p>Shop top brands and latest products at competitive prices every day.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Secure Checkout</h3>
                            <p>Protect your payments with secure encryption and multiple payment options.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Easy Returns</h3>
                            <p>Hassle-free returns and support for a smoother shopping experience.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
