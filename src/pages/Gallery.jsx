import React from 'react'
import FormContact from '../components/FormContact.jsx';
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      alt: "Political Campaign 1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      alt: "Political Campaign 2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
      alt: "Political Campaign 3"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
      alt: "Political Campaign 4"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      alt: "Political Campaign 5"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
      alt: "Political Campaign 6"
    }
  ];

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              PHOTO GALLERY
            </h1>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-video w-full bg-gray-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">View Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Close"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>

            {/* Image Container */}
            <div className="max-w-5xl max-h-[90vh] w-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
      <FormContact />
    </>
  );
}

export default Gallery
