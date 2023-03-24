import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import BeingHere from "./BeingHere";
import Careers from "./Careers";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import Work from "./Work";
import Contact from "./Contact";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/what-we-do" element={<WhatWeDo />} />
      <Route path="/work" element={<Work />} />
      <Route path="/who-we-are" element={<WhoWeAre />} />
      <Route path="/being-here" element={<BeingHere />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
