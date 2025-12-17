import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, MessageCircle, Send } from 'lucide-react';

export default function FooterSection() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            alert(`Subscribed with email: ${email}`);
            setEmail('');
        }

    };

    const recentPosts = [
        'Privacy Policy',
        'SARVASHAKTI DAL - SARVASHAKTI DAL SE JUDDE',
        'SARVASHAKTI DAL- SHAKTI SAMAGAM'
    ];

    return (
        <div className="w-full" id='footer'>
            {/* Main Footer Section */}
            <div className="relative background-main-gradient py-12 px-6 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                            SARVASHAKTI DAL -NEWS LATER
                        </h3>
                        <div className="h-1 w-12 bg-red-600 mb-5"></div>
                        <p className="text-gray-700 mb-6">SARVASHAKTI DAL</p>

                        <div className="flex shadow-md">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-4 py-2.5 text-sm border-none focus:outline-none focus:ring-0 bg-white"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-red-600 hover:bg-red-700 text-white px-5 transition-colors duration-200"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                            SARVASHAKTI DAL -RECENT POST
                        </h3>
                        <div className="h-1 w-12 bg-red-600 mb-5"></div>

                        <ul className="space-y-3">
                            {recentPosts.map((post, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:text-red-600 transition-colors duration-200 text-sm"
                                    >
                                        {post}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sarvashakti Dal Section with Image */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                            SARVASHAKTI DAL
                        </h3>
                        <div className="h-1 w-12 bg-red-600 mb-5"></div>

                        {/* Placeholder Image */}
                        <div className="bg-white border-4 border-[#e7000b] inline-block shadow-md">
                            <img
                                src="./blank.webp"
                                alt="Sarvashakti Dal"
                                className="w-40 h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Address Section */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                            SARVASHAKTI DAL ADDRESS
                        </h3>
                        <div className="h-1 w-12 bg-red-600 mb-5"></div>

                        <div className="space-y-3 text-gray-800 text-sm">
                            <p className="flex items-start">
                                <span className="mr-2 mt-0.5">📍</span>
                                <span>Ragi, D60, Dev nagar, murlipura, jaipur, Rajasthan</span>
                            </p>
                            <p className="ml-6">Office - 5-6, new colony, path no-7, sikar road, Jaipur, Rajasthan</p>
                            <p className="flex items-center">
                                <span className="mr-2">📞</span>
                                <span>(010) 1234 4321</span>
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">✉️</span>
                                <span>SarvaShaktidal@Gmail.Com</span>
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex space-x-2.5 pt-4">
                                <a
                                    href="#"
                                    className="bg-red-600 hover:bg-red-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" fill="white" />
                                </a>
                                <a
                                    href="#"
                                    className="bg-red-600 hover:bg-red-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-4 h-4" fill="white" />
                                </a>
                                <a
                                    href="#"
                                    className="bg-red-600 hover:bg-red-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                                    aria-label="Google Plus"
                                >
                                    <span className="text-xs font-bold">G+</span>
                                </a>
                                <a
                                    href="#"
                                    className="bg-red-600 hover:bg-red-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="bg-red-600 hover:bg-red-700 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                                    aria-label="WhatsApp"
                                >
                                    <MessageCircle className="w-4 h-4" fill="white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-gray-900 text-center py-5 px-4">
                <p className="text-gray-300 text-sm">
                    Copyright © 2019 <span className="text-red-500 font-semibold">SarvaShakti Dal</span>.All Rights Reserved.
                </p>
            </div>
        </div>
    );
}