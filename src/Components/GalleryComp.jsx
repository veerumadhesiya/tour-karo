import React from 'react';
import LightGallery from 'lightgallery/react';

// LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// LightGallery plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Images (from src/assets)
import India from '../assets/India.jpg';
import Hero1 from '../assets/Hero1.jpg';
import Hero2 from '../assets/Hero2.jpg';
import Hero3 from '../assets/Hero3.jpg';
import Hero4 from '../assets/Hero4.jpg';
import Bali from '../assets/Bali.jpg';
import Venice from '../assets/Venice.jpg';
import Paris from '../assets/Paris.jpg';
import Tokyo from '../assets/Tokyo.jpg';

const images = [
  { src: India, alt: 'India' },
  { src: Hero1, alt: 'Hero1' },
  { src: Hero2, alt: 'Hero2' },
  { src: Hero3, alt: 'Hero3' },
  { src: Hero4, alt: 'Hero4' },
  { src: Bali, alt: 'Bali' },
  { src: Venice, alt: 'Venice' },
  { src: Paris, alt: 'Paris' },
  { src: Tokyo, alt: 'Tokyo' },
];

const GalleryComp = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12 mb-20">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-bold text-center font-serif mb-4">
        Our Gallery
      </h2>
      <div className="w-40 h-1 bg-red-500 mx-auto mb-10"></div>

      {/* Gallery */}
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <a
                href={img.src}
                className="group block overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    View Image
                  </span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </LightGallery>
    </div>
  );
};

export default GalleryComp;
