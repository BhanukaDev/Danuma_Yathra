import Slider from "react-slick";

export default function HomeCarousel() {
  const imgs = [
    {
      alt: "Main Carousel Image 1",
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Main Carousel Image 2",
      src: "https://plus.unsplash.com/premium_photo-1680807868966-90a84c68c944?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Main Carousel Image 3",
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      alt: "Main Carousel Image 3",
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className=" relative">
      <Slider
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={3000}
        speed={1000}
        lazyLoad="ondemand"
        arrows={false}
        dots={false}
      >
        {imgs.map((img, index) => (
          //   <img
          //     key={index}
          //     src={img.src}
          //     alt={img.alt}
          //     loading="lazy"
          //     className=" aspect-video object-cover object-center"
          //   />
          <div key={index} className="aspect-[17/8] bg-red-400">
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover object-center h-full w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
