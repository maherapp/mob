import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Head  from "next/head";


export default function Slider() {
  return (
      <>
      <Head>
          <link rel="stylesheet" href="css/service.css"/>
      </Head>
    <div className="App">
     <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src="img/about2.jpg" className="sliderimg" alt=""/>
      <img src="img/kitchen.jpg" className="sliderimg" alt=""/>
      <img src="img/office.jpg"className="sliderimg" alt=""/>
      <img src="img/personal2.jpg" className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
    </>
  );
}
