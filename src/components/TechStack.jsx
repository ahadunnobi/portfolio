"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiSupabase, SiPython, SiCplusplus,
  SiGit, SiGithub, SiDocker, SiNetlify, SiVercel, SiPostman, SiNpm,
  SiJsonwebtokens 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const frontendSkills = [
  { icon: SiHtml5, bg: "bg-[#e34f26]", text: "text-white" },
  { icon: SiCss, bg: "bg-[#1572b6]", text: "text-white" },
  { icon: SiJavascript, bg: "bg-[#f7df1e]", text: "text-black" },
  { icon: SiTypescript, bg: "bg-[#3178c6]", text: "text-white" },
  { icon: SiReact, bg: "bg-[#20232a]", text: "text-[#61dafb]" },
  { icon: SiNextdotjs, bg: "bg-white", text: "text-black" },
  { icon: SiTailwindcss, bg: "bg-[#0f172a]", text: "text-[#38bdf8]" },
  { icon: SiBootstrap, bg: "bg-[#7952b3]", text: "text-white" },
  { icon: SiRedux, bg: "bg-[#764abc]", text: "text-white" }
];

const backendSkills = [
  { icon: SiNodedotjs, bg: "bg-[#333333]", text: "text-[#339933]" },
  { icon: SiExpress, bg: "bg-[#252526]", text: "text-white" },
  { icon: SiMongodb, bg: "bg-[#131313]", text: "text-[#47a248]" },
  { icon: SiFirebase, bg: "bg-[#1a1a1a]", text: "text-[#ffca28]" },
  { icon: SiSupabase, bg: "bg-[#1c1c1c]", text: "text-[#3ecf8e]" },
  { icon: SiPython, bg: "bg-[#306998]", text: "text-[#ffd43b]" },
  { icon: SiCplusplus, bg: "bg-[#00599c]", text: "text-white" }
];

const devopsSkills = [
  { icon: SiGit, bg: "bg-[#f05032]", text: "text-white" },
  { icon: SiGithub, bg: "bg-[#181717]", text: "text-white" },
  { icon: SiDocker, bg: "bg-[#2496ed]", text: "text-white" },
  { icon: VscVscode, bg: "bg-[#007acc]", text: "text-white" },
  { icon: SiNetlify, bg: "bg-[#20232a]", text: "text-[#38afbb]" },
  { icon: SiVercel, bg: "bg-black", text: "text-white" },
  { icon: SiPostman, bg: "bg-[#ff6c37]", text: "text-white" },
  { icon: SiNpm, bg: "bg-[#cb3837]", text: "text-white" }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center bg-[#020617] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl font-black text-white flex items-center justify-center gap-3 tracking-wider uppercase">
          <span className="text-pink-400">🛠</span> THE TECH MATRIX <span className="text-pink-400">🛠</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl w-full flex flex-col items-center gap-12 relative z-10">
        
        {/* Top Section: Frontend & Backend inside a bordered container */}
        <div className="w-full flex flex-col md:flex-row border border-white/30 rounded-sm">
          
          {/* Frontend Layer */}
          <div className="flex-1 p-6 md:p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/30">
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></span>
              FRONTEND LAYER
              <span className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontendSkills.map((skill, i) => (
                <div key={i} className={`w-14 h-14 md:w-[60px] md:h-[60px] ${skill.bg} ${skill.text} rounded-2xl flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform`}>
                  <skill.icon />
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="flex-1 p-6 md:p-8 flex flex-col items-center">
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></span>
              BACKEND & DATABASE
              <span className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backendSkills.map((skill, i) => (
                <div key={i} className={`w-14 h-14 md:w-[60px] md:h-[60px] ${skill.bg} ${skill.text} rounded-2xl flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform`}>
                  <skill.icon />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: DevOps */}
        <div className="w-full flex flex-col items-center">
          <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></span>
            DEVOPS & TOOLCHAIN
            <span className="w-1.5 h-1.5 rounded-full border border-white bg-transparent"></span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {devopsSkills.map((skill, i) => (
              <div key={i} className={`w-14 h-14 md:w-[60px] md:h-[60px] ${skill.bg} ${skill.text} rounded-2xl flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform`}>
                <skill.icon />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center gap-3 px-6 py-2.5 bg-[#0a0a0a] hover:bg-white/5 transition-colors cursor-pointer border border-white/5 rounded-sm shadow-xl">
            <SiJsonwebtokens className="text-[#00f2ff] text-xl" />
            <span className="text-white font-black text-sm tracking-widest">JWT</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-2.5 bg-[#00599c] hover:bg-[#004a82] transition-colors cursor-pointer border border-transparent rounded-sm shadow-xl">
            <TbApi className="text-white text-xl" />
            <span className="text-white font-black text-sm tracking-widest">REST API</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TechStack;
