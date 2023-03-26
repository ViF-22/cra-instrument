import React from "react";
import Navbar from "../components/Navbar";
import { styles } from "../styles";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { layout } from "../styles";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

import Slider from "../components/whoWeAre/Slider";
import { leaders, ourValues } from "../constants/whoWeAreConstants";

export default function WhoWeAre() {
  return (
    <section className={` text-black ${layout.sectionWOPadding}  `}>
      <div className={`${styles.paddingX} w-full`}>
        <Navbar bg="white" className="svg-black" />
      </div>

      <div
        className={`w-full flex items-center justify-center my-[6rem] sm:my-[10rem] ${styles.paddingX}`}
      >
        <h2 className="md:text-[2rem] sm:text-[1.7rem] text-[1.5rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%]">
          A values-driven, integrated digital agency founded in 2005. We’ve
          grown to 400 employees working virtually across the U.S. and IRL in
          Portland, Brooklyn, and Los Angeles.
        </h2>
      </div>
      <Slider />
      {/* h2 with btn */}

      <div
        className={`flex flex-col items-center justify-center my-[7rem] sm:my-[5rem] ${styles.paddingX} w-full `}
      >
        <h2 className="md:text-[2.7rem] sm:text-[2.3rem] text-[1.6rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%] mb-10">
          We’re committed to making Instrument a place where people can make the
          best work of their career — sustainably.
        </h2>
        <Button bg="primary" text="white">
          Life at Instrument
        </Button>
      </div>

      <div
        className={`flex flex-col items-center justify-center  my-[10rem] sm:my-[6.5rem] sm:w-[47%] w-[70%] ${styles.paddingX}`}
      >
        <h2 className="md:text-[2.7rem] sm:text-[2.3rem] text-[1.6rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%] mb-9">
          Our Values
        </h2>
        {ourValues.map((point) => (
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

      {/* grid */}
      <div className=" my-[5rem] w-full">
        <h2 className="md:text-[2.7rem] sm:text-[2.3rem] text-[1.6rem] font-medium  text-center  mb-9">
          Meet Our Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {leaders.map((leader) => (
            <div className="pb-[8rem] text-center">
              <img src={leader.img} className="pb-8"></img>
              <h2 className="font-medium text-[1.1rem] sm:text-[1.4rem] mb-2">
                {leader.h2}
              </h2>
              <p className="text-grey text-roboto tracking-tight text-[0.9rem]">
                {leader.p}
              </p>
            </div>
          ))}
          <div className="pb-[6rem] text-center">
            <img
              src="https://images.prismic.io/instrument-v5/feead288-01f8-465f-b878-bb3523335c70_balloon-with-hand.jpg?auto=compress,format&w=1280&dpr=2"
              className="pb-8"
            ></img>
            <h2 className="font-medium text-[1.1rem] sm:text-[1.4rem] sm:py-1">
              Interested in joining the team?
            </h2>
            <Link
              to="/careers"
              className="text-grey text-roboto tracking-tight text-[0.9rem]"
            >
              <div className="flex justify-center items-center">
                Explore open roles
                <BsArrowRightShort className="text-[0.9rem] ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* h2 with btn */}

      <div
        className={`flex flex-col items-center justify-center my-[7rem] sm:my-[5rem] ${styles.paddingX} w-full`}
      >
        <h2 className="md:text-[2.7rem] sm:text-[2.3rem] text-[1.6rem] font-medium  text-center w-[80%] sm:w-[75%] md:w-[65%] mb-10">
          Let's work together
        </h2>

        <Link to="/careers">
          <Button bg="primary" text="white">
            Careers
          </Button>
        </Link>
      </div>

      {/* footer */}
      <div className={`${styles.paddingX} w-full`}>
        <Footer />
      </div>
    </section>
  );
}
