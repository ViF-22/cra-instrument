import React from "react";
import { layout } from "../styles";
import { styles } from "../styles";
import { picsHome } from "../constants";
import Button from "../components/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section className={`bg-primary text-white ${layout.section}`}>
      <Navbar bg="primary" className="svg-white" />
      {/* video */}
      <div className="w-[100%] pt-0 sm:pt-[13rem]">
        <iframe
          src="https://player.vimeo.com/video/796346595?h=8a4686b5aa&controls=0&loop=1&background=1&app_id=122963"
          className=" w-[100%] h-[80vh]  sm:w-[100%] sm:h-[100vh]"
        ></iframe>
      </div>

      {/* h2 */}
      <div className="md:h-[80vh] h-[60vh] flex items-center justify-center sm:pb-[7rem] pb-[4rem]">
        <h2 className={`${styles.heading2} `}>
          We build connected brand systems from vision through execution
        </h2>
      </div>

      {/* section with pic */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center mb-[230px]">
        <div className={`${layout.sectionImgReverse}`}>
          <img
            src="https://images.prismic.io/instrument-v5/7c872db1-8972-4a3e-b53f-9aa7d179fd4f_what-we-do.jpg?auto=compress,format&w=1920&dpr=2"
            alt="phone"
            className="w-[100%] h-[100%] px-[2rem] sm:px-0"
          />
        </div>
        <div className="md:max-w-[40%] mt-10 sm:mt-0 flex justify-center flex-col items-start  relative sm:ml-0 ml-[6rem]">
          <p className="sm:w-[80%] w-[70%] text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] tracking-wider mb-[2rem]">
            As a full-service partner to the world’s most ambitious companies,
            we create transformational change through best-in-class digital
            products and communications.
          </p>
          <Button bg="white" text="darkBlue">
            What we do
          </Button>
        </div>
      </div>

      {/* section with pic */}

      <div className="flex flex-col md:flex-row-reverse w-full items-center justify-center relative mb-[3rem] sm:mb-0">
        <div className={`${layout.sectionImg}`}>
          <img
            src="https://images.prismic.io/instrument-v5/7f8d8f97-e257-4abf-906c-ea7543da01e3_instrument-fast-co-award.png?auto=compress,format&w=1920&dpr=2"
            alt="phone"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="md:max-w-[40%] mt-10 sm:mt-0 flex justify-center flex-col items-start ml-[6rem]">
          <p className="sm:w-[80%] w-[70%] text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] tracking-wider mb-[2rem]">
            Instrument Named Among World's Most Innovative Companies in Design
          </p>
          <Button bg="white" text="darkBlue">
            Learn More
          </Button>
        </div>
      </div>
      {/* h2 */}
      <div className=" flex flex-col items-center justify-center sm:pb-[7rem] my-[8rem]">
        <h2 className={`${styles.heading2} `}>
          Explore some of our most recent work
        </h2>
        <Button bg="white" text="darkBlue">
          Our Work
        </Button>
      </div>

      {/* two-pics */}
      <div className="flex md:flex-row flex-col gap-x-[4rem] gap-y-[6rem] sm:gap-y-0 mb-10 sm:mb-0">
        {picsHome.map((pic) => (
          <div className="flex flex-col">
            <div className="flex">
              <img
                src={pic.img}
                key={pic.id}
                alt={pic.id}
                object-cover
                w-full
                h-full
              />
            </div>
            <div className="sm:px-0 px-[2rem]  flex flex-col sm:flex-row md:flex-col sm:justify-between">
              <h2 className="text-[1.2rem] sm:text-[1.6rem] sm:max-w-[85%] py-[1.6rem] font-medium">
                {pic.h2}
              </h2>
              <p className="sm:max-w-[90%] text-roboto text-[0.9rem]">
                {pic.p}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center my-[10rem] sm:mb-[7rem]">
        <h2 className={`${styles.heading2} `}>
          We’d love to work with you and your team
        </h2>
        <Button bg="white" text="darkBlue">
          Get in touch
        </Button>
      </div>

      <Footer />
    </section>
  );
}
