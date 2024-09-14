import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPaperPlane } from "react-icons/fa6";
import FooterBg from "../assets/footer.jpg";

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%"
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div data-aos="fade-up" className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-10 pt-5">
          {/* Company Details */}
          <div className="py-8 text-center sm:text-left border-b border-gray-300 md:border-none px-4">
            <a href="#" className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">
              Coffee Cafe
            </a>
            <div className="flex justify-center sm:justify-start mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-lg text-black outline-none w-full max-w-xs"
              />
              <button className="p-3 bg-secondary rounded-r-lg cursor-pointer">
                <FaPaperPlane />
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Popular Drinks */}
            <div className="py-8 text-center sm:text-left border-b border-gray-300 md:border-none px-4">
              <h1 className="text-xl font-semibold mb-3">Popular Drinks</h1>
              <ul className="space-y-3">
                <li><a href="#" className="inline-block hover:scale-105 duration-200">Cappuccino</a></li>
                <li><a href="#" className="inline-block hover:scale-105 duration-200">Cold Brew</a></li>
                <li><a href="#" className="inline-block hover:scale-105 duration-200">Caramel Macchiato</a></li>
                <li><a href="#" className="inline-block hover:scale-105 duration-200">Iced Latte</a></li>
                <li><a href="#" className="inline-block hover:scale-105 duration-200">Espresso</a></li>
              </ul>
            </div>

            {/* Opening and Closing Time */}
            <div className="py-8 text-center sm:text-left border-b border-gray-300 md:border-none px-4">
              <h1 className="text-xl font-semibold mb-3">Opening Hours</h1>
              <ul className="space-y-3">
                <li>Monday - Friday: 8:00 AM - 10:00 PM</li>
                <li>Saturday: 9:00 AM - 11:00 PM</li>
                <li>Sunday: 10:00 AM - 8:00 PM</li>
              </ul>
            </div>

            {/* Special Offers */}
            <div className="py-8 text-center sm:text-left border-b border-gray-300 md:border-none px-4">
              <h1 className="text-xl font-semibold mb-3">Special Offers</h1>
              <ul className="space-y-3">
                <li>Buy 1 Get 1 Free - Fridays</li>
                <li>10% Off on All Orders Over ₹500</li>
                <li>Free Muffin with Large Coffee - Weekends</li>
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 text-center sm:text-left border-b border-gray-300 md:border-none px-4">
              <h1 className="text-xl font-semibold mb-3">Address</h1>
              <div>
                <p className="mb-3"> A-30, Vijay Marg, C-Scheme Jaipur, Rajasthan</p>
                <p>+91 1234567890</p>

                {/* Social Links with Hover Effects */}
                <div className="flex justify-center sm:justify-start items-center gap-3 mt-6">
                  <a href="#"><FaInstagram className="text-3xl hover:text-pink-600 duration-300 transform hover:scale-125" /></a>
                  <a href="#"><FaFacebook className="text-3xl hover:text-blue-500 duration-300 transform hover:scale-125" /></a>
                  <a href="#"><FaWhatsapp className="text-3xl hover:text-green-500 duration-300 transform hover:scale-125" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
