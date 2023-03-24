import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { layout } from "../styles";
import { styles } from "../styles";
import { BsArrowRight } from "react-icons/bs";
import {
  threePics,
  carousel,
  points,
  howWeWork,
} from "../constants/whatWeDoConstants";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import SliderCarousel from "../components/SliderCarousel";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import OurServices from "../components/OurServices";

export default function WhatWeDo() {
  return (
    <section
      className={`bg-white text-black w-full flex flex-col items-center `}
    >
      <div className={`${styles.paddingX} w-full`}>
        <Navbar bg="white" className="svg-black" />
      </div>
      {/* h2 with btn */}
      <div
        className={`${layout.headingWBtn} mt-[4rem] mb-[4rem] px-0 sm:px-[2.8rem] `}
      >
        <h2
          className={`ss:text-[2.2rem] sm:text-[2.7rem] md:text-[3.0rem] md:max-w-[75%] sm:max-w-[70%] sm:pt-[7rem] text-[1.9rem] max-w-[83%] mb-[2rem] text-center  font-semibold`}
        >
          We build connected brand systems for brands with purpose
        </h2>
        <Button bg="primary" text="white">
          Our Work
        </Button>
      </div>

      {/* 3 pics */}
      <div className="grid grid-cols-3 justify-center gap-x-10 gap-y-[4rem] w-full px-[2.8rem]">
        {threePics.map((pic) => (
          <div key={pic.id} className="flex flex-col col-span-3 md:col-span-1">
            <div className="relative flex-1 pt-[100%]">
              <iframe
                src={pic.img}
                className="absolute top-0 left-0 h-full w-full"
              />
            </div>
            <figcaption className="sm:text-center text-left font-semibold font-poppins text-[1.1rem] sm:text-[1.5rem]">
              {pic.id}
            </figcaption>
          </div>
        ))}
      </div>

      {/* text */}
      <div
        className={`flex flex-col items-center justify-center h-[100vh] my-[8rem] sm:my-0 sm:w-[47%] w-[70%] gap-y-[1.8rem] ${styles.paddingX}`}
      >
        <h2 className="text-[1.6rem] font-medium text-center">
          Brand <i>is</i> experience and experience <i>is</i> brand
        </h2>
        <p className="font-roboto text-[1rem] sm:text-[1.1rem] tracking-wider leading-[2.1rem]">
          A brand’s impact is measured over time, with each point of contact
          with their customers representing an opportunity to create meaningful
          connections — a website, social post, campaign billboard, magazine
          spread or a mobile checkout experience.
          <br className="block" />
          <br />
          Brands are defined by how they show up and across this entire
          ecosystem of experiences, yet there is often a gap between their
          vision and reality. Our goal is to build connected brand systems where
          each user experience is elevated and unified, down to the very last
          detail. What We Do carousel
        </p>
      </div>
      {/* carousel  - THINK HOW TO ADD SUBTITLE*/}

      <div className=" relative mb-[5rem]">
        <Splide
          hasTrack={false}
          options={{
            type: "fade",
            rewind: true,
            perPage: 1,
            pagination: false,
          }}
        >
          <div className="splide__arrows ">
            <button className="splide__arrow splide__blackarrow rounded-full splide__arrow--prev py-2 px-2 sm:w-[3rem] sm:h-[3rem]">
              <BsArrowRight />
            </button>
            <button className="splide__arrow splide__blackarrow splide__arrow--next rounded-full py-2 px-2 sm:w-[3rem] sm:h-[3rem]">
              <BsArrowRight />
            </button>
          </div>
          <SplideTrack>
            {carousel.map((pic) => (
              <SplideSlide key={pic.id} className="splide__slide sm:h-[90vh]  ">
                <img src={pic.img} className="object-center" />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
      {/* h2 */}
      <div
        className={`w-full flex items-center justify-center my-[6rem] sm:my-[10rem] ${styles.paddingX}`}
      >
        <h2 className="md:text-[2rem] sm:text-[1.7rem] text-[1.5rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%]">
          To create the highest caliber work — across brand, product and
          marketing — our teams are integrated from end to end; from vision
          through execution.
        </h2>
      </div>
      {/* points about company */}
      <div
        className={`flex flex-col items-center justify-center h-[100vh]  sm:my-0 sm:w-[47%] w-[70%] ${styles.paddingX}`}
      >
        {points.map((point) => (
          <div className="flex flex-col gap-x-10 mb-[1.8rem]">
            <h2 className="font-medium text-[1.1rem] sm:text-[1.2rem] sm:pb-1">
              {point.id}
            </h2>
            <p className=" leading-[1.8rem] sm:leading-[2.3rem] text-[1rem] sm:text-[1.1rem]">
              {point.p}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full overflow-hidden">
        <SliderCarousel />
      </div>
      <div
        className={`flex flex-col items-center justify-center  my-10 sm:my-[6.5rem] sm:w-[47%] w-[70%] ${styles.paddingX}`}
      >
        <h2 className="md:text-[2rem] sm:text-[1.7rem] text-[1.5rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%] mb-9">
          How We Work
        </h2>
        {howWeWork.map((point) => (
          <div key={point.id} className="flex flex-col gap-x-10 mb-[1.8rem]">
            <h2 className="font-medium text-[1.1rem] sm:text-[1.2rem] sm:pb-1">
              {point.h2}
            </h2>
            <p className=" leading-[1.8rem] sm:leading-[2.3rem] text-[1rem] sm:text-[1.1rem]">
              {point.p}
            </p>
          </div>
        ))}
      </div>
      {/* h2 */}
      <div
        className={`w-full flex flex-col items-center justify-center sm:mb-[18rem] sm:mt-[7rem] my-[6rem] ${styles.paddingX}`}
      >
        <h2 className="md:text-[2.7rem] sm:text-[2.3rem] text-[1.6rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%]">
          “I'm so grateful to the Instrument team for bringing such heart,
          energy and flexibility to help tell our story at such a pivotal time
          for Notion.”
        </h2>
        <p className="text-greyish text-roboto tracking-tight text-[0.9rem] w-[80%] sm:w-[75%] md:w-[65%] text-center mt-4">
          Roberta Tomson, Chief of Brand and Communications Officer At Notion
        </p>
      </div>

      {/* lately on instrument */}
      <div className="w-full flex-1 px-[1.4rem] sm:px-0 flex flex-col items-center my-[5rem]">
        <h2 className="md:text-[2.7rem] sm:text-[2.3rem] text-[1.6rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%] mb-[2rem] sm:mb-[6rem]">
          Lately at Instrument
        </h2>
        <div className="flex sm:flex-row flex-col w-full sm:gap-x-7 gap-x-0 cursor-pointer ">
          <div className="relative sm:top-6 sm:mb-0 mb-[6rem]">
            <img
              src="https://images.prismic.io/instrument-v5/4d1b6510-531c-44a0-b875-5c20cfb24eb0_corrected_transparency-report-landscape-Edit.png?auto=compress,format&w=1920&dpr=2"
              className="mb-7 transition-up"
            />
            <div className="sm:left-10 left-5 relative">
              <h2 className="font-medium text-[1.15rem] sm:text-[1.5rem] w-[90%] mb-4">
                2022 Transparency Report
              </h2>
              <p className="sm:text-[1rem] text-[0.9rem] text-greyish text-roboto hover:text-black">
                READ MORE
              </p>
            </div>
          </div>
          <div className=" relative cursor-pointer">
            <img
              src="https://images.prismic.io/instrument-v5/2321a48d-f988-4864-b4e9-62970e3f606c_Bank-Black.jpg?auto=compress,format&w=1920&dpr=2"
              className="mb-7 transition-up"
            />
            <div className="left-5 sm:left-0 relative">
              <h2 className="font-medium text-[1.15rem] sm:text-[1.5rem] w-[90%] mb-4">
                Instrument and BankBlackUSA Honored in Innovation by Design
                Awards
              </h2>
              <p className="sm:text-[1rem] text-[0.9rem] text-greyish text-roboto hover:text-black">
                READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* our services */}
      <div className="w-full overflow-hidden my-[5rem] sm:my-[8rem]">
        <OurServices />
      </div>

      {/* h2 with btn */}

      <div
        className={`flex flex-col items-center justify-center my-[5rem] ${styles.paddingX} `}
      >
        <h2 className="md:text-[2.7rem] sm:text-[2.3rem] text-[1.6rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%] mb-10">
          We’d love to work with you and your team
        </h2>
        <Button bg="primary" text="white">
          Our Work
        </Button>
      </div>

      {/* footer */}
      <div className={`${styles.paddingX} w-full`}>
        <Footer />
      </div>
    </section>
  );
}
