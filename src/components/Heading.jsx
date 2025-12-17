import React from 'react';

export default function NewsBlogHeader({
  title,
  description,
  center = true
}) {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}