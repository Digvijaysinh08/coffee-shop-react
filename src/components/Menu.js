import React from "react";
import { MenuData } from "../Data/Data";
import BgImg from "../assets/menu.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
};

const Menu = () => {
  return (
    <>
      <span id="menu"></span>
      <div style={bgImage}>
        <div className="max-w-4xl mx-auto py-10 px-5">
          <div data-aos="fade-up" className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-white">
              Coffee Shop Menu
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {MenuData.map((data, index) => (
              <div
                key={index}
                className="bg-primary border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                <h2 className="text-2xl text-center font-semibold mb-4 text-white relative z-10 group-hover:text-yellow-300 transition-colors duration-300">
                  {data.category}
                </h2>
                <ul>
                  {data.items.map((item, idx) => (
                    <li
                      data-aos="fade-up"
                      data-aos-delay="300"
                      key={idx}
                      className="flex justify-between py-2 border-b border-gray-200 last:border-b-0 text-white transition-transform transform group-hover:scale-105 hover:text-yellow-300"
                    >
                      <span>{item.name}</span>
                      <span className="font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
