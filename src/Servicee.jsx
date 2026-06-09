import React from 'react'
import BuserNavbar from './BuserNavbar';
import UserNavbar from './UserNavBar';


export default function Servicee() {


    let u = JSON.parse(localStorage.getItem("userinfo"));

    const services = [
        {
            title: "Fast Delivery",
            description: "Get your products delivered quickly and safely to your doorstep.",
            icon: "🚚",
        },
        {
            title: "Secure Payment",
            description: "Multiple secure payment methods with complete protection.",
            icon: "💳",
        },
        {
            title: "24/7 Support",
            description: "Our support team is available anytime to help customers.",
            icon: "📞",
        },
        {
            title: "Easy Returns",
            description: "Hassle-free return and refund process for all products.",
            icon: "🔄",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {u.utype === "bussiness user" ? <BuserNavbar></BuserNavbar> : <UserNavbar></UserNavbar>}
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20 px-6 text-center">
                <h1 className="text-5xl font-bold mb-4">Our E-Commerce Services</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    We provide modern online shopping solutions with secure payments,
                    fast delivery, and excellent customer support.
                </p>
            </section>

            {/* Services Section */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    What We Offer
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                            alt="Shopping"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Why Choose Our Platform?
                        </h2>
                        <ul className="space-y-4 text-lg">
                            <li>✅ User-friendly shopping experience</li>
                            <li>✅ High-quality products</li>
                            <li>✅ Secure transactions</li>
                            <li>✅ Fast order tracking system</li>
                            <li>✅ Mobile responsive design</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-600 text-white py-16 px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Need Help?</h2>
                <p className="mb-6 text-lg">
                    Contact our support team for assistance and business inquiries.
                </p>

                <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
                    Contact Us
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-6 text-center">
                <p>© 2026 E-Shop Services. All rights reserved.</p>
            </footer>
        </div>
    );
}
