"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowRight, FiSend } from "react-icons/fi";

const contactCards = [
  {
    icon: <HiOutlineMail className="text-2xl text-red-400" />,
    title: "Email",
    value: "ahadunnobi@gmail.com",
    link: "mailto:ahadunnobi@gmail.com"
  },
  {
    icon: <FaLinkedinIn className="text-2xl text-blue-500" />,
    title: "LinkedIn",
    value: "ahadunnobi",
    link: "https://linkedin.com/in/ahadunnobi"
  },
  {
    icon: <FaXTwitter className="text-2xl text-cyan-400" />,
    title: "Twitter",
    value: "@AhadunNobi",
    link: "https://x.com/ahadunnobi"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">Get in Touch</h2>
        <p className="text-white/60 text-sm md:text-base font-medium">Contact Me</p>
      </motion.div>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column: Talk to me */}
        <div className="flex flex-col items-center lg:items-center">
          <h3 className="text-white font-bold text-lg md:text-xl mb-8">Talk to me</h3>
          <div className="w-full max-w-sm flex flex-col gap-4">
            {contactCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-[#0a0f1c] border border-white/5 rounded-2xl shadow-xl hover:border-white/20 hover:bg-white/[0.02] transition-all group relative overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#111827] border border-white/5 mb-4 shadow-inner">
                  {card.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{card.title}</h4>
                <p className="text-white/50 text-xs mb-4 text-center">{card.value}</p>
                
                <div className="flex items-center gap-2 text-white/70 text-xs font-semibold group-hover:text-white transition-colors">
                  Write me 
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Column: Write me your project */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-white font-bold text-lg md:text-xl mb-8 text-center lg:text-left w-full">Write me your project</h3>
          
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name Field */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-[#020617] px-2 text-[10px] uppercase font-bold text-white/50 tracking-wider z-10 transition-colors group-focus-within:text-cyan-400">
                Name
              </label>
              <input 
                type="text" 
                placeholder="Insert your Name" 
                className="w-full bg-transparent border border-white/20 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all shadow-sm relative z-0"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-[#020617] px-2 text-[10px] uppercase font-bold text-white/50 tracking-wider z-10 transition-colors group-focus-within:text-cyan-400">
                Email
              </label>
              <input 
                type="email" 
                placeholder="Insert your email" 
                className="w-full bg-transparent border border-white/20 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all shadow-sm relative z-0"
                required
              />
            </div>

            {/* Project Field */}
            <div className="relative group">
              <label className="absolute -top-2.5 left-4 bg-[#020617] px-2 text-[10px] uppercase font-bold text-white/50 tracking-wider z-10 transition-colors group-focus-within:text-cyan-400">
                Project
              </label>
              <textarea 
                placeholder="Write your project" 
                rows={5}
                className="w-full bg-transparent border border-white/20 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/5 transition-all shadow-sm relative z-0 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="mt-2 self-start flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all border border-white/10 hover:border-white/20 active:scale-95 group"
            >
              Send Message
              <FiSend className="text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
