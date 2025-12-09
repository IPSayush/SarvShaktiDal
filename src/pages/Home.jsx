import React, { Suspense, lazy, useMemo } from 'react';
import { Form, Link } from 'react-router-dom';
import FormContact from '../components/FormContact.jsx';
import Heading from '../components/Heading.jsx';
// Lazy-load HeroCarousel to reduce initial bundle size
const HeroCarousel = lazy(() => import('../components/HeroCarousel'));
// console.log(UsersRound);

// Keep same exported Home component
function Home() {

  // useMemo for cards so identity is stable across renders
  const cardsMemo = useMemo(() => [
    { id: 'become-member', title: "Become Member", sub: "सदस्य बनें", icon: "users" },
    { id: 'benefits', title: "Benefits of Membership", sub: "सदस्यता के फायदे", icon: "plus" },
    { id: 'about-ssd', title: "About Sarvashaktidal", sub: "जाने सर्वशक्ति दल के बारे में", icon: "question" },
    { id: 'social-media', title: "Social Media", sub: "सोशल मीडिया", icon: "share" },
    { id: 'janta-darbaar', title: "About Janta Darbaar", sub: "जाने जनता दरबार के बारे में", icon: "question" },
    { id: 'problem-solution', title: "For Problem Solution", sub: "समस्या निवारण हेतु", icon: "alert" },
    { id: 'donate', title: "To Donate", sub: "दान करने हेतु", icon: "donate" },
    { id: 'share-app', title: "Share App", sub: "ऐप शेयर करें", icon: "share" },
  ], []);

  return (
    <>
      {/* Skip link for keyboard users */}
      <Link to="#main-content" className="sr-only focus:not-sr-only">Skip to main content</Link>

      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <HeroCarousel />
      </Suspense>

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





        <Heading />




        {/* Pass memoized cards to Cards component */}
        <Cards cards={cardsMemo} />
        <Heading />
        <Layout />
        <Heading />

        <NewsAndBlogs />
      </main>
    </>
  );
}

/* --- Icons component: memoized and add aria-hidden for decorative icons --- */
const Icons = React.memo(({ type }) => {
  const common = "w-7 h-7 text-white";

  switch (type) {
    case "users":
      return (
        <svg className={common} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6zm0 2c-2.7 0-6 1.4-6 3v2h12v-2c0-1.6-3.3-3-6-3zm8 0c-.5 0-1 .1-1.4.2 1.7 1.2 3.4 2.1 3.4 3.8v1h6v-1c0-1.6-3.3-3-6-3z" />
        </svg>
      );
    case "plus":
      return (
        <svg className={common} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "question":
      return (
        <svg className={common} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 8a3 3 0 013 3c0 2-3 2-3 4" />
          <circle cx="12" cy="17" r="1" />
        </svg>
      );
    case "alert":
      return (
        <svg className={common} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 8v4m0 4h.01" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "donate":
      return (
        <svg className={common} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 8v4l3 3" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "share":
      return (
        <svg className={common} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M18 16a3 3 0 10-2.8-4h-.4l-4.3-2.6A3 3 0 109 12c0 .3 0 .5.1.7l4.4 2.6v.3A3 3 0 1018 16z" />
        </svg>
      );
    default:
      return null;
  }
});

/* --- Cards component: uses stable keys, accessible buttons, lazy images --- */
function Cards({ cards }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6" role="list">
      {cards.map((c) => (
        <div
          key={c.id}
          className="w-full sm:w-[45%] lg:w-[22%] bg-white rounded-xl shadow-xl hover:shadow-xl transition p-6 text-center border border-red-200 relative"
          role="listitem"
        >
          <div className="mx-auto mb-4 w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center" aria-hidden="true">
            <Icons type={c.icon} />
          </div>

          <h3 className="text-lg font-black text-[#000000]">{c.title}</h3>

          <p className="text-gray-600 mt-1 text-sm">{c.sub}</p>

          <button
            type="button"
            aria-label={`Open ${c.title}`}
            className="mt-4 bg-red-600 text-white text-sm px-4 py-2 rounded-md shadow"
          >
            Sarva Shakti Dal
          </button>
        </div>
      ))}
    </div>
  );
}

/* --- Layout component: images lazy, alt text, dimensions --- */
const Layout = () => {
  return (
    <>
      <section className="text-gray-600 body-font" aria-labelledby="gallery-heading">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 id="gallery-heading" className="sr-only">Gallery</h2>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="गैलरी चित्र 1"
                  fetchPriority="high"
                  className="w-full object-cover h-full object-center block"
                  src="./flag.webp"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="गैलरी चित्र 2"
                  fetchPriority="high"
                  className="w-full object-cover h-full object-center block"
                  src="./flag.webp"
                  loading="lazy"
                  decoding="async"
                  width="501"
                  height="301"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="गैलरी चित्र 3"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center block"
                  src="./flag.webp"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="360"
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="गैलरी चित्र 4"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center block"
                  src="./flag.webp"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="360"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="गैलरी चित्र 5"
                  fetchPriority="high"
                  className="w-full object-cover h-full object-center block"
                  src="./flag.webp"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="गैलरी चित्र 6"
                  fetchPriority="high"
                  className="w-full object-cover h-full object-center block"
                  src="./flag.webp"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};







/* --- NewsAndBlogs: lazy images, semantic article, accessible links --- */
const NewsAndBlogs = () => {
  return (
    <>
      <section className="text-gray-600 body-font" aria-labelledby="news-heading">
        <div className="container px-5 py-24 mx-auto">
          <h2 id="news-heading" className="sr-only">News and Blogs</h2>

          <div className="flex flex-wrap -m-4">
            {[
              { id: 'n1', date: 'Sep 24, 2025', title: 'सर्वशक्ति दल: समाज में शक्ति, सेवा और बदलाव का प्रतीक', img: './flag.webp', excerpt: 'सेवा और बदलाव का प्रतीक कैसे एक संगठन ने समाज के हर वर्ग तक शिक्षा, स्वास्थ्य और जागरूकता पहुंचाई' },
              { id: 'n2', date: 'Sep 24, 2025', title: 'समाचार शैली और अभियान पर फोकस', img: './flag.webp', excerpt: 'सर्वशक्ति दल ने चलाया विशाल स्वच्छता और स्वास्थ्य अभियान' },
              { id: 'n3', date: 'Sep 24, 2025', title: 'प्रेरणादायक और जागरूकता पर फोकस', img: './flag.webp', excerpt: 'सर्वशक्ति दल: हर व्यक्ति में शक्ति, हर समाज में उम्मीद' },
            ].map((post) => (
              <article key={post.id} className="p-4 md:w-1/3" aria-labelledby={`${post.id}-title`}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.img} alt={post.title} fetchPriority="high" loading="lazy" decoding="async" width="720" height="400" />
                  <div className="p-6">
                    <h3 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.date}</h3>
                    <h4 id={`${post.id}-title`} className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h4>
                    <p className="leading-relaxed mb-3">{post.excerpt}</p>
                    <div className="flex items-center flex-wrap">
                      <Link className="text-indigo-500 inline-flex items-center  md:mb-2 lg:mb-0" to="#" aria-label={`Learn more about ${post.title}`}>Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>

                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FormContact />
    </>
  );
};

export default Home;
