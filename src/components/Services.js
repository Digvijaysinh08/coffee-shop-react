import React, { useState } from "react";
import { ServicesData } from "../Data/Data";

const Services = () => {
  
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Title */}
          <div className="text-center mb-20">
            <h1 className=" text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:ga-5 place-items-center">
            {ServicesData.map((service) => {
              const isExpanded = expandedServiceId === service.id;

              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  key={service.id}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                >
                  <div className="h-[122px]">
                    <img
                      src={service.img}
                      alt="img"
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold">{service.name}</h1>
                      <p
                        className={`text-gray-500 group-hover:text-white text-sm ${
                          isExpanded ? "" : "line-clamp-2"
                        }`}
                      >
                        {service.description}
                      </p>
                      <button
                        className={`text-sm mt-2  duration-200 ${
                          isExpanded
                            ? "text-red-500 group-hover:text-red-300"
                            : "text-blue-500 group-hover:text-blue-300"
                        }`}
                        onClick={() => toggleExpand(service.id)}
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
