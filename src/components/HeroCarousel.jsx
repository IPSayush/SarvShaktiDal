import React, { useEffect, useState, useRef } from "react";

export default function HeroCarousel() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2000&auto=format&fit=crop",
      title: "Hero Image One",
      subtitle: "This is your first hero slide."
    },
    {
      src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2000&auto=format&fit=crop",
      title: "Hero Image Two",
      subtitle: "This is your second hero slide."
    }
  ];

  const total = images.length;
  const [current, setCurrent] = useState(0);
  const intervalTime = 4000; // autoplay speed
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, intervalTime);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[60vh] bg-black">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-[60vh] relative">
            <img
              src={img.src}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
        onClick={() => {
          setCurrent((c) => (c - 1 + total) % total);
          startAutoPlay();
        }}
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
        onClick={() => {
          setCurrent((c) => (c + 1) % total);
          startAutoPlay();
        }}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => {
              setCurrent(idx);
              startAutoPlay();
            }}
          ></button>
        ))}
      </div>
    </section>
  );
}
