import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function Button({ children, bg, text }) {
  return (
    <button
      className={`button py-[0.8rem] sm:py-[1.2rem] px-5 sm:px-[2rem] rounded-full text-[0.85rem] tracking-wide flex  items-center bg-${bg} text-${text}
  `}
    >
      {children} <BsArrowRightShort className="text-[0.9rem] ml-2" />
    </button>
  );
}
