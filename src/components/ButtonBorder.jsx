import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function ButtonBorder({ children, color }) {
  return (
    <button
      className={`
        text-${color}
      } py-[0.6rem] sm:py-[1rem] px-5 sm:px-[2rem] bg-transparent rounded-full text-[0.85rem] tracking-wide flex  items-center border-0 sm:border-[1px] sm:border-${color} self-start hover:opacity-50`}
    >
      {children} <BsArrowRightShort className="text-[0.9rem] ml-2" />
    </button>
  );
}
