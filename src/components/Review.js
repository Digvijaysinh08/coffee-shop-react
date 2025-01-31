import React from "react";
import Slider from "react-slick";
import { ClientData } from "../Data/Data";

const Review = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="py-14 mb-10">
        <div className="container">
          {/* title */}
          <div data-aos="fade-up" className="text-center mb-20">
            <h1 className=" text-4xl font-bold font-cursive text-gray-800">
              Our Happy Clients
            </h1>
          </div>

          {/* card section */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {ClientData.map((data) => {
                return (
                  <div key={data.id} className="my-6">
                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative">
                      {/* img section */}
                      <div className="mb-4">
                        <img
                          src={data.img}
                          alt="client"
                          className="rounded-full w-20 h-20"
                        />
                      </div>
                      {/* content section */}
                      <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3">
                          <h1 className="text-xl font-bold text-black/60 ">
                            {data.name}
                          </h1>
                          <p className="text-xs text-gray-500">{data.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
