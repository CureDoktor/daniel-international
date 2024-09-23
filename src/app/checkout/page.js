"use client";
import React from "react"; // Add this if it's missing
import { useState } from "react";
import Navbartwo from "../components/Navbartwo";
import Image from "next/image";
import IqCard from "../components/IqCard";
import AccordionCheckout from "../components/AccordionCheckout";
import Footer from "../components/Footer";
import PauseOnHover from "../components/CarouselAutoplay";
import ImproveCard from "../components/ImproveCard";
import LatestResultPart from "../components/LatestResultPart";
import ReviewsSection from "../components/ReviewsSection";

export default function Checkout() {
  const [formData, setFormData] = useState({
    card_number: "",
    expiration: "",
    CVC: "",
    country: "",
  });

  const [cardError, setCardError] = useState(false);
  const [expirationError, setExpirationError] = useState(false);
  const [cvcError, setCvcError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const startTrial = (event) => {
    event.preventDefault();
    if (formData.card_number == "") {
      setCardError(true);
    } else {
      setCardError(false);
    }
    if (formData.expiration == "") {
      setExpirationError(true);
    } else {
      setExpirationError(false);
    }
    if (formData.CVC == "") {
      setCvcError(true);
    } else {
      setCvcError(false);
    }
    if (formData.country == "") {
      setCountryError(true);
    } else {
      setCountryError(false);
    }
  };

  return (
    <div>
      <Navbartwo />
      <div className="text-center py-3 w-[100%] bg-[#FF932F]">
        <p className="text-[white] font-light text-[16px]">
          Special Welcome Offer! Get <b>85%</b> Discount Today!
        </p>
      </div>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#F6F9FF]">
        <div className="bg-gradient-to-r from-[#FFFFFF] md:flex justify-between flex-row-reverse to-[#F6F9FF] px-3 md:px-0 py-10 md:py-20 max-w-[1276px] m-auto">
          <div className=" hidden  md:flex ">
            <IqCard imgSource="musk" name="Elon Musk" text="IQ 164" />
            <div className="md:pt-20 md:ml-4">
              <IqCard imgSource="me" name="You" text="IQ ???" />
            </div>
            <div className="md:pt-10 md:ml-4">
              <IqCard imgSource="gomez" name="Selena Gomez" text="IQ 112" />
            </div>
          </div>
          <img
            src="/images/mobile-hero.png"
            className="d-block md:hidden mx-auto"
          />
          <div>
            <h1 className="text-[#191919] pb-8 text-[38px]  leading-[48px] md:text-[68px] pt-8 md:pr-[60px] font-bold tracking-[3%] md:leading-[78px]">
              Your IQ score is ready!
            </h1>
            <ul>
              <li className="flex text-[#8893AC] tracking-wide pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 fill-[#FF932F] mr-1 pb-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Discover your intelligence level
              </li>
              <li className="flex text-[#8893AC] tracking-wide pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 fill-[#FF932F] mr-1 pb-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Compare your abilities with others
              </li>
              <li className="flex text-[#8893AC] tracking-wide pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6 fill-[#FF932F] mr-1 pb-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Identify your strengths and weaknesses
              </li>
            </ul>
            <button className="text-white mt-8 text-[20px] px-8 py-4 rounded-md bg-[#FF932F] w-full md:w-auto font-semibold">
              Get My IQ Score Now!
            </button>
          </div>
        </div>
        <div className="max-w-[1275px] mx-auto">
          <PauseOnHover />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1056px] mx-auto md:flex px-3 md:px-0 pb-[6px]  md:py-20 pt-24">
          <div className="text-[#191919] md:w-1/2">
            <p className="text-[#FF932F] text-[16px] bg-[#FF932F1A] max-w-[378px] font-bold p-1 pt-2 text-center mb-2">
              Over 3492 tests taken today Avg. IQ score: 103
            </p>
            <h4 className=" text-center md:text-left text-[20px] md:text-[26px] font-bold pb-2 md:pb-5">
              Try IQ International for 7 days
            </h4>
            <div className="bg-[#C1CFE91A] text-[16px] p-2 pt-4 md:pr-12 rounded-lg">
              <ul>
                <li className="flex pb-3 ml-3">
                  <div className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FF932F" />
                      <path
                        d="M14.114 6.27036C14.5455 5.90988 15.245 5.90988 15.6764 6.27036C16.1026 6.62643 16.1078 7.201 15.6921 7.56243L9.81144 13.7043C9.80296 13.7131 9.79389 13.7216 9.78428 13.7296C9.35284 14.0901 8.65333 14.0901 8.22189 13.7296L4.32358 10.4725C3.89214 10.112 3.89214 9.52753 4.32358 9.16704C4.75502 8.80656 5.45453 8.80656 5.88597 9.16704L8.9698 11.7437L14.0847 6.29798C14.0938 6.28829 14.1036 6.27907 14.114 6.27036Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p>
                    Receive your accurate <b>IQ score</b> through our
                    scientifically validated assessment
                  </p>
                </li>
                <li className="flex pb-3 ml-3">
                  <div className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FF932F" />
                      <path
                        d="M14.114 6.27036C14.5455 5.90988 15.245 5.90988 15.6764 6.27036C16.1026 6.62643 16.1078 7.201 15.6921 7.56243L9.81144 13.7043C9.80296 13.7131 9.79389 13.7216 9.78428 13.7296C9.35284 14.0901 8.65333 14.0901 8.22189 13.7296L4.32358 10.4725C3.89214 10.112 3.89214 9.52753 4.32358 9.16704C4.75502 8.80656 5.45453 8.80656 5.88597 9.16704L8.9698 11.7437L14.0847 6.29798C14.0938 6.28829 14.1036 6.27907 14.114 6.27036Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p>
                    <b>Understand</b> your <b>position</b> relative to the
                    general population
                  </p>
                </li>
                <li className="flex pb-3 ml-3">
                  <div className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FF932F" />
                      <path
                        d="M14.114 6.27036C14.5455 5.90988 15.245 5.90988 15.6764 6.27036C16.1026 6.62643 16.1078 7.201 15.6921 7.56243L9.81144 13.7043C9.80296 13.7131 9.79389 13.7216 9.78428 13.7296C9.35284 14.0901 8.65333 14.0901 8.22189 13.7296L4.32358 10.4725C3.89214 10.112 3.89214 9.52753 4.32358 9.16704C4.75502 8.80656 5.45453 8.80656 5.88597 9.16704L8.9698 11.7437L14.0847 6.29798C14.0938 6.28829 14.1036 6.27907 14.114 6.27036Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p>
                    Discover your cognitive <b>strengths</b> and areas for{" "}
                    <b>improvement </b>
                  </p>
                </li>

                <li className="flex pb-3 ml-3">
                  <div className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FF932F" />
                      <path
                        d="M14.114 6.27036C14.5455 5.90988 15.245 5.90988 15.6764 6.27036C16.1026 6.62643 16.1078 7.201 15.6921 7.56243L9.81144 13.7043C9.80296 13.7131 9.79389 13.7216 9.78428 13.7296C9.35284 14.0901 8.65333 14.0901 8.22189 13.7296L4.32358 10.4725C3.89214 10.112 3.89214 9.52753 4.32358 9.16704C4.75502 8.80656 5.45453 8.80656 5.88597 9.16704L8.9698 11.7437L14.0847 6.29798C14.0938 6.28829 14.1036 6.27907 14.114 6.27036Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p>
                    Benefit from a personalized training program proven to{" "}
                    <b>increase IQ</b> by up to <b>37%</b> in just 4 weeks
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-between pt-5 pb-3 border-b-2">
              <h5 className="text-[20px] font-bold pt-6">Total due today:</h5>
              <div>
                <p className="text-[#FF932F] font-bold text-[14px] text-right">
                  You save 85%
                </p>

                <p className="text-[20px] font-bold">
                  <span className="text-[#8893AC] text-[14px] pr-2 line-through">
                    €10.57
                  </span>
                  €0.70
                </p>
              </div>
            </div>
            <p className="text-[14px] pt-5 pb-3 text-center md:text-left">
              Your 7-day trial will cost only €0.70.{" "}
              <br className="d-block md:hidden" /> Afterwards, it will be
              €19.90/week
            </p>
            <div className="bg-[#FFF4EA] flex mt-2">
              <svg
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
                className="m-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.875 2.75H23.3125V1.5625C23.3125 1.24756 23.1874 0.94551 22.9647 0.722811C22.742 0.500111 22.4399 0.375 22.125 0.375C21.8101 0.375 21.508 0.500111 21.2853 0.722811C21.0626 0.94551 20.9375 1.24756 20.9375 1.5625V2.75H9.0625V1.5625C9.0625 1.24756 8.93739 0.94551 8.71469 0.722811C8.49199 0.500111 8.18994 0.375 7.875 0.375C7.56006 0.375 7.25801 0.500111 7.03531 0.722811C6.81261 0.94551 6.6875 1.24756 6.6875 1.5625V2.75H3.125C2.49511 2.75 1.89102 3.00022 1.44562 3.44562C1.00022 3.89102 0.75 4.49511 0.75 5.125V28.875C0.75 29.5049 1.00022 30.109 1.44562 30.5544C1.89102 30.9998 2.49511 31.25 3.125 31.25H26.875C27.5049 31.25 28.109 30.9998 28.5544 30.5544C28.9998 30.109 29.25 29.5049 29.25 28.875V5.125C29.25 4.49511 28.9998 3.89102 28.5544 3.44562C28.109 3.00022 27.5049 2.75 26.875 2.75ZM19.4027 23.2848C19.513 23.3952 19.6005 23.5262 19.6602 23.6703C19.7199 23.8145 19.7507 23.969 19.7507 24.125C19.7507 24.281 19.7199 24.4355 19.6602 24.5797C19.6005 24.7238 19.513 24.8548 19.4027 24.9652C19.2923 25.0755 19.1613 25.163 19.0172 25.2227C18.873 25.2824 18.7185 25.3132 18.5625 25.3132C18.4065 25.3132 18.252 25.2824 18.1078 25.2227C17.9637 25.163 17.8327 25.0755 17.7223 24.9652L15 22.2413L12.2777 24.9652C12.1673 25.0755 12.0363 25.163 11.8922 25.2227C11.748 25.2824 11.5935 25.3132 11.4375 25.3132C11.2815 25.3132 11.127 25.2824 10.9828 25.2227C10.8387 25.163 10.7077 25.0755 10.5973 24.9652C10.487 24.8548 10.3995 24.7238 10.3398 24.5797C10.2801 24.4355 10.2493 24.281 10.2493 24.125C10.2493 23.969 10.2801 23.8145 10.3398 23.6703C10.3995 23.5262 10.487 23.3952 10.5973 23.2848L13.3212 20.5625L10.5973 17.8402C10.3745 17.6173 10.2493 17.3151 10.2493 17C10.2493 16.6849 10.3745 16.3827 10.5973 16.1598C10.8202 15.937 11.1224 15.8118 11.4375 15.8118C11.7526 15.8118 12.0548 15.937 12.2777 16.1598L15 18.8837L17.7223 16.1598C17.8327 16.0495 17.9637 15.962 18.1078 15.9023C18.252 15.8426 18.4065 15.8118 18.5625 15.8118C18.7185 15.8118 18.873 15.8426 19.0172 15.9023C19.1613 15.962 19.2923 16.0495 19.4027 16.1598C19.513 16.2702 19.6005 16.4012 19.6602 16.5453C19.7199 16.6895 19.7507 16.844 19.7507 17C19.7507 17.156 19.7199 17.3105 19.6602 17.4547C19.6005 17.5988 19.513 17.7298 19.4027 17.8402L16.6788 20.5625L19.4027 23.2848ZM26.875 9.875H3.125V5.125H6.6875V6.3125C6.6875 6.62744 6.81261 6.92949 7.03531 7.15219C7.25801 7.37489 7.56006 7.5 7.875 7.5C8.18994 7.5 8.49199 7.37489 8.71469 7.15219C8.93739 6.92949 9.0625 6.62744 9.0625 6.3125V5.125H20.9375V6.3125C20.9375 6.62744 21.0626 6.92949 21.2853 7.15219C21.508 7.37489 21.8101 7.5 22.125 7.5C22.4399 7.5 22.742 7.37489 22.9647 7.15219C23.1874 6.92949 23.3125 6.62744 23.3125 6.3125V5.125H26.875V9.875Z"
                  fill="#FF932F"
                />
              </svg>
              <div>
                <p className="text-[14px] font-bold pt-2">No commitment</p>
                <p className="text-[#191919B2] text-[14px]">Cancel anytime</p>
              </div>
            </div>
            <div className="bg-[#FFF4EA] flex mt-2">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                className="m-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.875 0.9375H3.125C2.49511 0.9375 1.89102 1.18772 1.44562 1.63312C1.00022 2.07852 0.75 2.68261 0.75 3.3125V11.625C0.75 19.4506 4.53813 24.1932 7.71617 26.7938C11.1391 29.5934 14.5443 30.5434 14.6927 30.5834C14.8968 30.639 15.1121 30.639 15.3162 30.5834C15.4646 30.5434 18.8653 29.5934 22.2927 26.7938C25.4619 24.1932 29.25 19.4506 29.25 11.625V3.3125C29.25 2.68261 28.9998 2.07852 28.5544 1.63312C28.109 1.18772 27.5049 0.9375 26.875 0.9375ZM21.7806 11.2777L13.4681 19.5902C13.3578 19.7006 13.2269 19.7882 13.0827 19.8479C12.9386 19.9077 12.784 19.9384 12.628 19.9384C12.4719 19.9384 12.3174 19.9077 12.1732 19.8479C12.0291 19.7882 11.8981 19.7006 11.7878 19.5902L8.22531 16.0277C8.00249 15.8048 7.87731 15.5026 7.87731 15.1875C7.87731 14.8724 8.00249 14.5702 8.22531 14.3473C8.44814 14.1245 8.75035 13.9993 9.06547 13.9993C9.38059 13.9993 9.6828 14.1245 9.90563 14.3473L12.625 17.0712L20.0973 9.59734C20.2077 9.48701 20.3387 9.39949 20.4828 9.33978C20.627 9.28007 20.7815 9.24934 20.9375 9.24934C21.0935 9.24934 21.248 9.28007 21.3922 9.33978C21.5363 9.39949 21.6673 9.48701 21.7777 9.59734C21.888 9.70767 21.9755 9.83866 22.0352 9.98281C22.0949 10.127 22.1257 10.2815 22.1257 10.4375C22.1257 10.5935 22.0949 10.748 22.0352 10.8922C21.9755 11.0363 21.888 11.1673 21.7777 11.2777H21.7806Z"
                  fill="#FF932F"
                />
              </svg>
              <div>
                <p className="text-[14px] font-bold pt-2">
                  30-day money-back guarantee
                </p>
                <p className="text-[#191919B2] text-[14px]">
                  We will remind you 2 days before your trial ends
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-16">
            <div className="flex justify-between pt-5 md:pt-0 pb-2">
              <div class="text-center md:text-left py-4 md:py-0">
                <p className="text-[20px] md:text-[26px] font-bold">
                  Payment Details
                </p>
              </div>
              <div className="mt-3 md:mt-0">
                <p className="text-[#FF932F] flex bg-[#FF932F1A] p-2 pb-1 px-4">
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                    className="mt-0.5 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9833 5.1197C13.9754 4.68772 13.9678 4.27964 13.9678 3.88485C13.9678 3.57556 13.7254 3.32481 13.4263 3.32481C11.1103 3.32481 9.34702 2.63648 7.87723 1.15858C7.66697 0.947104 7.33238 0.947179 7.1222 1.15858C5.65255 2.63648 3.88955 3.32481 1.57375 3.32481C1.27468 3.32481 1.03222 3.57556 1.03222 3.88485C1.03222 4.27971 1.02471 4.68794 1.01669 5.12C0.942466 9.14003 0.840803 14.6457 7.32234 16.9691C7.37982 16.9897 7.43975 17 7.49968 17C7.55961 17 7.61961 16.9897 7.67701 16.9691C14.1591 14.6456 14.0575 9.13981 13.9833 5.1197ZM7.49975 15.8456C1.94098 13.7573 2.02502 9.18252 2.09961 5.14135C2.10408 4.89882 2.10842 4.66375 2.11145 4.43331C4.28046 4.33863 6.01495 3.65889 7.49975 2.32122C8.9847 3.65889 10.7195 4.3387 12.8886 4.43331C12.8917 4.66368 12.896 4.89859 12.9005 5.14098C12.975 9.1823 13.059 13.7572 7.49975 15.8456Z"
                      fill="#FF932F"
                      stroke="#FF932F"
                      stroke-width="0.5"
                    />
                    <path
                      d="M9.35587 7.32418L9.35588 7.32417C9.44631 7.22526 9.58286 7.22528 9.67328 7.32421L9.67334 7.32428C9.77555 7.43603 9.77558 7.62585 9.67328 7.73772L9.67325 7.73775L6.98715 10.6758L6.98715 10.6758C6.93919 10.7283 6.88162 10.75 6.82843 10.75C6.77524 10.75 6.71767 10.7283 6.66971 10.6758L5.3267 9.2068C5.22445 9.09496 5.22441 8.90514 5.32672 8.79319C5.41709 8.69437 5.55366 8.69433 5.64413 8.79322C5.64414 8.79323 5.64415 8.79324 5.64416 8.79325L6.64392 9.88683L6.82843 10.0887L7.01294 9.88683L9.35587 7.32418Z"
                      fill="#FF932F"
                      stroke="#FF932F"
                      stroke-width="0.5"
                    />
                  </svg>
                  100% security
                </p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4 pb-2">
              <button className="py-4 px-8 shadow-[0_4px_8px_0px_#003A6F0D] rounded-xl w-1/3">
                <Image
                  src="/images/paypal.png"
                  width={66}
                  height={17}
                  className="d-block mx-auto"
                />
              </button>
              <button className="py-3 px-8 shadow-[0_4px_8px_0px_#003A6F0D] rounded-xl w-1/3">
                {" "}
                <Image
                  src="/images/applepay.svg"
                  width={63}
                  height={16}
                  className="d-block mx-auto"
                />
              </button>
              <button className="py-3 px-8 shadow-[0_4px_8px_0px_#003A6F0D] rounded-xl w-1/3">
                {" "}
                <Image
                  src="/images/gpay.svg"
                  width={63}
                  height={16}
                  className="d-block mx-auto"
                />
              </button>
            </div>
            <div className="py-4">
              <form onSubmit={startTrial}>
                <div class="mb-4 relative">
                  <input
                    class={` appearance-none border ${
                      cardError == true ? "border-red-500" : "border"
                    } font-light rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline`}
                    id="card_number"
                    name="card_number"
                    type="text"
                    onChange={handleChange}
                    placeholder="Card Number"
                  />
                  <Image
                    src="/images/cards.png"
                    width={206}
                    height={24}
                    className="absolute right-2 top-3"
                  />
                  {cardError == true && (
                    <span className="flex text-[14px] text-[#ED350D] pt-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.3125 7.3125L10.6875 10.6875M10.6875 7.3125L7.3125 10.6875M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9Z"
                          stroke="#ED350D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Please enter a card number
                    </span>
                  )}
                  <div className="flex pt-4 justify-between">
                    <div class="mb-4 w-full mr-2">
                      <input
                        class={` appearance-none border ${
                          expirationError == true ? "border-red-500" : "border"
                        } font-light rounded-md w-full  py-3 px-3 leading-tight w-100 focus:outline-none focus:shadow-outline`}
                        id="expiration"
                        name="expiration"
                        onChange={handleChange}
                        type="text"
                        placeholder="Expiration"
                      />
                      {expirationError == true && (
                        <span className="flex text-[14px] text-[#ED350D] pt-1">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            className="mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.3125 7.3125L10.6875 10.6875M10.6875 7.3125L7.3125 10.6875M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9Z"
                              stroke="#ED350D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Please enter an expiration date
                        </span>
                      )}
                    </div>
                    <div class="mb-4 w-full ml-2">
                      <input
                        class={`   appearance-none border ${
                          cvcError == true ? "border-red-500" : "border"
                        }  font-light rounded-md w-full  py-3 px-3 leading-tight focus:outline-none focus:shadow-outline`}
                        id="card_number"
                        name="CVC"
                        type="text"
                        onChange={handleChange}
                        placeholder="CVC"
                      />
                      {cvcError == true && (
                        <span className="flex text-[14px] text-[#ED350D] pt-1">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            className="mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.3125 7.3125L10.6875 10.6875M10.6875 7.3125L7.3125 10.6875M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9Z"
                              stroke="#ED350D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Please enter a CVC
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="relative cursor-pointer rounded-md">
                    <select
                      class={`block appearance-none border font-light w-full ${
                        countryError == true ? "border-red-500" : ""
                      } text-gray-400 py-3 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                      name="country"
                      id="country"
                    >
                      <option value=""></option>
                      <option value="Country">Country</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Texas">Texas</option>
                    </select>
                    {countryError == true && (
                      <span className="flex text-[14px] text-[#ED350D] pt-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.3125 7.3125L10.6875 10.6875M10.6875 7.3125L7.3125 10.6875M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9Z"
                            stroke="#ED350D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Please select a country
                      </span>
                    )}
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="bg-[#FF932F] py-3.5 flex w-full rounded-md text-center mt-4">
                  <div className="flex w-[200px] m-auto text-white font-bold text-[20px]">
                    <svg
                      width="12"
                      height="17"
                      viewBox="0 0 12 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-4"
                    >
                      <path
                        d="M6.04549 9.29492C5.77629 9.29696 5.51553 9.38908 5.30479 9.55659C5.09406 9.72411 4.94548 9.95736 4.88277 10.2192C4.82005 10.481 4.84681 10.7562 4.95876 11.001C5.07072 11.2459 5.26144 11.4461 5.50049 11.5699V12.9999H6.50049V11.6149C6.75866 11.5091 6.97211 11.317 7.10442 11.0714C7.23674 10.8257 7.27972 10.5418 7.22602 10.268C7.17232 9.99422 7.02528 9.74755 6.80999 9.57009C6.5947 9.39263 6.32449 9.29537 6.04549 9.29492Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.6189 6.3787H10.1189V4.35986C10.1407 3.24451 9.71993 2.16589 8.94862 1.35988C8.17704 0.553574 7.11749 0.0855945 6.00181 0.0585938L5.996 0.0587344C4.88033 0.0857351 3.82077 0.553574 3.04919 1.35988C2.27788 2.16589 1.85713 3.24452 1.87891 4.35988V6.3787H0.378906V14.9987C0.378906 15.2957 0.496906 15.5806 0.706947 15.7907C0.916988 16.0007 1.20186 16.1187 1.49891 16.1187H10.4989C10.7959 16.1187 11.0808 16.0007 11.2909 15.7907C11.5009 15.5806 11.6189 15.2957 11.6189 14.9987V6.3787ZM8.96045 1.54952C9.64672 2.31994 10.0186 3.32259 9.99805 4.35773V6.49774L9.99891 4.3587C10.0194 3.32312 9.64727 2.32007 8.96045 1.54952ZM11.498 6.4987V14.9977C11.498 15.263 11.3927 15.5173 11.2052 15.7048C11.0176 15.8924 10.7633 15.9977 10.498 15.9977H1.49805C1.23283 15.9977 0.978476 15.8924 0.79094 15.7048C0.777175 15.6911 0.763852 15.677 0.750982 15.6625C0.764118 15.6773 0.777728 15.6917 0.791799 15.7058C0.979336 15.8933 1.23369 15.9987 1.49891 15.9987H10.4989C10.7641 15.9987 11.0185 15.8933 11.206 15.7058C11.3935 15.5183 11.4989 15.2639 11.4989 14.9987L11.498 6.4987ZM3.11891 6.3787V4.3587L3.11886 4.35554C3.09814 3.56836 3.38983 2.80497 3.9302 2.23218C4.46969 1.66032 5.21326 1.32486 5.99891 1.29876C6.78455 1.32486 7.52812 1.66032 8.06761 2.23218C8.60798 2.80497 8.89963 3.56836 8.87891 4.35554V6.3787H3.11891ZM3.84291 2.14984C4.40504 1.55398 5.18016 1.20484 5.99891 1.1787C6.81765 1.20484 7.59277 1.55398 8.1549 2.14984C8.17561 2.17179 8.19597 2.19402 8.21598 2.2165C8.1957 2.19369 8.17505 2.17114 8.15404 2.14887C7.59191 1.55302 6.81679 1.20388 5.99805 1.17773C5.1793 1.20388 4.40418 1.55302 3.84205 2.14887C3.27993 2.74473 2.97649 3.53885 2.99805 4.35773V6.49774L2.99891 4.3587C2.97735 3.53982 3.28078 2.74569 3.84291 2.14984ZM1.61891 14.8787V7.6187H10.3789V14.8787H1.61891ZM1.49891 14.9977L1.49805 7.49774H10.498L1.49891 7.4987V14.9977Z"
                        fill="white"
                      />
                    </svg>
                    Start 7-day Trial
                  </div>
                </button>
              </form>
            </div>

            <div className="text-[#8893AC] text-[16px] mt-3">
              <div className="flex m-auto w-[350px] font-light">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 mt-0.5"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3238 6.50654H12.6571V14.1688C12.6571 14.4328 12.5522 14.686 12.3655 14.8727C12.1788 15.0594 11.9256 15.1643 11.6616 15.1643H3.66157C3.39753 15.1643 3.14431 15.0594 2.95761 14.8727C2.7709 14.686 2.66602 14.4328 2.66602 14.1688V6.50654H3.99935V4.71204C3.97999 3.72061 4.35399 2.76183 5.0396 2.04537C5.72545 1.32865 6.66728 0.912798 7.65899 0.888797L7.66416 0.888672C8.65587 0.912673 9.59769 1.32865 10.2835 2.04537C10.9691 2.76182 11.3431 3.7206 11.3238 4.71202V6.50654ZM11.2164 4.71013C11.2346 3.79 10.9041 2.89876 10.2941 2.21394C10.9046 2.89887 11.2354 3.79048 11.2171 4.71099L11.2164 6.61235V4.71013ZM12.5497 14.1679V6.61321L12.5505 14.1688C12.5505 14.4045 12.4568 14.6306 12.2901 14.7973C12.1234 14.964 11.8973 15.0577 11.6616 15.0577H3.66157C3.42582 15.0577 3.19973 14.964 3.03303 14.7973C3.02052 14.7848 3.00843 14.772 2.99675 14.7588C3.00819 14.7717 3.02003 14.7842 3.03227 14.7964C3.19897 14.9631 3.42506 15.0568 3.66081 15.0568H11.6608C11.8966 15.0568 12.1226 14.9631 12.2893 14.7964C12.456 14.6298 12.5497 14.4037 12.5497 14.1679ZM5.10157 4.71099V6.50654H10.2216V4.70818C10.24 4.00846 9.98075 3.3299 9.50042 2.82075C9.02087 2.31243 8.35992 2.01424 7.66157 1.99104C6.96322 2.01424 6.30227 2.31243 5.82272 2.82075C5.34239 3.3299 5.08311 4.00846 5.10153 4.70818L5.10157 4.71099ZM7.66157 1.88432C6.9338 1.90756 6.2448 2.21791 5.74513 2.74756C5.24546 3.2772 4.97574 3.98309 4.9949 4.71099L4.99414 6.61235V4.71013C4.97498 3.98224 5.2447 3.27635 5.74437 2.7467C6.24404 2.21705 6.93303 1.9067 7.66081 1.88346C8.38858 1.9067 9.07758 2.21705 9.57725 2.7467C9.59592 2.76649 9.61427 2.78653 9.6323 2.80681C9.61452 2.78682 9.59642 2.76707 9.57801 2.74756C9.07834 2.21791 8.38935 1.90756 7.66157 1.88432Z"
                    fill="#8893AC"
                  />
                  <path
                    d="M7.70363 9.09961C7.46434 9.10142 7.23256 9.18331 7.04523 9.33221C6.85791 9.48111 6.72585 9.68845 6.6701 9.92115C6.61435 10.1539 6.63813 10.3985 6.73765 10.6162C6.83717 10.8338 7.00669 11.0118 7.21918 11.1218V12.3929H8.10807V11.1618C8.33756 11.0678 8.52729 10.897 8.6449 10.6787C8.76252 10.4603 8.80072 10.2079 8.75299 9.96458C8.70526 9.72121 8.57456 9.50195 8.38319 9.3442C8.19181 9.18646 7.95163 9.10001 7.70363 9.09961Z"
                    fill="white"
                  />
                </svg>
                All transactions are secure and encrypted
              </div>
            </div>
            <Image
              src="/images/secure.svg"
              width={99}
              height={38}
              className="m-auto mt-5 bg-[#F6F9FF]"
            />
          </div>
        </div>
        <div className="max-w-[1276px] mx-auto mt-16 px-3 md:px-0 pb-8">
          <div className="md:flex">
            <h2 className="text-[38px] md:text-[52px] md:w-2/5 font-bold tracking-tight leading-[56px]">
              Why You Can Trust <br /> IQ International
            </h2>
            <p className="hidden md:block md:w-3/5 text-[#8893AC] font-[400] md:pl-12 leading-[26px] text-[18px]">
              IQ International is a trusted leader in cognitive development,
              offering accurate, research-backed content. With expert guidance
              and a proven track record, we ensure reliable, user-focused
              courses to help you reach your intellectual potential. Choose us
              for a clear path to smarter thinking
            </p>
          </div>
          <div className="md:flex py-10 md:py-20">
            <div className="bg-[#E7F6EF] py-7 px-6 md:w-1/3">
              <svg
                width="28"
                height="69"
                viewBox="0 0 28 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7827 68.4996H16.1256V17.8885C12.9199 22.357 7.77138 24.6884 0.777138 24.6884H0V13.5171H0.777138C10.8799 13.5171 16.2228 9.33995 16.2228 1.47142V0.5H27.7827V68.4996Z"
                  fill="url(#paint0_linear_1810_4866)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1810_4866"
                    x1="13.8913"
                    y1="0.5"
                    x2="13.8913"
                    y2="68.4996"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#13A768" />
                    <stop offset="1" stop-color="#13A768" stop-opacity="0.25" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className="pt-6 pb-2 text-[#191919] text-[24px] font-bold">
                Validated IQ Test
              </h4>
              <p className="text-[#8893AC] font-[400] leading-[26px] text-[16px]">
                Our test is based on the Stanford-Binet Intelligence Scale,
                since 1916, it has been the gold standard in the IQ testing
                industry
              </p>
            </div>
            <div className="bg-[#EBF8FF] py-7 my-4 md:my-0 px-6 md:w-1/3 md:mx-5">
              <svg
                width="48"
                height="69"
                viewBox="0 0 48 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.0655 20.7573C47.0655 42.7266 17.2446 42.7266 14.4817 58.2287H45.8269V68.5H1.52439V62.2231C1.52439 36.735 35.442 37.9713 35.442 21.1378C35.442 14.9559 31.1547 10.7713 24.5808 10.7713C17.6257 10.7713 12.1951 15.4315 12.0046 23.9909H0C1.04802 8.96434 11.3376 0.5 24.7713 0.5C38.1097 0.5 47.0655 8.67902 47.0655 20.7573Z"
                  fill="url(#paint0_linear_1810_4872)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1810_4872"
                    x1="23.5327"
                    y1="0.5"
                    x2="23.5327"
                    y2="68.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#39BAFF" />
                    <stop offset="1" stop-color="#39BAFF" stop-opacity="0.25" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className="pt-6 pb-2 text-[#191919] text-[24px] font-bold">
                Comprehensive Report
              </h4>
              <p className="text-[#8893AC] font-[400] leading-[26px] text-[16px]">
                We generate you custom report with a widely accepted method -
                the Cattell-Horn-Carroll (CHC) theory of cognitive abilities.
              </p>
            </div>
            <div className="bg-[#FFF4EA] py-7 px-6 md:w-1/3">
              <svg
                width="51"
                height="69"
                viewBox="0 0 51 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.7147 68.5C11.3024 68.5 0.747264 60.0349 0 46.2674H11.4892C12.143 53.8023 18.0277 58.3605 26.7147 58.3605C34.7478 58.3605 39.7918 54.3605 39.7918 48.2209C39.7918 42.1744 34.8412 38.4535 26.6213 38.4535H16.4398V29.2442H26.6213C33.2532 29.2442 37.2698 25.0581 37.2698 19.9419C37.2698 14.5465 32.8796 10.5465 26.3411 10.5465C19.7091 10.5465 14.6651 14.7326 13.8244 21.1512H2.24179C3.5495 8.68605 13.2639 0.5 26.7147 0.5C39.4182 0.5 48.4788 7.75582 48.4788 17.8954C48.4788 25.6163 43.1545 31.5698 35.3082 33.2442C44.9293 35.0116 50.7205 41.1512 50.7205 49.8023C50.7205 60.8721 41.1929 68.5 26.7147 68.5Z"
                  fill="url(#paint0_linear_1810_4878)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1810_4878"
                    x1="25.3603"
                    y1="0.5"
                    x2="25.3603"
                    y2="68.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF932F" />
                    <stop offset="1" stop-color="#FF932F" stop-opacity="0.25" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className="pt-6 pb-2 text-[#191919] text-[24px] font-bold">
                Neuroscience-backed training
              </h4>
              <p className="text-[#8893AC] font-[400] leading-[26px] text-[16px]">
                Our neuroscience-based cognitive training boosts mental
                performance and IQ with quick, measurable results and simple
                steps
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1276px] m-auto py-10 px-3 md:px-0">
        <h1 className="text-[38px] md:text-[52px] text-center font-bold tracking-tight leading-[56px] py-20">
          How Improving Your IQ Score <br className="hidden md:block" />
          Can Impact Your Life
        </h1>
        <div className="md:flex md:space-x-6 md:mb-10">
          <ImproveCard
            imgSource="improve_1"
            header="Confident solutions"
            text="Tackle complex problems with clarity 
and confidence"
          />
          <ImproveCard
            imgSource="improve_2"
            header="Surpass competitors"
            text="Excel in competitive environments 
and outperform others"
          />
          <ImproveCard
            imgSource="improve_3"
            header="Skill mastery"
            text="Master new skills quickly and retain 
information longer"
          />
        </div>
        <div className="md:flex md:space-x-6 md:mb-10">
          <ImproveCard
            imgSource="improve_4"
            header="Career advancement"
            text="Unlock new career paths and achieve your professional goals  "
          />
          <ImproveCard
            imgSource="improve_5"
            header="Smart choices"
            text="Make better decisions in every aspect 
of your life"
          />
          <ImproveCard
            imgSource="improve_6"
            header="Confidently conquer"
            text="Boost your confidence to take on new challenges with ease"
          />
        </div>
      </div>
      <div className=" bg-white">
        <div className="m-auto max-w-[1276px] pt-12 pb-12  md:pt-24 md:pb-36 relative ">
          <h1 className=" font-bold tracking-tight text-center md:text-left leading-[56px] text-[52px]">
            Reviews
          </h1>
          <div className="flex w-[300px] mx-auto  md:mx-0 md:w-auto py-1 md:pt-6 md:pb-3">
            {" "}
            <p className="font-bold  text-[32px] text-[#FF932F]">4,5</p>{" "}
            <svg
              width="106"
              height="18"
              viewBox="0 0 106 18"
              fill="none"
              className="mt-3 ml-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip1_1810_4452)">
                <path
                  d="M9.97926 0.632742C9.7986 0.246066 9.41683 0 8.99755 0C8.57828 0 8.19991 0.246066 8.01584 0.632742L5.82403 5.28339L0.929098 6.02862C0.52005 6.0919 0.179178 6.38718 0.053055 6.79143C-0.0730679 7.19568 0.0291938 7.64211 0.322344 7.94091L3.87424 11.5651L3.03569 16.6868C2.96752 17.1086 3.13795 17.5375 3.47542 17.7871C3.81288 18.0367 4.25942 18.0683 4.62756 17.8679L9.00096 15.46L13.3744 17.8679C13.7425 18.0683 14.189 18.0402 14.5265 17.7871C14.864 17.534 15.0344 17.1086 14.9662 16.6868L14.1243 11.5651L17.6762 7.94091C17.9693 7.64211 18.075 7.19568 17.9455 6.79143C17.8159 6.38718 17.4785 6.0919 17.0694 6.02862L12.1711 5.28339L9.97926 0.632742Z"
                  fill="#FF932F"
                />
              </g>
              <g clip-path="url(#clip2_1810_4452)">
                <path
                  d="M31.9793 0.632742C31.7986 0.246066 31.4168 0 30.9976 0C30.5783 0 30.1999 0.246066 30.0158 0.632742L27.824 5.28339L22.9291 6.02862C22.5201 6.0919 22.1792 6.38718 22.0531 6.79143C21.9269 7.19568 22.0292 7.64211 22.3223 7.94091L25.8742 11.5651L25.0357 16.6868C24.9675 17.1086 25.138 17.5375 25.4754 17.7871C25.8129 18.0367 26.2594 18.0683 26.6276 17.8679L31.001 15.46L35.3744 17.8679C35.7425 18.0683 36.189 18.0402 36.5265 17.7871C36.864 17.534 37.0344 17.1086 36.9662 16.6868L36.1243 11.5651L39.6762 7.94091C39.9693 7.64211 40.075 7.19568 39.9455 6.79143C39.8159 6.38718 39.4785 6.0919 39.0694 6.02862L34.1711 5.28339L31.9793 0.632742Z"
                  fill="#FF932F"
                />
              </g>
              <g clip-path="url(#clip3_1810_4452)">
                <path
                  d="M53.9793 0.632742C53.7986 0.246066 53.4168 0 52.9976 0C52.5783 0 52.1999 0.246066 52.0158 0.632742L49.824 5.28339L44.9291 6.02862C44.5201 6.0919 44.1792 6.38718 44.0531 6.79143C43.9269 7.19568 44.0292 7.64211 44.3223 7.94091L47.8742 11.5651L47.0357 16.6868C46.9675 17.1086 47.138 17.5375 47.4754 17.7871C47.8129 18.0367 48.2594 18.0683 48.6276 17.8679L53.001 15.46L57.3744 17.8679C57.7425 18.0683 58.189 18.0402 58.5265 17.7871C58.864 17.534 59.0344 17.1086 58.9662 16.6868L58.1243 11.5651L61.6762 7.94091C61.9693 7.64211 62.075 7.19568 61.9455 6.79143C61.8159 6.38718 61.4785 6.0919 61.0694 6.02862L56.1711 5.28339L53.9793 0.632742Z"
                  fill="#FF932F"
                />
              </g>
              <g clip-path="url(#clip4_1810_4452)">
                <path
                  d="M75.9793 0.632742C75.7986 0.246066 75.4168 0 74.9976 0C74.5783 0 74.1999 0.246066 74.0158 0.632742L71.824 5.28339L66.9291 6.02862C66.5201 6.0919 66.1792 6.38718 66.0531 6.79143C65.9269 7.19568 66.0292 7.64211 66.3223 7.94091L69.8742 11.5651L69.0357 16.6868C68.9675 17.1086 69.138 17.5375 69.4754 17.7871C69.8129 18.0367 70.2594 18.0683 70.6276 17.8679L75.001 15.46L79.3744 17.8679C79.7425 18.0683 80.189 18.0402 80.5265 17.7871C80.864 17.534 81.0344 17.1086 80.9662 16.6868L80.1243 11.5651L83.6762 7.94091C83.9693 7.64211 84.075 7.19568 83.9455 6.79143C83.8159 6.38718 83.4785 6.0919 83.0694 6.02862L78.1711 5.28339L75.9793 0.632742Z"
                  fill="#FF932F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1810_4452">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(88)"
                  />
                </clipPath>
                <clipPath id="clip1_1810_4452">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
                <clipPath id="clip2_1810_4452">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(22)"
                  />
                </clipPath>
                <clipPath id="clip3_1810_4452">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(44)"
                  />
                </clipPath>
                <clipPath id="clip4_1810_4452">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(66)"
                  />
                </clipPath>
              </defs>
            </svg>{" "}
            <p className="text-[18px] text-[#8893AC] pt-2.5">(343 reviews)</p>
          </div>
          <ReviewsSection />
        </div>
      </div>
      <div>
        <div className="max-w-[1276px] px-3 md:px-0 mx-auto py-10 md:pt-24 md:pb-36">
          <div className="md:flex">
            <h2 className="text-[38px] md:text-[52px] md:w-2/5 font-bold tracking-tight pb-5 md:pb-5 leading-[56px]">
              Frequently Asked Questions
            </h2>
            <div className="md:w-3/5 text-[#8893AC] font-[400] md:pl-12 leading-[26px] text-[18px]">
              <AccordionCheckout
                title="What is included?"
                content="The IQ International subscription offers a comprehensive package, including a scientifically validated IQ test, a detailed report highlighting your cognitive strengths and weaknesses, and a research-backed training program designed to improve IQ scores by up to 37% within four weeks."
              />
              <AccordionCheckout
                title="What if I'm not satisfied with the program?"
                content="The IQ International subscription offers a comprehensive package, including a scientifically validated IQ test, a detailed report highlighting your cognitive strengths and weaknesses, and a research-backed training program designed to improve IQ scores by up to 37% within four weeks."
              />
              <AccordionCheckout
                title="How long does it take to see results?"
                content="The IQ International subscription offers a comprehensive package, including a scientifically validated IQ test, a detailed report highlighting your cognitive strengths and weaknesses, and a research-backed training program designed to improve IQ scores by up to 37% within four weeks."
              />
              <AccordionCheckout
                title="Is the IQ assessment scientifically valid?"
                content="The IQ International subscription offers a comprehensive package, including a scientifically validated IQ test, a detailed report highlighting your cognitive strengths and weaknesses, and a research-backed training program designed to improve IQ scores by up to 37% within four weeks."
              />
              <AccordionCheckout
                title="How do I cancel my subscription?"
                content="The IQ International subscription offers a comprehensive package, including a scientifically validated IQ test, a detailed report highlighting your cognitive strengths and weaknesses, and a research-backed training program designed to improve IQ scores by up to 37% within four weeks."
              />
              <AccordionCheckout
                title="What is included?"
                content="The IQ International subscription offers a comprehensive package, including a scientifically validated IQ test, a detailed report highlighting your cognitive strengths and weaknesses, and a research-backed training program designed to improve IQ scores by up to 37% within four weeks."
              />
              <AccordionCheckout
                title="Can I access the program on multiple devices?"
                content="The IQ International subscription offers a comprehensive package, including a scientifically validated IQ test, a detailed report highlighting your cognitive strengths and weaknesses, and a research-backed training program designed to improve IQ scores by up to 37% within four weeks."
              />
              <AccordionCheckout
                title="What if I have additional questions or need support?"
                content="The IQ International subscription offers a comprehensive package, including a scientifically validated IQ test, a detailed report highlighting your cognitive strengths and weaknesses, and a research-backed training program designed to improve IQ scores by up to 37% within four weeks."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1276px] mx-auto pt-24 pb-36">
          <div className="px-5 md:px-0">
            <h1 className="text-[52px] text-center font-bold tracking-tight leading-[56px] pb-20">
              Latest results
            </h1>
            <div>
              <div className="md:flex w-full">
                <LatestResultPart
                  image="uk"
                  name="James Dallas"
                  iq="103"
                  mobileColored={false}
                />
                <LatestResultPart
                  image="spain"
                  name="Ramon Perez"
                  iq="95"
                  mobileColored={true}
                />
              </div>
              <div className="md:flex rounded-md md:bg-[#F6F9FF]">
                <LatestResultPart
                  image="canada"
                  name="Carmen Grande"
                  iq="94"
                  mobileColored={false}
                />
                <LatestResultPart
                  image="italia"
                  name="Franzisco Totti"
                  iq="87"
                  mobileColored={true}
                />
              </div>
              <div className="md:flex">
                <LatestResultPart
                  image="spain"
                  name="Miguel Suarez"
                  iq="88"
                  mobileColored={false}
                />
                <LatestResultPart
                  image="ghana"
                  name="Susanna Verde"
                  iq="103"
                  mobileColored={true}
                />
              </div>
              <div className="md:flex rounded-md md:bg-[#F6F9FF]">
                <LatestResultPart
                  image="mexico"
                  name="Carlos Ramirez"
                  iq="103"
                  mobileColored={false}
                />
                <LatestResultPart
                  image="brazil"
                  name="Zina Blanco"
                  iq="88"
                  mobileColored={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
