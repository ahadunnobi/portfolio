"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Arsenal", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/ahadunnobi", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/ahadunnobi", label: "LinkedIn" },
  { icon: <FaXTwitter />, href: "https://x.com/ahadunnobi", label: "X / Twitter" },
  { icon: <HiOutlineMail />, href: "mailto:ahadunnobi@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#020617] border-t border-white/5 overflow-hidden">
      {/* Top animated gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Ahadun Nobi Logo"
                width={40}
                height={40}
                className="rounded-none brightness-125 contrast-125 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-white font-black text-lg tracking-widest uppercase">
                Ahadun<span className="text-cyan-400">.</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm max-w-[240px] text-center md:text-left leading-relaxed">
              Building thoughtful digital experiences — one component at a time.
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Navigation</p>
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/50 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">Connect</p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:ahadunnobi@gmail.com"
              className="text-white/40 hover:text-cyan-400 text-sm transition-colors duration-200 font-mono"
            >
              ahadunnobi@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono tracking-widest">
            © {new Date().getFullYear()} Ahadun Nobi. All rights reserved.
          </p>
          <p className="text-white/10 text-[10px] uppercase tracking-[0.25em]">
            Crafted with{" "}
            <span className="text-cyan-400/60">Next.js</span> &{" "}
            <span className="text-cyan-400/60">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
