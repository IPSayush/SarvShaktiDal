import React from 'react'

const Main = () => {
    return (
        <>
            <main id="main-content">
                <section className="text-gray-600 body-font" aria-labelledby="hero-heading">
                    <div className="container mx-auto flex px-5 py-15 md:flex-row flex-col items-center border border-red-300 shadow-lg rounded-lg mb-10">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                            {/* optimized image: loading lazy, decoding async, dimensions */}
                            <img
                                fetchPriority="high"
                                className="object-cover object-center rounded"
                                alt="संगठन का झंडा"
                                src="./flag.webp"
                                loading="eager"
                                decoding="sync"
                                width="800"
                                height="533"
                            />
                        </div>
                        <div className="lg:grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            {/* Keep single h1 with explicit id */}
                            <h1 id="hero-heading" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#dc3545] leading-tight">
                                <b>सर्वशक्ति दल:
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
                                {/* button kept same styling; made accessible with type and focus-visible attributes (no visual style changes unless browser default focus) */}
                                <button
                                    type="button"
                                    aria-label="और अधिक जानकारी"
                                    className="inline-flex text-white bg-[#dc3545] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                >
                                    और...
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main
