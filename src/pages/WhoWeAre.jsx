import React from "react";
import Navbar from "../components/Navbar";
import NotReady from "../components/NotReady";
import { layout } from "../styles";

export default function WhoWeAre() {
  return (
    <div className={`bg-white text-black ${layout.section} h-[100vh]  `}>
      <Navbar bg="white" className="svg-black" />
      <NotReady />
    </div>
  );
}
