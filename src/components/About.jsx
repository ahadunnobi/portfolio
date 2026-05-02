"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiHeadphones } from 'react-icons/fi';
import { LuDownload } from "react-icons/lu";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 px-4 md:px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">About</h2>
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] h-[380px] md:w-[380px] md:h-[450px] group">
            <div className="w-full h-full relative overflow-hidden">
              <Image 
                src="/anime.png"    
                alt="Ahadun Nobi" 
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 w-full max-w-md md:max-w-none">
            {/* Card 1 */}
            <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/[0.05] transition-colors group cursor-default">
              <FiBriefcase className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-sm font-bold mt-1">Experience</h3>
              <p className="text-white/50 text-[9px] md:text-[10px] uppercase font-semibold">3+ Years Working</p>
            </div>
            {/* Card 2 */}
            <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/[0.05] transition-colors group cursor-default">
              <FiAward className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-sm font-bold mt-1">Completed</h3>
              <p className="text-white/50 text-[9px] md:text-[10px] uppercase font-semibold">150+ Projects</p>
            </div>
            {/* Card 3 */}
            <div className="glass p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/[0.05] transition-colors group cursor-default">
              <FiHeadphones className="text-2xl text-purple-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-sm font-bold mt-1">Support</h3>
              <p className="text-white/50 text-[9px] md:text-[10px] uppercase font-semibold">Online 24/7</p>
            </div>
          </div>

          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Scaling professional digital solutions with React, Node.js, Express, and MongoDB, driven by existential inquiry. Engineering logic with human intent. Applying first-principles thinking from a philosophical background to design architectures that solve fundamental problems with mathematical precision.
          </p>

          <button className="group relative px-8 py-4 glass-dark hover:bg-white/10 text-white font-semibold rounded-2xl overflow-hidden transition-all active:scale-95 flex items-center gap-3">
            Download Resume 
            <LuDownload className="text-xl group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
