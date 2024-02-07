import React from "react";
import Ment from "./section/Ment";
import Gallery from "./section/Gallery";
import Intro from "./section/Intro";
import Calendar from "./section/Calendar";
import Location from "./section/Location";
import Attend from "./section/Attend";
import Bank from "./section/Bank";
import GuestBook from "./section/GuestBook";
import Share from "./section/Share";
import Footer from "./section/Footer";
import { MainBox } from "./styles";

export default function Layout() {
  return (
    <MainBox className="flex box-sizing">
      <Intro />
      <Ment />
      <Calendar />
      <Gallery />
      <Location />
      <Attend />
      <Bank />
      <GuestBook />
      <Share />
      <Footer />
    </MainBox>
  );
}
