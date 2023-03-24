import React from "react";
import Navbar from "../components/Navbar";
import { layout } from "../styles";
import NotReady from "../components/NotReady";

export default function Careers() {
  return (
    <div className={`${layout.section} bg-lightBlue text-darkBlue h-[100vh]`}>
      <Navbar bg="lightBlue" />
      <NotReady />
    </div>
  );
}
