import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const MiniSlider = ({ images }) => {
  console.log(images[2].img1)
  return (
    <Swiper
        modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      style={{ width: "300px", height: "200px" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={`${import.meta.env.VITE_API}images/${image.img1}`}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MiniSlider;