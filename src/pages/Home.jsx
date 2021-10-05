import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/homepage/Hero";
import Navbar from "../components/Navbar";
import Agenda from "../components/homepage/Agenda";
import KBSection from "../components/homepage/KBSection";
import Article from "../components/homepage/Article";
import Video from "../components/homepage/Video";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
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
