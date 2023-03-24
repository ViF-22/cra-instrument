import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export default function SliderCarousel() {
  return (
    <div className=" w-full  relative my-[5rem] overflow-hidden">
      {/* desktop version */}
      <div className="left-[5rem]  relative  w-full  cursor-grab sm:flex hidden items-center ">
        <Splide
          className="splide__splide"
          options={{
            rewind: true,
            drag: "free",
            perPage: 3,
            gap: "3em",
            pagination: false,
            arrows: false,

            width: "100%",
          }}
        >
          <SplideSlide>
            <div className="w-full h-min relative aspect-square">
              <iframe
                src="https://player.vimeo.com/video/765017109?h=e1e53db60c&loop=1&background=1&app_id=122963"
                className="object-cover w-full aspect-square"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  aspect-square ">
              <img
                src="https://images.prismic.io/instrument-v5/1eec6d09-4fe9-4f5c-9555-178ada19b241_67-DSC_0783+1.jpg?auto=compress,format"
                alt="Image 1"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  aspect-square">
              <img
                src="https://images.prismic.io/instrument-v5/481dd3bc-d18e-41c2-8f06-d353808df698_Group+75.png?auto=compress,format"
                alt="Image 2"
                className="object-cover object-bottom w-full h-full"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  aspect-square ">
              <img
                src="https://images.prismic.io/instrument-v5/5ecfe69a-7965-47ed-847a-e0c176cf070e_Mask+Group+%281%29.jpg?auto=compress,format"
                className="object-contain w-full h-full"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  aspect-square ">
              <img
                src="https://images.prismic.io/instrument-v5/7a9dd6a1-23d6-4f0d-bcc1-83c5e61213e7_104-DSC_3391+1.jpg?auto=compress,format"
                className="object-cover w-full h-full pt-[5%]"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>

      {/*   mobile version */}
      <div className="relative left-[2rem] w-full  cursor-grab flex sm:hidden items-center">
        <Splide
          className="splide__splide"
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            drag: "free",
            perPage: 2,
            gap: "0.8rem",
            pagination: false,
            arrows: false,

            width: "100%",
          }}
        >
          <SplideSlide>
            <div className="w-full h-min relative aspect-square">
              <iframe
                src="https://player.vimeo.com/video/765017109?h=e1e53db60c&loop=1&background=1&app_id=122963"
                className="object-cover w-full aspect-square"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  aspect-square ">
              <img
                src="https://images.prismic.io/instrument-v5/1eec6d09-4fe9-4f5c-9555-178ada19b241_67-DSC_0783+1.jpg?auto=compress,format"
                alt="Image 1"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  aspect-square">
              <img
                src="https://images.prismic.io/instrument-v5/481dd3bc-d18e-41c2-8f06-d353808df698_Group+75.png?auto=compress,format"
                alt="Image 2"
                className="object-cover object-bottom w-full h-full"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  aspect-square ">
              <img
                src="https://images.prismic.io/instrument-v5/5ecfe69a-7965-47ed-847a-e0c176cf070e_Mask+Group+%281%29.jpg?auto=compress,format"
                className="object-contain w-full h-full"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  aspect-square ">
              <img
                src="https://images.prismic.io/instrument-v5/7a9dd6a1-23d6-4f0d-bcc1-83c5e61213e7_104-DSC_3391+1.jpg?auto=compress,format"
                className="object-cover w-full h-full pt-[5%]"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
