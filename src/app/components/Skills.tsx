import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaGitAlt, FaPython, FaJava } from "react-icons/fa";
import { SiMysql, SiMongodb, SiTailwindcss, SiNextdotjs, SiCplusplus, SiCsharp, SiTypescript, SiExpress, SiVisualstudiocode, SiVercel, SiNetlify, SiAdobephotoshop } from "react-icons/si";

const skillIcons = [
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaJsSquare />, label: "JavaScript" },
    { icon: <FaReact />, label: "React" },
    { icon: <FaPython />, label: "Python" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <FaGitAlt />, label: "Git" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <FaJava />, label: "Java" },
    { icon: <SiCplusplus />, label: "C++" },
    { icon: <SiCsharp />, label: "C#" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiVisualstudiocode />, label: "VSCode" },
    { icon: <SiVercel />, label: "Vercel" },
    { icon: <SiNetlify />, label: "Netlify" },
    { icon: <SiAdobephotoshop />, label: "Adobe Photoshop" }
];

const Skills = () => {
    return (
        <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
            <div className="text-white w-[400px] md:min-w-[750px] mx-auto p-8 text-center">
                <h2 className="text-6xl font-bold mb-4">What I Do</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className="h-[140px] md:h-[200px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl transition-transform duration-300 hover:scale-110"
                        >
                            <div className="text-8xl">
                                {skill.icon}
                            </div>
                            <p className="mt-2">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
