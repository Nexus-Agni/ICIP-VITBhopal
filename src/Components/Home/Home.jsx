import React from "react";
import { Landing } from "./Landing";
import Objectives from "./Objectives";
import SubThemes from "./SubThemes";
import { EventInfo } from "./EventInfo";

function Home() {
  return <>
    <Landing />
    <Objectives/>
    <SubThemes/>
    <EventInfo/>
  </>;
}

export default Home;
