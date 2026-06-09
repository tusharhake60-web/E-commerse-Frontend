import React from 'react'
import { Link } from 'react-router-dom'

import BuserNavbar from './BuserNavbar'

export default function BussinessDashboard() {
    return (
        <div className='dashboard-page'>
            <BuserNavbar></BuserNavbar>

            <section className='dashboard-hero'>
                <div className='dashboard-hero-content'>
                    <div className='dashboard-eyebrow'>Business Hub</div>
                    <h1>Business Dashboard</h1>
                    <p>
                        Manage products, orders, and customer activity from one place so your store stays active and organized.
                    </p>
                    <div className='dashboard-actions'>
                        <Link to='/addproduct' className='dashboard-btn dashboard-btn-primary'>Add Product</Link>
                        <Link to='/viewproductbuser' className='dashboard-btn dashboard-btn-secondary'>View Inventory</Link>
                    </div>
                </div>

                <div className='dashboard-summary-grid'>
                    <div className='dashboard-summary-card'>
                        <h3>Today's Orders</h3>
                        <p>24 new orders are waiting for confirmation.</p>
                    </div>
                    <div className='dashboard-summary-card'>
                        <h3>Popular Items</h3>
                        <p>Your top-selling products are trending well this week.</p>
                    </div>
                    <div className='dashboard-summary-card'>
                        <h3>Customer Reach</h3>
                        <p>New customers are discovering your catalog every day.</p>
                    </div>
                </div>
            </section>

            <section className='dashboard-section'>
                <h2>What you can do next</h2>
                <div className='dashboard-card-grid'>
                    <div className='dashboard-card'>
                        <h3>List new products</h3>
                        <p>Add fresh offerings and keep your business catalog updated for shoppers.</p>
                        <Link to='/addproduct' className='dashboard-card-link'>Create a product</Link>
                    </div>
                    <div className='dashboard-card'>
                        <h3>Track customer orders</h3>
                        <p>Review active and completed purchases without leaving the dashboard.</p>
                        <Link to='/border' className='dashboard-card-link'>Open orders</Link>
                    </div>
                    <div className='dashboard-card'>
                        <h3>Manage your inventory</h3>
                        <p>Monitor available stock and keep your store ready for demand.</p>
                        <Link to='/viewproductbuser' className='dashboard-card-link'>View inventory</Link>
                    </div>
                    <div className='dashboard-card'>
                        <h3>Support your customers</h3>
                        <p>Stay responsive with quick actions and a clear overview of your business.</p>
                        <Link to='/service' className='dashboard-card-link'>See services</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
