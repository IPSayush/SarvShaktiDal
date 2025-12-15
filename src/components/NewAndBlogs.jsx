import { Link } from 'react-router-dom';
import React from 'react';
const NewsAndBlogs = () => {
  return (
    <>
      <section className="text-gray-600 body-font" aria-labelledby="news-heading">
        <div className="container px-5 py-15 mx-auto">
          <h2 id="news-heading" className="sr-only">News and Blogs</h2>

          <div className="flex flex-wrap -m-4">
            {[
              { id: 'n1', date: 'Sep 24, 2025', title: 'सर्वशक्ति दल: समाज में शक्ति, सेवा और बदलाव का प्रतीक', img: "./blank.webp", excerpt: 'सेवा और बदलाव का प्रतीक कैसे एक संगठन ने समाज के हर वर्ग तक शिक्षा, स्वास्थ्य और जागरूकता पहुंचाई' },
              { id: 'n2', date: 'Sep 24, 2025', title: 'समाचार शैली और अभियान पर फोकस', img: "./blank.webp", excerpt: 'सर्वशक्ति दल ने चलाया विशाल स्वच्छता और स्वास्थ्य अभियान' },
              { id: 'n3', date: 'Sep 24, 2025', title: 'प्रेरणादायक और जागरूकता पर फोकस', img: "./blank.webp", excerpt: 'सर्वशक्ति दल: हर व्यक्ति में शक्ति, हर समाज में उम्मीद' },
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
    </>
  );
};

export default NewsAndBlogs;