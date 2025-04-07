import React from "react";

const images = [
  "/src/images/Gallery/1.avif",
  "/src/images/Gallery/2.jpg",
  "/src/images/Gallery/3.avif",
  "/src/images/Gallery/4.jpg",
  "/src/images/Gallery/5.webp",
  "/src/images/Gallery/6.jpg",
  "/src/images/Gallery/7.webp",
  "/src/images/Gallery/8.webp",
  "/src/images/Gallery/9.jpg",
  "/src/images/Gallery/10.jpg",
  "/src/images/Gallery/11.jpg",
  "/src/images/Gallery/12.jpg",
  "/src/images/Gallery/13.webp",
  "/src/images/Gallery/14.jpg",
  "/src/images/Gallery/15.jpg",
  "/src/images/Gallery/16.jpg",
  "/src/images/Gallery/17.jpg",
  "/src/images/Gallery/18.avif",
  "/src/images/Gallery/19.jpg",
  "/src/images/Gallery/20.jpg"
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Our Restaurant's Sweet & Beautiful Memories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={`gallery-img-${index}`}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt="Gallery image of our restaurant"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
