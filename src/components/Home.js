import React from "react";
import HeroPng from "../assets/home.png";

const Home = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                We Serve the richest{" "}
                <span className="text-primary font-cursive">Coffee</span> in the
                city
              </h1>
              <div className="mt-4" data-aos="fade-up" data-aos-delay="400">
                <a
                  href="#menu"
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Coffee Menu
                </a>
              </div>
            </div>
            {/* Img Section */}
            <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
              <img
                src={HeroPng}
                alt="home img"
                className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
