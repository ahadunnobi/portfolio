"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FiBriefcase, FiZap, FiLayers } from "react-icons/fi";

const Hero = () => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const roles = [
    "MERN Stack Developer",
    "Next.js Specialist",
    "Problem Solver",
    "Philosophy Enthusiast",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      label: "Years of Experience", 
      value: "3", 
      icon: <FiBriefcase className="text-cyan-400" />,
      position: "top-[55%] -left-20"
    },
    { 
      label: "Problem Solving", 
      value: "120", 
      icon: <FiZap className="text-yellow-400" />,
      position: "-top-12 right-0"
    },
    { 
      label: "Finished Projects", 
      value: "150", 
      icon: <FiLayers className="text-purple-400" />,
      position: "top-[15%] -right-24"
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-10 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      {/* Social Sidebar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6">
        {[
          { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/ahadunnobi" },
          { icon: <FaGithub />, href: "https://github.com/ahadunnobi" },
          { icon: <FaXTwitter />, href: "https://x.com/ahadunnobi" },
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

      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10 px-4">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <motion.span 
              animate={{ rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-2xl"
            >
              👋
            </motion.span>
            <span className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-xs">
              Hi, Hey, I am
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-tight"
          >
            Ahadun Nobi<span className="text-cyan-400">.</span>
          </motion.h1>
          
          <div className="h-12 flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl lg:text-2xl text-cyan-400 font-bold tracking-tight"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 mt-6 mb-12"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/50 text-sm">
              <span className="w-6 h-[1px] bg-cyan-400/30 hidden md:block" />
              🚀 Turning ideas into stunning websites 💻
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/50 text-sm">
              <span className="w-6 h-[1px] bg-cyan-400/30 hidden md:block" />
              ✨ Available for projects and collaborations 🤝
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="group relative px-10 py-5 bg-cyan-500 text-black font-black rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                Say Hello <HiOutlineMail className="text-2xl" />
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
            className="relative w-72 h-72 lg:w-96 lg:h-96"
          >
            {/* Morphing Wavy Blob Container */}
            <motion.div 
              animate={{
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-cyan-500/10 border-2 border-cyan-400/30 backdrop-blur-3xl overflow-hidden p-2"
            >
              <motion.div 
                animate={{
                  borderRadius: [
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "30% 70% 70% 30% / 30% 30% 70% 70%"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full overflow-hidden bg-gradient-to-b from-cyan-500/20 to-transparent"
              >
                <Image
                  src="/image.png"
                  alt="Ahadun Nobi"
                  fill
                  className="object-cover scale-110 brightness-110 contrast-110"
                />
              </motion.div>
            </motion.div>

            {/* Glowing Ring around the blob */}
            <motion.div 
              animate={{
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%"
                ],
                rotate: 360
              }}
              transition={{
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute -inset-4 border border-white/5 opacity-50"
            />

            {/* Floating Stats Badges */}
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  opacity: { delay: 0.6 + i * 0.2 },
                  y: { repeat: Infinity, duration: 3 + i, ease: "easeInOut" },
                  x: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" }
                }}
                className={`absolute ${stat.position} glass-pill p-3 px-4 rounded-2xl flex items-center gap-3 z-30`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl shadow-lg border border-white/10">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-none">{stat.value}+</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold mt-1">{stat.label}</p>
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
