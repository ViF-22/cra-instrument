import { BsArrowRight } from "react-icons/bs";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { carousel } from "../constants/whatWeDoConstants";

export default function Carousel() {
  return (
    <div className="relative mb-[5rem]">
      <div className="  sm:hidden flex">
        <Splide
          className="splide__splide"
          hasTrack={false}
          options={{
            type: "fade",
            rewind: true,
            perPage: 1,
            pagination: false,
          }}
        >
          <div className="splide__arrows ">
            <button className="splide__arrow splide__blackarrow rounded-full splide__arrow--prev py-2 px-2 sm:w-[3rem] sm:h-[3rem] ">
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
      <div className="sm:flex hidden">
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
    </div>
  );
}
