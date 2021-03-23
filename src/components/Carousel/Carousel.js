import React from "react";
import Carousel  from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import carousel1 from "../../assets/images/carousel1.png";
import carousel2 from "../../assets/images/carousel2.png";
import carousel3 from "../../assets/images/carousel3.png";
import carousel4 from "../../assets/images/carousel4.png";

function MyCarousel() {
  return (
    <Carousel slidesPerPage={3}
    plugins={[
      'infinite',
      'arrows',
      
    ]}
  >
      <img src={carousel1} />
      <img src={carousel2} />
      <img src={carousel3} />
      <img src={carousel4} />
    </Carousel>
  );
}

export default MyCarousel;
