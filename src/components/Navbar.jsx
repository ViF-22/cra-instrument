import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks, navLinksMobile } from "../constants";
import useScrollDirection from "../hooks/useScrollDirection";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar({ bg }) {
  const [toggle, setToggle] = useState(false);
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`sticky w-full z-50 ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      }`}
    >
      <div
        className={`px-[2.8rem] sm:pt-[3rem] sm:pb-[2rem] sm:px-[3.2rem] py-[1.5rem] flex flex-row  w-full justify-between items-center relative z-10  bg-${bg}`}
      >
        <div>
          <Link
            to={"/"}
            className="mr-10 uppercase logo text-[22px] tracking-tighter"
          >
            Instrument
          </Link>
        </div>

        {/* desktop nav */}
        <div className=" sm:flex flex-wrap hidden">
          {navLinks.map((link, index) => (
            <Link
              to={`/${link.id}`}
              key={link.id}
              className={`${
                index !== navLinks.length - 1 ? "mr-[55px]" : "mr-0"
              } block tracking-wide navlinks relative text-[14px]`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* toggle menu */}
        <div className="sm:hidden">
          <div
            className="sm:hidden text-[28px] cursor-pointer flex items-center justify-center"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>

      {/* mobile nav */}
      {toggle ? (
        <div
          className={`sm:hidden fixed top-0 w-[100%] h-[100%] px-[2.8rem] flex items-end bg-${bg}`}
        >
          <div className="flex w-full flex-col items-baseline   text-[14px] mb-[120px]">
            {navLinksMobile.map((link, index) => (
              <Link
                to={`/${link.id}`}
                key={link.id}
                className={`${
                  index !== navLinksMobile.length - 1 ? "mb-[22px]" : "mb-0"
                } block tracking-wide navlinks relative`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
