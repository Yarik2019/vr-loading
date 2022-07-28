import React, { useState } from "react";
import "./index.css";
// import
import Header from "./componets/Header";
import Banner from "./componets/Banner";
import NavMobile from "./componets/NavMobile";
import Experience from "./componets/Experience";
import Video from "./componets/Video";
import Headsets from "./componets/Headsets";
import Testimonial from "./componets/Testimonialas";
import Explore from "./componets/Explore";

// import aos (animate on scroll)
import Aos from "aos";
import 'aos/dist/aos.css'


function App() {
  const [navMobile, setNavMobile] = useState(false);

  Aos.init({
    duration:2500,
    delay:400
  });

  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
      <Header setNavMobile={setNavMobile} />
      <Banner />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video/>
      <Headsets/>
      <Testimonial/>
      <Explore/>
    </div>
  );
}

export default App;
