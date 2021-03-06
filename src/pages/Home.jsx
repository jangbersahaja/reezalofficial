import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import Agenda from "../components/home/Agenda";
import KBSection from "../components/home/KBSection";
import Article from "../components/home/Article";
import Video from "../components/home/Video";
import Contact from "../components/Contact";
import HundredDays from "../components/home/HundredDays";

function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      <HundredDays />
      <Agenda />
      <KBSection />
      <Article />
      <Video />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
