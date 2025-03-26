import React from "react";
import Header from "./Header";
import Banner from "../HomeMain/Banner";
import Service from "../HomeMain/Service";
import Process from "../HomeMain/Process";
import Faq from "../HomeMain/Faq";
import Cta from "../HomeMain/Cta";
import Footer from "../HomeMain/Footer";
import News from "../HomeMain/News";

export const HomeMain = () => {
  return (
    <>
      <Header />
      <Banner />
      <Service />
      <Process />
      <Faq />
      <News />
      <Cta />
      <Footer />
    </>
  );
};
