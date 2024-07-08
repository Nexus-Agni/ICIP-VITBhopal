import React from "react";
import { Landing } from "./Landing";
import Objectives from "./Objectives";
import SubThemes from "./SubThemes";
import { EventInfo } from "./EventInfo";
import { TracingBeam } from "../ui/tracing-beam";
import { Leadership } from "./Leadership";
function Home() {
  return <>
    
        <Landing />
        <Objectives/>
        <SubThemes/>
        <EventInfo/>
        <Leadership/>

  </>;
}

export default Home;
