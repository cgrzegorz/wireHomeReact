// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import Banner from "../HomeMain/Banner";
import Service from "../HomeMain/Service";
import Process from "../HomeMain/Process";
import Faq from "../HomeMain/Faq";
import Cta from "../HomeMain/Cta";
import Footer from "../HomeMain/Footer";

export const HomeMain = () => {
  return (
    <>
      <Header />
      <Banner />
      <Service />
      <Process />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};
