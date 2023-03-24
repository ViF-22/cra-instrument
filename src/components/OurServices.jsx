import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { ourServices } from "../constants/whatWeDoConstants";

export default function OurServices() {
  return (
    <div className=" relative w-full overflow-hidden ]">
      <h2 className="md:text-[2.4em] sm:text-[1.7rem] text-[1.65rem] font-medium  text-center  mb-10 sm:mb-[5rem]">
        Our Services
      </h2>
      <div className="sm:hidden flex relative left-[1.7rem] w-[600px]">
        <Splide
          className="splide__splide"
          options={{
            rewind: true,
            drag: "free",
            perPage: 2,
            gap: "3rem",
            pagination: false,
            arrows: false,

            width: "100%",
          }}
        >
          {ourServices.map((service) => (
            <SplideSlide>
              <div key={service.id} className="flex flex-col">
                <figure className=" w-[286px] h-[286px] aspect-square ">
                  <img src={service.img} className="w-full h-full" />
                </figure>
                <h2 className="text-[1.3rem] my-[1rem]">{service.id}</h2>
                <ul className="list-disc list-inside text-greyish">
                  {service.points.map((point) => (
                    <li className="mb-2 text-roboto text-[0.9rem]">{point}</li>
                  ))}
                </ul>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* desktop version */}
      <div className="sm:flex hidden sm:relative left-[4rem] w-[1700px] ">
        <Splide
          className="splide__splide"
          options={{
            rewind: true,
            drag: "free",
            perPage: 4,

            pagination: false,
            arrows: false,

            width: "100%",
          }}
        >
          {ourServices.map((service) => (
            <SplideSlide>
              <div key={service.id} className="flex flex-col mr-[5rem]">
                <figure className="w-[368px] h-[368px] aspect-square">
                  <img src={service.img} className="w-full h-full" />
                </figure>
                <h2 className="text-[1.6rem] my-[2rem]">{service.id}</h2>
                <ul className="list-disc list-inside text-greyish">
                  {service.points.map((point) => (
                    <li className="mb-2 text-roboto text-[0.9rem] tracking-normal">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
