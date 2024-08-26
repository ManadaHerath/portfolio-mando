"use client";
import Image from "next/image";
import linkedin from "@/app/assets/linkedin.png";
import instagram from "@/app/assets/instagram.png";
import profilePic from "@/app/assets/profile2.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => { 
  const [isClicked, setIsClicked] = useState(false);

  const bounceVariants = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
    },
    hover: {
      scale: 1.1,
      rotateX: -10,
      rotateY: 10,
      transition: {
        duration: 0.2,
      },
    },
    animate: {
      x: [0, Math.random() * 100 - 50, 0],
      y: [0, Math.random() * 50 - 25, 0],
      scale: [1, 1.1, 1],
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const [animateState, setAnimateState] = useState("initial");

  useEffect(() => {
    const handleResize = () => {
      setAnimateState("initial");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-black top-[600px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <motion.div
            className="relative"
            variants={bounceVariants}
            animate={animateState}
            initial="initial"
            onHoverStart={() => setAnimateState("hover")}
            onHoverEnd={() =>
              setAnimateState(animateState === "animate" ? "animate" : "initial")
            }
          >
            <h1 className="text-[#98B4CE]">Hi, I am</h1>
          </motion.div>
          
          <motion.div
            className="relative"
            variants={bounceVariants}
            animate={animateState}
            initial="initial"
            onHoverStart={() => setAnimateState("hover")}
            onHoverEnd={() =>
              setAnimateState(animateState === "animate" ? "animate" : "initial")
            }
          >
            <h1 className="text-[#E48A57]">Manada Herath</h1>
          </motion.div>

          <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
        I am a Computer Science and Engineering undergraduate at the University of Moratuwa. I am a passionate software developer who loves to learn new technologies and build cool stuff. I am a quick learner and a team player who is always ready to take on new challenges. I am a self-motivated individual who is always looking for ways to improve myself and the people around me.
      </p>
      <Image src={profilePic} alt="profile-pic" className="h-80 w-auto mx-auto mt-20 rounded-full"/>

        </div>
      </div>

      
    </div>
  );
};

export default Hero;
