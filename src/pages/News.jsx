import React from "react";
import Heading from "../components/Heading.jsx";
import FormContact from "../components/FormContact.jsx";

export default function News() {
  // Hard-coded sample posts (change image paths/text as needed)
  const posts = [
    {
      id: 1,
      date: "Sep 24, 2025",
      title: "सर्वशक्तिव ददल: समाज में शक्ति़, सेवा और बदलाव का प्रतीक",
      excerpt:
        "कैसे एक संगठन ने समाज के हर वर्ग तक शिक्षा, स्वास्थ्य और जागरूकता पहुंचाई — छोटी-सी रिपोर्ट और फोटो।",
      image: "./blank.webp",
      thumb: "./blank.webp",
    },
    {
      id: 2,
      date: "Sep 24, 2025",
      title: "समाचार रैली और अभियान पर फोकस",
      excerpt:
        "स्थानीय रैली और जनजागरण अभियान: मुख्य बातें, हिस्सा लेने वालों की प्रतिक्रिया और आगे की योजना।",
      image: "./blank.webp",
      thumb: "./blank.webp",
    },
    {
      id: 3,
      date: "Sep 24, 2025",
      title: "प्रेरणादायक और जागरूकता पर फोकस",
      excerpt:
        "गाँव-गाँव जाकर किये गए काम और महिलाओं के सशक्तिकरण की छोटी-छोटी कहानियाँ।",
      image: "./blank.webp",
      thumb: "./blank.webp",
    },
  ];

  const recent = posts.slice(0, 3);

  return (
    <>
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          Job In Grid
        </h2>

        {/* Grid: main (2 cols) + sidebar (1 col) on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main column (spans 2 cols on md+) */}
          <div className="md:col-span-2 space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:-translate-y-1"
              >
                {/* Image */}
                <div className="w-full block">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-56 sm:h-72 md:h-80 object-cover"
                    width="1200"
                    height="675"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg
                      className="w-4 h-4 mr-2 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 2a1 1 0 00-.894.553L3 7H1a1 1 0 000 2h2l1.5 4.5A1 1 0 005.5 16h9a1 1 0 00.894-1.447L14 9h2a1 1 0 100-2h-2L13 2.553A1 1 0 0012 2H6z" />
                    </svg>
                    <time dateTime="2025-09-24">{post.date}</time>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h4>

              <ul className="space-y-4">
                {recent.map((r) => (
                  <li key={r.id} className="flex items-start gap-3">
                    <img
                      src={r.thumb}
                      alt={r.title}
                      loading="lazy"
                      className="w-16 h-12 object-cover rounded-sm shrink-0"
                      width="160"
                      height="120"
                    />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">
                        {r.title}
                      </h5>
                      <p className="text-xs text-gray-500">{r.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional small card under sidebar for visual balance */}
            <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
              <h5 className="text-sm font-semibold text-gray-800 mb-2">
                Subscribe
              </h5>
              <p className="text-sm text-gray-600 mb-3">
                Latest updates aur khabar ke liye subscribe karein.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-1 focus:ring-red-400"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-red-600 text-white rounded-md text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <Heading />
    <FormContact />
    </>
  );
}
