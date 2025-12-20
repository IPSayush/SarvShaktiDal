import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { delay } from '../functions';
export default function ContactFAQSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    await delay(2)
    console.log(data);
    alert('फॉर्म सबमिट हो गया है!');
    return;
  }

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'सर्वशक्तिदल क्या है?',
      answer: 'सर्वशक्तिदल एक राजनीतिक और सामाजिक संगठन है, जो समाज में न्याय, समानता और विकास को बढ़ावा देने के लिए काम करता है। इसका उद्देश्य सभी वर्गों और समुदायों के लिए अवसर और सशक्तिकरण प्रदान करना है।'
    },
    {
      question: 'सर्वशक्तिदल की स्थापना कब और क्यों हुई?',
      answer: 'सर्वशक्तिदल की स्थापना समाज में सभी के लिए समान अवसर और न्याय सुनिश्चित करने के लिए हुई थी। इसका लक्ष्य कमजोर और वंचित वर्गों के अधिकारों की रक्षा करना और उनका सशक्तिकरण करना है।'
    },
    {
      question: 'सर्वशक्तिदल का मुख्य उद्देश्य क्या है?',
      answer: 'इसका मुख्य उद्देश्य समाज के गरीब, पिछड़े और कमजोर वर्गों के कल्याण और सशक्तिकरण के लिए काम करना है। दल शिक्षा, स्वास्थ्य, रोजगार और सामाजिक न्याय के क्षेत्र में विशेष ध्यान देता है।'
    },
    {
      question: 'मैं सर्वशक्तिदल में कैसे शामिल हो सकता हूँ?',
      answer: 'आप sarvashaktidal.org वेबसाइट पर जाकर मेबर रजिस्ट्रेशन का फॉर्म भरकर सर्वशक्तिदल में शामिल हो सकते हैं।'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className=" bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Form Section */}
        <div className="bg-red-600 p-8 lg:p-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            CONTACT FORM
          </h1>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
              />
              <input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                {...register("email", { required: true })} 
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
              />
              <input
                type="text"
                {...register("subject", { required: true })} 
                placeholder="Subject"
                className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
              />
            </div>

            <input
              type="text"
              {...register("address", { required: true })} 
              placeholder="Address"
              className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
            />
            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900 resize-none"
            />
            {isSubmitting && <div>Load...</div>}
              <button
              disabled={isSubmitting}
              onClick={handleSubmit(onSubmit)}
              className=" cursor-pointer w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-6 rounded text-xl transition-colors duration-200"
            >
              SUBMIT
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-yellow-500 p-8 lg:p-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded overflow-hidden shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 text-left flex items-center justify-between transition-colors duration-200"
                >
                  <span className="flex items-center">
                    <span className="mr-3">▼</span>
                    {faq.question}
                  </span>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-white text-gray-800 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}











// import React, { useState } from 'react';

// export default function ContactFAQSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     subject: '',
//     address: '',
//     message: ''
//   });

//   const [openFAQ, setOpenFAQ] = useState(null);

//   const faqs = [
//     {
//       question: 'सर्वशक्तिदल क्या है?',
//       answer: 'सर्वशक्तिदल एक राजनीतिक और सामाजिक संगठन है, जो समाज में न्याय, समानता और विकास को बढ़ावा देने के लिए काम करता है। इसका उद्देश्य सभी वर्गों और समुदायों के लिए अवसर और सशक्तिकरण प्रदान करना है।'
//     },
//     {
//       question: 'सर्वशक्तिदल की स्थापना कब और क्यों हुई?',
//       answer: 'सर्वशक्तिदल की स्थापना समाज में सभी के लिए समान अवसर और न्याय सुनिश्चित करने के लिए हुई थी। इसका लक्ष्य कमजोर और वंचित वर्गों के अधिकारों की रक्षा करना और उनका सशक्तिकरण करना है।'
//     },
//     {
//       question: 'सर्वशक्तिदल का मुख्य उद्देश्य क्या है?',
//       answer: 'इसका मुख्य उद्देश्य समाज के गरीब, पिछड़े और कमजोर वर्गों के कल्याण और सशक्तिकरण के लिए काम करना है। दल शिक्षा, स्वास्थ्य, रोजगार और सामाजिक न्याय के क्षेत्र में विशेष ध्यान देता है।'
//     },
//     {
//       question: 'मैं सर्वशक्तिदल में कैसे शामिल हो सकता हूँ?',
//       answer: 'आप sarvashaktidal.org वेबसाइट पर जाकर मेबर रजिस्ट्रेशन का फॉर्म भरकर सर्वशक्तिदल में शामिल हो सकते हैं।'
//     }
//   ];

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//     alert('फॉर्म सबमिट हो गया है!');
//   };

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <div className=" bg-gray-100">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         {/* Contact Form Section */}
//         <div className="bg-red-600 p-8 lg:p-12">
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
//             CONTACT FORM
//           </h1>
          
//           <div className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
//               />
//             </div>

//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900"
//             />
//             <textarea
//               name="message"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               className="w-full px-4 py-3 bg-red-700 border-2 border-red-800 text-white placeholder-red-300 rounded focus:outline-none focus:border-red-900 resize-none"
//             />
//             <button
//               type="submit"
//               className=" cursor-pointer w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-6 rounded text-xl transition-colors duration-200"
//             >
//               SUBMIT
//             </button>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="bg-yellow-500 p-8 lg:p-12">
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
//             FREQUENTLY ASKED QUESTIONS
//           </h1>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="bg-white rounded overflow-hidden shadow-md">
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 text-left flex items-center justify-between transition-colors duration-200"
//                 >
//                   <span className="flex items-center">
//                     <span className="mr-3">▼</span>
//                     {faq.question}
//                   </span>
//                 </button>
                
//                 {openFAQ === index && (
//                   <div className="px-6 py-4 bg-white text-gray-800 text-base leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }