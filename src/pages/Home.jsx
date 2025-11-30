import React from 'react'
import HeroCarousel from '../components/HeroCarousel'


function Home() {


    return (
        <>
            <HeroCarousel />

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-15 md:flex-row flex-col items-center border border-red-300 shadow-lg rounded-lg mb-10">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                        <img className="object-cover object-center rounded" alt="hero" src="./flag.webp" />
                    </div>
                    <div className="lg:grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#dc3545] leading-tight"><b>सर्वशक्ति दल:
                            <br className="hidden lg:inline-block" />समाज सेवा और सशक्तिकरण</b>
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            समाज में सकारात्मक बदलाव लाने और लोगों को जागरूक करने के लिए काम करता है। हमारा उद्देश्य शिक्षा, स्वास्थ्य और महिला सशक्तिकरण के माध्यम से हर वर्ग तक सहायता पहुँचाना है। हम ग्रामीण और शहरी क्षेत्रों में कार्यक्रम आयोजित करके समाज में सेवा, जागरूकता और एकजुटता फैलाते हैं। हमारा मानना है कि एकजुट होकर सेवा करना ही समाज की असली शक्ति है।
                            <br /><br />
                            <b>- शिक्षा और जागरूकता: ग्रामीण और शहरी इलाकों में शिक्षा और सामाजिक जागरूकता कार्यक्रम।</b>
                            <br />
                            <b>- स्वास्थ्य और स्वच्छता: स्वास्थ्य शिविर और स्वच्छता अभियानों के माध्यम से बेहतर जीवनशैली।</b>
                            <br />
                            <b>- सशक्तिकरण: महिलाओं और युवाओं को अवसर देकर समाज में समानता और विकास को बढ़ावा।</b>
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-[#dc3545] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">और...</button>

                        </div>
                    </div>
                </div>
            </section>

            <Cards />

            <Layout />

            <NewsAndBlogs />
        </>
    )
}


const cards = [
    { title: "Become Member", sub: "सदस्य बनें", icon: "users" },
    { title: "Benefits of Membership", sub: "सदस्यता के फायदे", icon: "plus" },
    { title: "About Sarvashaktidal", sub: "जाने सर्वशक्ति दल के बारे में", icon: "question" },
    { title: "Social Media", sub: "सोशल मीडिया", icon: "share" },
    { title: "About Janta Darbaar", sub: "जाने जनता दरबार के बारे में", icon: "question" },
    { title: "For Problem Solution", sub: "समस्या निवारण हेतु", icon: "alert" },
    { title: "To Donate", sub: "दान करने हेतु", icon: "donate" },
    { title: "Share App", sub: "ऐप शेयर करें", icon: "share" },
];
const Icons = ({ type }) => {
    const common = "w-7 h-7 text-white";

    switch (type) {
        case "users":
            return (
                <svg className={common} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6zm0 2c-2.7 0-6 1.4-6 3v2h12v-2c0-1.6-3.3-3-6-3zm8 0c-.5 0-1 .1-1.4.2 1.7 1.2 3.4 2.1 3.4 3.8v1h6v-1c0-1.6-3.3-3-6-3z" />
                </svg>
            );
        case "plus":
            return (
                <svg className={common} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" />
                </svg>
            );
        case "question":
            return (
                <svg className={common} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8a3 3 0 013 3c0 2-3 2-3 4" />
                    <circle cx="12" cy="17" r="1" />
                </svg>
            );
        case "alert":
            return (
                <svg className={common} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4m0 4h.01" />
                    <circle cx="12" cy="12" r="9" />
                </svg>
            );
        case "donate":
            return (
                <svg className={common} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="9" />
                </svg>
            );
        case "share":
            return (
                <svg className={common} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16a3 3 0 10-2.8-4h-.4l-4.3-2.6A3 3 0 109 12c0 .3 0 .5.1.7l4.4 2.6v.3A3 3 0 1018 16z" />
                </svg>
            );
        default:
            return null;
    }
};


function Cards() {
    return (
        <div className="flex flex-wrap gap-6 justify-center p-6">

            {cards.map((c, i) => (
                <div
                    key={i}
                    className="w-full sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow-xl hover:shadow-xl transition p-6 text-center border border-red-200 relative"
                >
                    {/* Icon */}
                    <div className="mx-auto mb-4 w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center">
                        <Icons type={c.icon} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>

                    {/* Subtitle */}
                    <p className="text-gray-600 mt-1 text-sm">{c.sub}</p>

                    {/* Button */}
                    <button className="mt-4 bg-red-600 text-white text-sm px-4 py-2 rounded-md shadow">
                        Sarva Shakti Dal
                    </button>
                </div>
            ))}

        </div>
    );
}

// LAYOUT OF IMAGES AND TEXT

const Layout = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">

                    {/* Heading to be used here  */}

                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// News and blog section can be added here 
const NewsAndBlogs = () => {
    return (
        <>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}




export default Home
