import React from "react";
import Navbar from "../components/Navbar";
import NotReady from "../components/NotReady";
import { layout } from "../styles";

export default function Contact() {
  return (
    <div className={`${layout.section} bg-lightBlue text-darkBlue h-[100vh]`}>
      <Navbar bg="lightBlue" />
      <NotReady />
    </div>
  );
}
