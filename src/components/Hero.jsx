"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FiBriefcase, FiZap, FiLayers } from "react-icons/fi";

const Hero = () => {
  const stats = [
    { 
      label: "Years of Experience", 
      value: "3", 
      icon: <FiBriefcase className="text-cyan-400" />,
      position: "top-1/4 -left-12"
    },
    { 
      label: "Problem Solving", 
      value: "120", 
      icon: <FiZap className="text-yellow-400" />,
      position: "-top-8 right-0"
    },
    { 
      label: "Finished Projects", 
      value: "150", 
      icon: <FiLayers className="text-purple-400" />,
      position: "bottom-1/4 -right-12"
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      {/* Social Sidebar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
        {[
          { icon: <FaLinkedinIn />, href: "#" },
          { icon: <FaGithub />, href: "#" },
          { icon: <FaXTwitter />, href: "#" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 relative">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-4"
          >
            Hey, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none"
          >
            Ahadun Nobi<span className="text-cyan-400">.</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl lg:text-2xl text-white/70 font-medium mb-8"
          >
            Full-Stack Architect <span className="text-white/20">/</span> Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3 mb-10"
          >
            <p className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-sm">
              🚀 Turning ideas into stunning websites 💻
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-sm">
              ✨ Available for projects and collaborations 🤝
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="group relative px-8 py-4 bg-cyan-500 text-black font-black rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Say Hello <HiOutlineMail className="text-xl" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right Content (Profile & Stats) */}
        <div className="flex-1 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 lg:w-80 lg:h-80"
          >
            {/* Background Rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[pulse_4s_infinite]" />
            <div className="absolute inset-4 border border-white/5 rounded-full animate-[pulse_6s_infinite]" />
            
            {/* Image Container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cyan-400/30 p-2 bg-black/40 backdrop-blur-md">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-cyan-500/20 to-transparent">
                <Image
                  src="/image.png"
                  alt="Ahadun Nobi"
                  fill
                  className="object-cover brightness-110 contrast-110"
                />
              </div>
            </div>

            {/* Floating Stats Badges */}
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: [0, 5, 0], y: [0, -5, 0] }}
                transition={{ 
                  opacity: { delay: 0.6 + i * 0.2 },
                  x: { repeat: Infinity, duration: 3 + i, ease: "easeInOut" },
                  y: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" }
                }}
                className={`absolute ${stat.position} glass p-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-2xl z-20`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-none">{stat.value}+</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <HiOutlineChevronDoubleDown className="text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
