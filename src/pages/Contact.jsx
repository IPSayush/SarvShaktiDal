import React from 'react'
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from 'react';
import Heading from "../components/Heading.jsx";
import FormContact from "../components/FormContact.jsx";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return (
    <>
      <div className="w-full">
        {/* Hero Section with Background */}
        <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/blank.webp')" }}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              PHOTO GALLERY
            </h1>
          </div>
        </section>

        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Address Card */}
              <div className="bg-white border-2 border-red-500 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <MapPin className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ragi. D60, Dev nagar, murlipura, jaipur.<br />
                  Rajasthan
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  Office - 5-6, new colony, path no-7, sikar<br />
                  road, Jaipur, Rajasthan
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-white border-2 border-red-500 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <Phone className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Phone Number</h3>
                <p className="text-gray-600 text-lg">+91 9024222255</p>
              </div>

              {/* Email Card */}
              <div className="bg-white border-2 border-red-500 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <Mail className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Email Address</h3>
                <p className="text-gray-600 text-lg break-all">SarvaShaktidal@gmail.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">CONTACT FORM</h2>
              <div className="w-20 h-1 bg-red-600 mb-8"></div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-red-600 text-white font-bold px-8 py-3 rounded-md hover:bg-red-700 transition-colors duration-300 uppercase tracking-wide"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-12">
              <div className="bg-orange-600 py-4 px-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  मानचित्र पर देखें
                </h3>
              </div>

              {/* Google Map Embed */}
              <div className="relative w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.167346402159!2d75.76022947454426!3d26.961599376617993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3a2fc7db6f9%3A0x77e18ad28e4b0ab9!2sSarva%20Shakti%20Dal!5e0!3m2!1sen!2sin!4v1765822661827!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Heading />
      <FormContact />
    </>

  )
}
