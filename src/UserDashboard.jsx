import React from 'react'
import { Link } from 'react-router-dom'
import UserNavBar from './UserNavBar'

export default function UserDashboard() {
    const user = JSON.parse(localStorage.getItem('userinfo')) || {}

    return (
        <div className="dashboard-page">
            <UserNavBar />
            <div className="dashboard-hero">
                <div className="dashboard-hero-content">
                    <p className="dashboard-eyebrow">Your account</p>
                    <h1>Welcome back, {user.fname || 'Shopper'}!</h1>
                    <p>
                        Manage orders, track your shopping activity, and explore recommended products in one place.
                        Enjoy a faster, personalized shopping experience.
                    </p>
                    <div className="dashboard-actions">
                        <Link to="/getallproduct" className="dashboard-btn dashboard-btn-primary">Browse Products</Link>
                        <Link to="/userorder" className="dashboard-btn dashboard-btn-secondary">My Orders</Link>
                    </div>
                </div>
                <div className="dashboard-summary-grid">
                    <div className="dashboard-summary-card">
                        <h3>Orders</h3>
                        <p>Track all placed orders and delivery status.</p>
                    </div>
                    <div className="dashboard-summary-card">
                        <h3>Wishlist</h3>
                        <p>Save favorites and return to them later.</p>
                    </div>
                    <div className="dashboard-summary-card">
                        <h3>Support</h3>
                        <p>Get help with returns, refunds, or product questions.</p>
                    </div>
                </div>
            </div>

            <section className="dashboard-section">
                <h2>Dashboard Quick Links</h2>
                <div className="dashboard-card-grid">
                    <div className="dashboard-card">
                        <h3>Order History</h3>
                        <p>View the latest orders and shipment tracking in a single view.</p>
                        <Link to="/userorder" className="dashboard-card-link">View Orders</Link>
                    </div>
                    <div className="dashboard-card">
                        <h3>Browse Catalog</h3>
                        <p>Explore new arrivals across electronics, fashion, and home essentials.</p>
                        <Link to="/getallproduct" className="dashboard-card-link">Shop Now</Link>
                    </div>
                    <div className="dashboard-card">
                        <h3>My Profile</h3>
                        <p>Update your account details and preferences.</p>
                        <Link to="/login" className="dashboard-card-link">Manage Profile</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
