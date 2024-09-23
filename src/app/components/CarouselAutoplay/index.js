"use client";

import React from "react";

import Marquee from "react-fast-marquee";

const CarouselAutoplay = () => (
  <Marquee
    pauseOnHover={true}
    className="flex justify-between pt-6 pb-16 md:py-20"
  >
    <img src="/images/marque/marque_1.svg" className="pr-20" />
    <img src="/images/marque/marque_2.svg" className="pr-20" />
    <img src="/images/marque/marque_3.svg" className="pr-20" />
    <img src="/images/marque/marque_4.svg" className="pr-20" />
    <img src="/images/marque/marque_5.svg" className="pr-20" />
    <img src="/images/marque/marque_6.svg" className="pr-20" />
  </Marquee>
);

export default CarouselAutoplay;
