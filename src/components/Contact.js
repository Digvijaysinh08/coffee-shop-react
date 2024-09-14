import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <span id="contact"></span>
      <div className="py-10 px-5">
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className=" text-4xl font-bold font-cursive text-gray-800">
            Contact
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div
            data-aos="fade-up-right"
            className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/80 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Map */}
          <div
            data-aos="fade-up-left"
            className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="relative w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7295.81782906312!2d77.2090218832472!3d28.613939974383373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc437a7c08a7%3A0x42f3d8be14f18d6!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1636403174111!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
