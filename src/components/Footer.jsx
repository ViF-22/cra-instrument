import React from "react";
import { Link } from "react-router-dom";
import { navLinksMobile } from "../constants";
import ButtonBorder from "./ButtonBorder";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer({ btn }) {
  return (
    <section className="flex flex-col md:flex-row justify-around  items-start w-full text-[1rem]  mb-10 mt-[5rem] sm:mt-[8rem]">
      <div className="flex w-full justify-between sm:justify-start sm:px-[1rem]  px-[2.8rem] ">
        <div className="flex flex-col justify-around sm:mr-[12rem] ">
          <Link to="/" className="block navlinks relative mb-[1.4rem] w-max">
            HOME
          </Link>
          {navLinksMobile.map((link, index) => {
            if (index < 4) {
              return (
                <Link
                  to={`/${link.id}`}
                  key={link.id}
                  className="block navlinks relative mb-[1.4rem] w-max"
                >
                  {link.title}
                </Link>
              );
            }
          })}
        </div>
        <div className="flex flex-col">
          {navLinksMobile.map((link, index) => {
            if (index > 3) {
              return (
                <Link
                  to={`/${link.id}`}
                  key={link.id}
                  className="block navlinks relative mb-[1.4rem] w-max"
                >
                  {link.title}
                </Link>
              );
            }
          })}
          <Link to="/privacy" className="block navlinks relative w-max">
            PRIVACY
          </Link>
        </div>
      </div>
      <div className="flex w-full sm:w-[50%] flex-row sm:flex-col md:flex-row sm:gap-y-4 items-center sm:self-end sm:gap-x-5 sm:px-[1rem]  px-[1.8rem]">
        <ButtonBorder color={btn} className="mr-[5rem]">
          NEWSLETTER
        </ButtonBorder>
        <div className="text-[1.6rem] flex justify-around w-full cursor-pointer">
          <a href="https://instagram.com/instrument">
            <AiOutlineInstagram />
          </a>
          <a href="https://twitter.com/instrument">
            <AiOutlineTwitter />
          </a>
          <a href="https://linkedin.com/company/instrument">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
