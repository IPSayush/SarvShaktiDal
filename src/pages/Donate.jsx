import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Heart, Users, Droplet, HandHeart, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { delay } from '../functions';
function Donate() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      pan: '',
      address: '',
      amount: '',
      donationType: 'one-time'
    }
  });

  const [selectedAmount, setSelectedAmount] = useState(null);
  const customAmount = watch('amount');
  const donationType = watch('donationType');

  const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setValue('amount', '');
  };

  const handleCustomAmount = (e) => {
    setSelectedAmount(null);
  };
 
  const onSubmit = async (data) => {
    await delay(2)
    const amount = selectedAmount || data.amount;
    if (!amount || amount <= 0) {
      alert('कृपया दान राशि चुनें');
      return;
    }
    console.log('Donation Data:', { ...data, finalAmount: amount });
    alert(`धन्यवाद! आपका ₹${amount} का दान प्राप्त हुआ`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    alert('Donate Page is Under Maintenance. Please try again later.');
  }, []);

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <div className="bg-linear-to-r from-red-500 to-orange-500 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">दान करें और बदलाव लाएं</h2>
            <p className="text-lg sm:text-xl mb-6">आपका हर योगदान देश के विकास में सहायक है</p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">50,000+</p>
                <p className="text-sm">सदस्य</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">10,000+</p>
                <p className="text-sm">दानदाता</p>
              </div>
              <div className="text-center">
                <HandHeart className="w-12 h-12 mx-auto mb-2" />
                <p className="text-2xl font-bold">₹1 करोड़+</p>
                <p className="text-sm">एकत्रित राशि</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Donation Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">दान करें</h3>
              
              {/* Donation Type */}
              <div className="mb-6">
                <p className="text-gray-700 font-semibold mb-3">दान का प्रकार चुनें:</p>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setValue('donationType', 'one-time')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                      donationType === 'one-time'
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                    }`}
                  >
                    एक बार
                  </button>
                  <button
                    type="button"
                    onClick={() => setValue('donationType', 'monthly')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                      donationType === 'monthly'
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                    }`}
                  >
                    मासिक
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <p className="text-gray-700 font-semibold mb-3">राशि चुनें (₹):</p>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
                        selectedAmount === amount
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                      }`}
                    >
                      ₹{amount.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  {...register("amount")}
                  placeholder="अन्य राशि दर्ज करें"
                  onChange={handleCustomAmount}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-800">दानदाता की जानकारी</h4>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="पूरा नाम *"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="ईमेल पता *"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="मोबाइल नंबर *"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="text"
                  {...register("pan")}
                  placeholder="पैन नंबर (वैकल्पिक)"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <textarea
                  {...register("address")}
                  placeholder="पता (वैकल्पिक)"
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Donate Button */}
              {isSubmitting && <div>Load...</div>}
              <button
              disabled={isSubmitting}
                onClick={handleSubmit(onSubmit)}
                className="w-full mt-6 bg-linear-to-r from-red-600 to-orange-600 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                दान करें
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                80G प्रमाणपत्र उपलब्ध | सुरक्षित भुगतान गेटवे
              </p>
            </div>

            {/* Right Section - Info */}
            <div className="space-y-6">
              {/* Why Donate */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">क्यों दान करें?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">पारदर्शिता और जवाबदेही</p>
                      <p className="text-sm text-gray-500">प्रत्येक दान का पूर्ण हिसाब-किताब</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">सामाजिक विकास कार्यक्रम</p>
                      <p className="text-sm text-gray-500">शिक्षा, स्वास्थ्य और रोजगार के अवसर</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">राजनीतिक सुधार</p>
                      <p className="text-sm text-gray-500">भ्रष्टाचार मुक्त राजनीति का निर्माण</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">जनसेवा परियोजनाएं</p>
                      <p className="text-sm text-gray-500">गरीबों और जरूरतमंदों की सहायता</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Benefits */}
              <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg p-6 border-2 border-yellow-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">कर लाभ</h3>
                <p className="text-gray-700 mb-2">
                  आयकर अधिनियम की धारा 80G के तहत आपके दान पर कर छूट मिलेगी।
                </p>
                <p className="text-sm text-gray-500">
                  * 80G प्रमाणपत्र ईमेल द्वारा प्रदान किया जाएगा
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">संपर्क करें</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span>+91 9024222255</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-red-600" />
                    <span className="text-sm">SarvaShaktidal@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                    <span className="text-sm">Ragi. D60, Dev nagar, murlipura, jaipur, Rajasthan</span>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-linear-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-6 text-center">
                <Droplet className="w-12 h-12 mx-auto mb-3" />
                <p className="font-bold text-lg">आपका हर रुपया मायने रखता है</p>
                <p className="text-sm mt-2">देश के उज्ज्वल भविष्य में योगदान दें</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;




// import React, { useState, useEffect } from 'react';
// import { Heart, Users, Droplet, HandHeart, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

// function Donate() {
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [customAmount, setCustomAmount] = useState('');
//   const [donationType, setDonationType] = useState('one-time');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     pan: '',
//     address: ''
//   });

//   const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

//   const handleAmountSelect = (amount) => {
//     setSelectedAmount(amount);
//     setCustomAmount('');
//   };

//   const handleCustomAmount = (e) => {
//     setCustomAmount(e.target.value);
//     setSelectedAmount(null);
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleDonate = () => {
//     const amount = selectedAmount || customAmount;
//     if (!amount || amount <= 0) {
//       alert('कृपया दान राशि चुनें');
//       return;
//     }
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert('कृपया सभी आवश्यक फील्ड भरें');
//       return;
//     }
//     alert(`धन्यवाद! आपका ₹${amount} का दान प्राप्त हुआ`);
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     alert('Donate Page is Under Maintenance. Please try again later.');
//   }, []);
//   return (
//     <>
//     <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">

//       {/* Hero Section */}
//       <div className="bg-linear-to-r from-red-500 to-orange-500 text-white py-12 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-5xl font-bold mb-4">दान करें और बदलाव लाएं</h2>
//           <p className="text-lg sm:text-xl mb-6">आपका हर योगदान देश के विकास में सहायक है</p>
//           <div className="flex flex-wrap justify-center gap-8 mt-8">
//             <div className="text-center">
//               <Users className="w-12 h-12 mx-auto mb-2" />
//               <p className="text-2xl font-bold">50,000+</p>
//               <p className="text-sm">सदस्य</p>
//             </div>
//             <div className="text-center">
//               <Heart className="w-12 h-12 mx-auto mb-2" />
//               <p className="text-2xl font-bold">10,000+</p>
//               <p className="text-sm">दानदाता</p>
//             </div>
//             <div className="text-center">
//               <HandHeart className="w-12 h-12 mx-auto mb-2" />
//               <p className="text-2xl font-bold">₹1 करोड़+</p>
//               <p className="text-sm">एकत्रित राशि</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Section - Donation Form */}
//           <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">दान करें</h3>
            
//             {/* Donation Type */}
//             <div className="mb-6">
//               <p className="text-gray-700 font-semibold mb-3">दान का प्रकार चुनें:</p>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => setDonationType('one-time')}
//                   className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
//                     donationType === 'one-time'
//                       ? 'bg-red-600 text-white border-red-600'
//                       : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
//                   }`}
//                 >
//                   एक बार
//                 </button>
//                 <button
//                   onClick={() => setDonationType('monthly')}
//                   className={`flex-1 py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
//                     donationType === 'monthly'
//                       ? 'bg-red-600 text-white border-red-600'
//                       : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
//                   }`}
//                 >
//                   मासिक
//                 </button>
//               </div>
//             </div>

