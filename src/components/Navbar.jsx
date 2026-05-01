"use client";

import React, { useState, useEffect } from "react";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiCode,
  HiFolder,
  HiMail,
  HiDocumentText,
  HiSun,
  HiMoon,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeItem, setActiveItem] = useState("Lore");

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  const navItems = [
    { name: "Lore", icon: <HiUser />, href: "#about" },
    { name: "Arsenal", icon: <HiCode />, href: "#tech-stack" },
    { name: "Builds", icon: <HiFolder />, href: "#projects" },
    { name: "DMs", icon: <HiMail />, href: "#contact" },
    { name: "Quests", icon: <HiBriefcase />, href: "#experience" },
    { name: "Tea", icon: <HiDocumentText />, href: "#blog" },
  ];

  const activeGlow = "text-cyan-400 drop-shadow-[0_0_15px_rgba(0,242,255,1)] scale-110 transition-all duration-500";

  return (
    <>
      {/* Desktop Navbar (Top, Full Width Header with Centered Content) */}
      <nav className="fixed top-0 left-0 w-full z-[100] hidden md:block">
        <div className="bg-background/80 backdrop-blur-2xl border-b border-white/10 h-16 flex justify-center shadow-2xl">
        <div className="w-full max-w-6xl px-8 flex items-center justify-between h-full relative">
          <div className="flex items-center z-10">
            <Link 
              href="/" 
              onClick={() => setActiveItem("Home")}
              className="flex items-center transition-transform hover:scale-110 active:scale-95"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={42}
                height={42}
                className="rounded-none brightness-125 contrast-125"
              />
            </Link>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={`group flex items-center gap-2 text-[14px] tracking-widest font-black transition-all duration-300 ${
                      activeItem === item.name ? "text-cyan-400" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <span className={`text-xl transition-transform duration-300 group-hover:scale-125 ${activeItem === item.name ? "text-cyan-400 drop-shadow-[0_0_8px_#00f2ff]" : "text-white/20"}`}>
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center z-10">
            <button
              className={`btn btn-ghost btn-circle transition-all duration-500 ${isDark ? "text-cyan-400 hover:bg-cyan-400/10" : "text-blue-600 hover:bg-blue-600/10"}`}
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <HiSun className="text-2xl" /> : <HiMoon className="text-2xl" />}
            </button>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Navbar (Bottom, Floating Neon Pill Bar) */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[999] w-[92%] max-w-sm md:hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center justify-around bg-black/90 backdrop-blur-3xl border border-white/10 rounded-full h-20 px-4 shadow-[0_20px_60px_rgba(0,242,255,0.2)]"
        >
          {/* Mobile Home (Logo based) */}
          <Link
            href="/"
            onClick={() => setActiveItem("Home")}
            className="flex flex-col items-center justify-center gap-1.5 flex-1 h-full"
          >
            <div className={`text-3xl transition-all duration-300 ${activeItem === "Home" ? activeGlow : "text-white/20"}`}>
              <HiHome />
            </div>
            <span className={`text-[9px] uppercase tracking-widest font-black ${activeItem === "Home" ? "text-cyan-400" : "text-white/10"}`}>
              Home
            </span>
          </Link>

          {/* Main Mobile Navigation */}
          {[navItems[0], navItems[1], navItems[2], navItems[3]].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className="flex flex-col items-center justify-center gap-1.5 flex-1 relative h-full"
            >
              <div className={`text-3xl transition-all duration-300 ${
                activeItem === item.name ? activeGlow : "text-white/20"
              }`}>
                {item.icon}
              </div>
              <span className={`text-[9px] uppercase tracking-widest font-black transition-all duration-300 ${
                activeItem === item.name ? "text-cyan-400 opacity-100" : "text-white/10 opacity-60"
              }`}>
                {item.name}
              </span>
              
              {activeItem === item.name && (
                <motion.div 
                  layoutId="activeTabGlow"
                  className="absolute bottom-2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_15px_#00f2ff]"
                />
              )}
            </Link>
          ))}
          
          <button
            className="flex flex-col items-center justify-center gap-1.5 flex-1 h-full"
            onClick={() => setIsDark(!isDark)}
          >
            <span className={`text-3xl transition-all duration-500 ${isDark ? "text-yellow-400" : "text-blue-400"}`}>
              {isDark ? <HiSun /> : <HiMoon />}
            </span>
            <span className="text-[9px] uppercase tracking-widest font-black text-white/10">
              Theme
            </span>
          </button>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
