import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <FaPhone className="h-[60px] w-[100px] text-white mr-4 hover:text-orange-400 transition duration-300" />
            <p className="text-xl text-white hover:text-orange-400 transition duration-300">
              +94 76 289 0717
            </p>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="h-[60px] w-[100px] text-white mr-4 hover:text-orange-400 transition duration-300" />
            <a
              href="mailto:manada.21@cse.mrt.ac.lk"
              className="text-xl text-white hover:text-orange-400 transition duration-300"
            >
              manada.21@cse.mrt.ac.lk
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">Let's Connect</h2>
        <p className="text-white/70 mb-6">
          Send a Message here or Contact me on LinkedIn, Instagram, or Email!
        </p>

        <form
          className="space-y-4"
          action="https://getform.io/f/apjmyvya"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Email"
            />
            <input
              type="phone"
              name="phone"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Mobile No"
            />
          </div>
          <textarea
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Message"
          ></textarea>
          <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