//             {/* Amount Selection */}
//             <div className="mb-6">
//               <p className="text-gray-700 font-semibold mb-3">राशि चुनें (₹):</p>
//               <div className="grid grid-cols-3 gap-3 mb-4">
//                 {donationAmounts.map((amount) => (
//                   <button
//                     key={amount}
//                     onClick={() => handleAmountSelect(amount)}
//                     className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all ${
//                       selectedAmount === amount
//                         ? 'bg-red-600 text-white border-red-600'
//                         : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
//                     }`}
//                   >
//                     ₹{amount.toLocaleString('en-IN')}
//                   </button>
//                 ))}
//               </div>
//               <input
//                 type="number"
//                 placeholder="अन्य राशि दर्ज करें"
//                 value={customAmount}
//                 onChange={handleCustomAmount}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//             </div>

//             {/* Donor Information */}
//             <div className="space-y-4">
//               <h4 className="text-lg font-bold text-gray-800">दानदाता की जानकारी</h4>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="पूरा नाम *"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="ईमेल पता *"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="मोबाइल नंबर *"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//               <input
//                 type="text"
//                 name="pan"
//                 placeholder="पैन नंबर (वैकल्पिक)"
//                 value={formData.pan}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//               <textarea
//                 name="address"
//                 placeholder="पता (वैकल्पिक)"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 rows="3"
//                 className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
//               ></textarea>
//             </div>

