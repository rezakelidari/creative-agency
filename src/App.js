import React from "react";
import Home from "./components/Home";
import TopNavbar from "./components/TopNavbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Features from "./components/Features";
import Team from "./components/Team";

export default function App() {
  return (
    <>
      <TopNavbar />
      <Home />
      <Services />
      <Portfolio />
      <Features />
      <Team />
    </>
  );
}
