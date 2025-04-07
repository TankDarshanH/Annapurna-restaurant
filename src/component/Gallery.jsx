import React from "react";

// Import all images
import img1 from "../images/Gallery/1.avif";
import img2 from "../images/Gallery/2.jpg";
import img3 from "../images/Gallery/3.avif";
import img4 from "../images/Gallery/4.jpg";
import img5 from "../images/Gallery/5.webp";
import img6 from "../images/Gallery/6.jpg";
import img7 from "../images/Gallery/7.webp";
import img8 from "../images/Gallery/8.webp";
import img9 from "../images/Gallery/9.jpg";
import img10 from "../images/Gallery/10.jpg";
import img11 from "../images/Gallery/11.jpg";
import img12 from "../images/Gallery/12.jpg";
import img13 from "../images/Gallery/13.webp";
import img14 from "../images/Gallery/14.jpg";
import img15 from "../images/Gallery/15.jpg";
import img16 from "../images/Gallery/16.jpg";
import img17 from "../images/Gallery/17.jpg";
import img18 from "../images/Gallery/18.avif";
import img19 from "../images/Gallery/19.jpg";
import img20 from "../images/Gallery/20.jpg";

// Put them into array
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
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
              alt={`Gallery image ${index + 1}`}
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