//             {/* Donate Button */}
//             <button
//               onClick={handleDonate}
//               className="w-full mt-6 bg-linear-to-r from-red-600 to-orange-600 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
//             >
//               <Heart className="w-5 h-5" />
//               दान करें
//             </button>

//             <p className="text-xs text-gray-500 mt-4 text-center">
//               80G प्रमाणपत्र उपलब्ध | सुरक्षित भुगतान गेटवे
//             </p>
//           </div>

//           {/* Right Section - Info */}
//           <div className="space-y-6">
//             {/* Why Donate */}
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">क्यों दान करें?</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-800">पारदर्शिता और जवाबदेही</p>
//                     <p className="text-sm text-gray-500">प्रत्येक दान का पूर्ण हिसाब-किताब</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-800">सामाजिक विकास कार्यक्रम</p>
//                     <p className="text-sm text-gray-500">शिक्षा, स्वास्थ्य और रोजगार के अवसर</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-800">राजनीतिक सुधार</p>
//                     <p className="text-sm text-gray-500">भ्रष्टाचार मुक्त राजनीति का निर्माण</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-800">जनसेवा परियोजनाएं</p>
//                     <p className="text-sm text-gray-500">गरीबों और जरूरतमंदों की सहायता</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tax Benefits */}
//             <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg p-6 border-2 border-yellow-300">
//               <h3 className="text-xl font-bold text-gray-800 mb-3">कर लाभ</h3>
//               <p className="text-gray-700 mb-2">
//                 आयकर अधिनियम की धारा 80G के तहत आपके दान पर कर छूट मिलेगी।
//               </p>
//               <p className="text-sm text-gray-500">
//                 * 80G प्रमाणपत्र ईमेल द्वारा प्रदान किया जाएगा
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-4">संपर्क करें</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3 text-gray-700">
//                   <Phone className="w-5 h-5 text-red-600" />
//                   <span>+91 9024222255</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-700">
//                   <Mail className="w-5 h-5 text-red-600" />
//                   <span className="text-sm">SarvaShaktidal@gmail.com</span>
//                 </div>
//                 <div className="flex items-start gap-3 text-gray-700">
//                   <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
//                   <span className="text-sm">Ragi. D60, Dev nagar, murlipura, jaipur, Rajasthan</span>
//                 </div>
//               </div>
//             </div>

//             {/* Trust Badge */}
//             <div className="bg-linear-to-r from-red-600 to-orange-600 text-white rounded-lg shadow-lg p-6 text-center">
//               <Droplet className="w-12 h-12 mx-auto mb-3" />
//               <p className="font-bold text-lg">आपका हर रुपया मायने रखता है</p>
//               <p className="text-sm mt-2">देश के उज्ज्वल भविष्य में योगदान दें</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Donate