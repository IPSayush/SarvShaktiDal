import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Users, Briefcase, Calendar, FileText } from 'lucide-react';
import Heading from "../components/Heading.jsx";
import FormContact from "../components/FormContact.jsx";

export default function Join() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    dateOfBirth: '',
    occupation: '',
    membershipType: 'supporter',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('आपका फॉर्म सफलतापूर्वक जमा हो गया है! हम जल्द ही आपसे संपर्क करेंगे।');
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

        {/* Content Section */}

        <div className="min-h-screen bg-white py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                हमसे जुड़ें
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-2">
                Join Our Movement for Change
              </p>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                देश के विकास और समाज के उत्थान में अपना योगदान दें। आज ही हमारे साथ जुड़ें और बदलाव की यात्रा में भागीदार बनें।
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Top Banner */}
              <div className="bg-orange-600 py-6 px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                  सदस्यता फॉर्म / Membership Form
                </h2>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-10">
                <div className="space-y-6">
                  {/* Personal Information Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <User className="w-6 h-6 mr-2 text-orange-600" />
                      व्यक्तिगत जानकारी
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          पूरा नाम / Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="अपना पूरा नाम दर्ज करें"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          जन्म तिथि / Date of Birth *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          ईमेल / Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          मोबाइल नंबर / Mobile Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 1234567890"
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          व्यवसाय / Occupation
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                            placeholder="आपका व्यवसाय"
                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <MapPin className="w-6 h-6 mr-2 text-orange-600" />
                      पता विवरण
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          पूरा पता / Full Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="मकान नंबर, गली, इलाका"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            शहर / City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="शहर"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            राज्य / State *
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="राज्य"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            पिन कोड / Pincode *
                          </label>
                          <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            placeholder="123456"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Membership Details */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Users className="w-6 h-6 mr-2 text-orange-600" />
                      सदस्यता विवरण
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          सदस्यता प्रकार / Membership Type *
                        </label>
                        <select
                          name="membershipType"
                          value={formData.membershipType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          <option value="supporter">समर्थक / Supporter</option>
                          <option value="active-member">सक्रिय सदस्य / Active Member</option>
                          <option value="volunteer">स्वयंसेवक / Volunteer</option>
                          <option value="donor">दानदाता / Donor</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          रुचि का क्षेत्र / Area of Interest
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          <option value="">चयन करें</option>
                          <option value="social-work">सामाजिक कार्य / Social Work</option>
                          <option value="youth-activities">युवा गतिविधियाँ / Youth Activities</option>
                          <option value="campaign">प्रचार अभियान / Campaign</option>
                          <option value="fundraising">धन संग्रह / Fundraising</option>
                          <option value="policy">नीति निर्माण / Policy Making</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div>
                    <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-orange-600" />
                      संदेश / Message (वैकल्पिक)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="हमें बताएं कि आप हमारे साथ क्यों जुड़ना चाहते हैं..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        मैं घोषणा करता/करती हूँ कि ऊपर दी गई सभी जानकारी सत्य है और मैं पार्टी के नियमों और सिद्धांतों का पालन करने के लिए सहमत हूँ। / I declare that all the information provided above is true and I agree to abide by the party's rules and principles.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-orange-600 hover:from-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      फॉर्म जमा करें / Submit Form
                    </button>
                    <button
                      onClick={() => setFormData({
                        fullName: '', email: '', phone: '', address: '', city: '',
                        state: '', pincode: '', dateOfBirth: '', occupation: '',
                        membershipType: 'supporter', interest: '', message: ''
                      })}
                      className="flex-1 sm:flex-none bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
                    >
                      रीसेट करें / Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                किसी भी सहायता के लिए संपर्क करें: <span className="font-semibold text-orange-600">+91 1234 567 890</span> या <span className="font-semibold text-orange-600">info@party.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Heading />
      <FormContact />
    </>
  )
}





