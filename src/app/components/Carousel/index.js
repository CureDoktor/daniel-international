"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay"; // Autoplay styles

// Dynamically import Swiper (to avoid SSR issues)
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  {
    ssr: false,
  }
);

const ImageSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperEl = swiperRef.current.el;

      // Pause autoplay on hover
      swiperEl.addEventListener("mouseenter", () => {
        swiperRef.current.autoplay.stop();
      });

      // Resume autoplay when unhovered
      swiperEl.addEventListener("mouseleave", () => {
        swiperRef.current.autoplay.start();
      });

      // Clean up event listeners
      return () => {
        swiperEl.removeEventListener("mouseenter", () => {
          swiperRef.current.autoplay.stop();
        });
        swiperEl.removeEventListener("mouseleave", () => {
          swiperRef.current.autoplay.start();
        });
      };
    }
  }, []);

  return (
    <div className="w-full h-64 overflow-hidden">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[
          dynamic(() => import("swiper").then((mod) => mod.Autoplay), {
            ssr: false,
          }),
        ]}
        className="swiper-container flex justify-center"
      >
        {/* <SwiperSlide>
          <img
            src="/images/musk.png"
            className="w-full h-full object-cover"
            alt="Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/musk.png"
            className="w-full h-full object-cover"
            alt="Image 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/musk.png"
            className="w-full h-full object-cover"
            alt="Image 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/musk.png"
            className="w-full h-full object-cover"
            alt="Image 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/musk.png"
            className="w-full h-full object-cover"
            alt="Image 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/musk.png"
            className="w-full h-full object-cover"
            alt="Image 6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/musk.png"
            className="w-full h-full object-cover"
            alt="Image 7"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
