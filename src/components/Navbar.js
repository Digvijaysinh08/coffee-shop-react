import React from "react";
import logo from '../assets/logo.png'
import { menu } from "../Data/Data";
import { FaCoffee } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <a
                href="#"
                className="font-cursive text-2xl font-bold sm:text-3xl flex justify-center items-center gap-2 tracking-wider"
              >
                <img src={logo} alt="logo" className="w-14" />
                Coffee Shop
              </a>
            </div>
            {/* link */}
            <div className=" flex justify-between items-center gap-4">
              <ul className=" hidden sm:flex items-center gap-4">
                {menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}  
                    </a>
                  </li>
                ))}
              </ul>
              <button className=" bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
