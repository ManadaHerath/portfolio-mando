"use client";
import Image from "next/image";
import React from "react";
import Book from "@/app/assets/books.png";
import bulb from "@/app/assets/bulb.png";
import company from "@/app/assets/company.png";
import technical from "@/app/assets/technical.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto front-semibold p-4 mb-4">
        About <span className="text-orange-400"> Me</span>
      </h1>

      <div className="px-6 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-6 place-items-center">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={Book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl font-bold text-white/80 m-3">Education</h1>
              <p className="text-lg text-white/70 mt-2">
                I&quot;m a Computer Science and Engineering Undergraduate (third year) with 3.88/4 GPA.
                Got selected to Dean&quot;s list 2/3 times. Passed A/Ls with 3A&quot;s with the Island Rank of 198.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={bulb} alt="bulb" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl font-bold text-white/80 m-3">Problem Solving</h1>
              <p className="text-lg text-white/70 mt-2">
                4th place in ENIGMA 24 in University of Moratuwa.<br />
                8th place in MoraXtreme 2023 in University of Moratuwa.<br />
                Gold Level in C++, Java, Python, SQL in HackerRank.<br />
                Gold Level in Problem Solving in HackerRank.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={company} alt="company" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl font-bold text-white/80 m-3">Experience</h1>
              <p className="text-lg text-white/70 mt-2">
                Freelancer since 2022. (Full Stack Developer)<br />
                Combined Mathematics tutor since 2021.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={technical} alt="technical" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h1 className="text-2xl font-bold text-white/80 m-3">Technical Skills</h1>
              <p className="text-lg text-white/70 mt-2">
                <strong>Programming Languages:</strong> Python, Java, JavaScript, C++, C#<br />
                <strong>Web Development:</strong> Node.js, React, HTML, CSS, Tailwind CSS, Bootstrap<br />
                <strong>Big Data Management:</strong> MongoDB, SQL (MySQL, MSSQL)<br />
                <strong>Machine Learning Frameworks:</strong> TensorFlow, Keras<br />
                <strong>Operations Technologies:</strong> GitHub, Docker<br />
                <strong>Design and Writing Tools:</strong> Adobe Photoshop, LaTeX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
