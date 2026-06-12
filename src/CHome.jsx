import React from "react";
import { useNavigate } from "react-router-dom";
import CommanNavBar from "./CommanNavBar";

export default function CHome() {
    const navigate = useNavigate();

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
                                onClick={() => navigate("/products")}
                            >
                                Shop Now
                            </button>

                            <button
                                className="deal-btn"
                                onClick={() => navigate("/deals")}
                            >
                                Today's Deals
                            </button>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="category-section">
                    <h2>Shop By Categories</h2>

                    <div className="category-container">

                        <div
                            className="category-card"
                            onClick={() => navigate("/category/electronics")}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                                alt="Electronics"
                            />
                            <h3>Electronics</h3>
                        </div>

                        <div
                            className="category-card"
                            onClick={() => navigate("/category/fashion")}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
                                alt="Fashion"
                            />
                            <h3>Fashion</h3>
                        </div>

                        <div
                            className="category-card"
                            onClick={() => navigate("/category/food")}
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

                        <div
                            className="home-product-card"
                            onClick={() => navigate("/product/1")}
                        >
                            <span className="discount-badge">20% OFF</span>

                            <img
                                src="https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
                                alt="Wireless Headphones"
                            />

                            <h3>Wireless Headphones</h3>

                            <div className="price-box">
                                <span className="old-price">₹2499</span>
                                <span className="new-price">₹1999</span>
                            </div>

                            <button>Add To Cart</button>
                        </div>

                        <div
                            className="home-product-card"
                            onClick={() => navigate("/product/2")}
                        >
                            <span className="discount-badge">15% OFF</span>

                            <img
                                src="https://m.media-amazon.com/images/I/71Swqqe7XAL._SX679_.jpg"
                                alt="Smart Watch"
                            />

                            <h3>Smart Watch</h3>

                            <div className="price-box">
                                <span className="old-price">₹3499</span>
                                <span className="new-price">₹2999</span>
                            </div>

                            <button>Add To Cart</button>
                        </div>

                        <div
                            className="home-product-card"
                            onClick={() => navigate("/product/3")}
                        >
                            <span className="discount-badge">25% OFF</span>

                            <img
                                src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
                                alt="Running Shoes"
                            />

                            <h3>Running Shoes</h3>

                            <div className="price-box">
                                <span className="old-price">₹1999</span>
                                <span className="new-price">₹1499</span>
                            </div>

                            <button>Add To Cart</button>
                        </div>

                    </div>
                </section>

                {/* Trending Products */}
                <section className="product-section">
                    <h2>Trending Now 🔥</h2>

                    <div className="product-container">

                        <div
                            className="home-product-card"
                            onClick={() => navigate("/product/4")}
                        >
                            <img
                                src="https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg"
                                alt="Smartphone"
                            />

                            <h3>Smartphone</h3>
                            <p>₹24,999</p>
                        </div>

                        <div
                            className="home-product-card"
                            onClick={() => navigate("/product/5")}
                        >
                            <img
                                src="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
                                alt="Laptop"
                            />

                            <h3>Gaming Laptop</h3>
                            <p>₹59,999</p>
                        </div>

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