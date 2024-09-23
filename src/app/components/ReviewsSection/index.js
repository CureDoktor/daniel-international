"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../ReviewCard";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function PreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute hidden md:d-block top-[-100px] right-[60px] rounded-full

      shadow-md cursor-pointer bg-white w-[48px] h-[48px]"
      onClick={onClick}
    >
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        className="m-auto d-block mt-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.439368 8.9875C-0.146455 9.54535 -0.146455 10.4513 0.439368 11.0091L9.43761 19.5777C10.0234 20.1356 10.9748 20.1356 11.5606 19.5777C12.1465 19.0199 12.1465 18.1139 11.5606 17.5561L3.62156 9.99609L11.5559 2.43612C12.1418 1.87828 12.1418 0.972329 11.5559 0.41448C10.9701 -0.143369 10.0187 -0.143369 9.43292 0.41448L0.434681 8.98304L0.439368 8.9875Z"
          fill="#8893AC"
        />
      </svg>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute hidden md:d-block top-[-100px] right-[0px] rounded-full

      shadow-md cursor-pointer bg-white w-[48px] h-[48px]"
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="m-auto mt-[14px] d-block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5606 10.9875C18.1465 11.5454 18.1465 12.4513 17.5606 13.0091L8.56239 21.5777C7.97657 22.1356 7.02519 22.1356 6.43937 21.5777C5.85354 21.0199 5.85354 20.1139 6.43937 19.5561L14.3784 11.9961L6.44405 4.43612C5.85823 3.87828 5.85823 2.97233 6.44405 2.41448C7.02988 1.85663 7.98125 1.85663 8.56708 2.41448L17.5653 10.983L17.5606 10.9875Z"
          fill="#191919"
        />
      </svg>
    </div>
  );
}

function ReviewsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    focusOnSelect: true,
    dotsClass: "slick-dots slick-thumb",
    customPaging: function (i) {
      return (
        <a className="w-5 h-5 hidden md:d-block bg-orange">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#FF932F" />
          </svg>
        </a>
      );
    },
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <PreviousArrow />,

    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        <div>
          <ReviewCard
            name="David H."
            text="Really effective, but I wish the subscription was cheaper."
            date="1 day ago"
          />
        </div>
        <div>
          <ReviewCard
            name="Sarah K."
            text="Great tool, but a bit pricey after the trial."
            date="2 weeks ago"
          />
        </div>
        <div>
          <ReviewCard
            name="Michael W."
            text="The best investment in my personal development!"
            date="2 days ago"
          />
        </div>
        <div>
          <ReviewCard
            name="David H."
            text="Really effective, but I wish the subscription was cheaper."
            date="1 day ago"
          />
        </div>
        <div>
          <ReviewCard
            name="Sarah K."
            text="Great tool, but a bit pricey after the trial."
            date="2 weeks ago"
          />
        </div>
        <div>
          <ReviewCard
            name="Michael W."
            text="The best investment in my personal development!"
            date="2 days ago"
          />
        </div>
        <div>
          <ReviewCard
            name="David H."
            text="Really effective, but I wish the subscription was cheaper."
            date="1 day ago"
          />
        </div>
        <div>
          <ReviewCard
            name="Sarah K."
            text="Great tool, but a bit pricey after the trial."
            date="2 weeks ago"
          />
        </div>
        <div>
          <ReviewCard
            name="Michael W."
            text="The best investment in my personal development!"
            date="2 days ago"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ReviewsSection;
