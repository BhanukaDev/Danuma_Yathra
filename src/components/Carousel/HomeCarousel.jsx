import { useState } from "react";
import Slider from "react-slick";

export default function HomeCarousel() {
  return (
    <div aria-label="Main Carousel">
      <Slider
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={5000}
        speed={1000}
        lazyLoad="ondemand"
      >
        <div>
          <div
            role="img"
            className=" aspect-video w-full"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label="Main Carousel Image 1"
          ></div>
        </div>
        <div>
          <div
            role="img"
            className=" aspect-video w-full"
            style={{
              backgroundImage: `url("https://plus.unsplash.com/premium_photo-1680807868966-90a84c68c944?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label="Main Carousel Image 2"
          ></div>
        </div>
        <div>
          <div
            role="img"
            className=" aspect-video w-full"
            style={{
              backgroundImage: `url("https://plus.unsplash.com/premium_photo-1679547202572-bb3a34c54130?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label="Main Carousel Image 3"
          ></div>
        </div>
      </Slider>
    </div>
  );
}
