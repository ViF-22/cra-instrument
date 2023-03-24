import React from "react";
import Navbar from "../components/Navbar";
import { layout } from "../styles";
import NotReady from "../components/NotReady";

export default function BeingHere() {
  return (
    <div className={`${layout.section} bg-darkBlue text-lightBlue h-[100vh]`}>
      <Navbar bg="darkBlue" />
      <NotReady />
    </div>
  );
}
