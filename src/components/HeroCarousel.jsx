import React, { useEffect, useState, useRef } from "react";

export default function HeroCarousel() {
  const images = [
    { src: "../sliderImg1.webp" },
    { src: "../sliderImg2.webp" }
  ];

  const total = images.length;
  const [current, setCurrent] = useState(0);
  const intervalTime = 2000; // 2 seconds
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
    <>
    <section className="relative w-full overflow-hidden bg-black">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full relative">
            <img
              src={img.src}
              className="w-full h-auto object-cover lg:object-fill"
              alt=""
              loading="eager" fetchPriority="high" decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
    <section className="py-1 my-5 bg-amber-300 text-center text-black text-lg font-semibold flex items-center justify-center">
        <marquee behavior="scroll" direction="left" scrollamount="5" truespeed='true' >दल में जुड़ने से आपकी सामाजिक, व्यक्तिगत व राजनीतिक मान व प्रतिष्ठा में वृद्धि होती है, जिससे आप समाज में अपने आप को सबल सशक्त बना सकते है</marquee>
    </section>
    </>
  );
}
