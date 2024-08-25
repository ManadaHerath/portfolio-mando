"use client";
import Image from "next/image";
import React from "react";
import { projects } from "@/app/assets/projects";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40" id="portfolio">
      <h1 className="text-6xl max-w-[320px] mx-auto font-semibold my-12 text-center">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row "}`}
          >
            <div className="space-y-2 max-w-[550px] text-center md:text-left">
              <h2 className="text-7xl my-4 text-white/70">{index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-orange-500 font-semibold">{project.devStack.join(", ")}</p>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <a href={project.git} className="text-orange-500 underline hover:text-orange-300">
                View on GitHub
              </a>
            </div>

            <div className="flex justify-center my-10">
              <Image 
                src={project.img} 
                alt={project.title} 
                className="h-[400px] w-auto object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
