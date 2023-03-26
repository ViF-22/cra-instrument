import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { carouselSlide } from "../../constants/whoWeAreConstants";
export default function Slider() {
  return (
    <div className=" w-full  relative my-[5rem] overflow-hidden">
      {/* desktop version */}
      <div className="left-[5rem]  relative sm:flex hidden w-full  cursor-grab  items-center ">
        <Splide
          className="splide__splide"
          options={{
            rewind: true,
            drag: "free",
            perPage: 3,
            gap: "2rem",
            pagination: false,
            arrows: false,

            width: "100%",
          }}
        >
          <SplideSlide>
            <div className="w-full h-full relative  pt-[105%]">
              <iframe
                src="https://player.vimeo.com/video/765793412?h=03a779893c&loop=1&background=1&app_id=122963"
                allow="fullscreen"
                className="absolute top-0 left-0 w-full h-full"
                title="wave-2_2"
              />
            </div>
          </SplideSlide>
          {carouselSlide.map((item) => (
            <SplideSlide>
              <div
                className="w-full h-full flex items-center justify-center"
                id={item.id}
              >
                <img
                  src={item.img}
                  className="object-contain w-full h-full"
                  alt={item.alt}
                />
              </div>
            </SplideSlide>
          ))}
          <SplideSlide>
            <div className="w-full h-full relative  pt-[68%]">
              <iframe
                src="https://player.vimeo.com/video/424920560?h=76980457e2&loop=1&background=1&app_id=122963"
                allow="fullscreen"
                className="absolute top-0 left-0 w-full h-full"
                title="who-we-are-loop"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://images.prismic.io/instrument-v5/f0aa6dcc-7376-4454-a180-f877e2225cc5_9.jpg?auto=compress,format&w=1280&dpr=2"
                className="object-contain w-full h-full"
                alt="Shanelle Felice, our Associate Director of Business Development, working on her laptop"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-full relative  pt-[68%]">
              <iframe
                src="https://player.vimeo.com/video/424921418?h=920053bf67&loop=1&background=1&app_id=122963"
                allow="fullscreen"
                className="absolute top-0 left-0 w-full h-full"
                title="who-we-are-building-loop"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* mobile version */}
      <div className="left-[2.5rem]  relative sm:hidden flex w-full  cursor-grab  items-center ">
        <Splide
          className="splide__splide"
          options={{
            rewind: true,
            drag: "free",
            perPage: 2,
            gap: "2rem",
            pagination: false,
            arrows: false,

            width: "100%",
          }}
        >
          <SplideSlide>
            <div className="w-full h-full relative  pt-[105%]">
              <iframe
                src="https://player.vimeo.com/video/765793412?h=03a779893c&loop=1&background=1&app_id=122963"
                allow="fullscreen"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </SplideSlide>
          {carouselSlide.map((item) => (
            <SplideSlide>
              <div
                className="w-full h-full flex items-center justify-center"
                id={item.id}
              >
                <img src={item.img} className="object-contain w-full h-full" />
              </div>
            </SplideSlide>
          ))}
          <SplideSlide>
            <div className="w-full h-full relative pt-[68%]">
              <iframe
                src="https://player.vimeo.com/video/424920560?h=76980457e2&loop=1&background=1&app_id=122963"
                allow="fullscreen"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://images.prismic.io/instrument-v5/f0aa6dcc-7376-4454-a180-f877e2225cc5_9.jpg?auto=compress,format&w=1280&dpr=2"
                className="object-contain w-full h-full"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full h-full relative pt-[68%]">
              <iframe
                src="https://player.vimeo.com/video/424921418?h=920053bf67&loop=1&background=1&app_id=122963"
                allow="fullscreen"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
