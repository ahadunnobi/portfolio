"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "GameHub: The Ultimate Livestreaming Platform",
    description: "This Twitch clone built with Next.js, Prisma, Tailwind, PostgreSQL, and TypeScript offers RTMP/WHIP streaming, real-time chat, viewer count, streamer dashboard, chat controls, and universal search with SSR for speed.",
    image: "/anime.png", // Placeholder image, replace with real screenshot
    techStack: ["TypeScript", "Next.js", "Node.js", "Socket.io", "RTMP/WHIP", "PostgreSQL"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 2,
    title: "Google Docs 2.0: Next-Gen Real-Time Collaboration",
    description: "Google Docs Clone is a full-stack app built with Next.js 13, Shadcn UI, and Tailwind CSS offering real-time editing, collaboration, comments, mentions, notifications, custom table templates, secure auth, and export options.",
    image: "/anime.png", // Placeholder image
    techStack: ["TypeScript", "Next.js", "Node.js", "TipTap", "Tailwind CSS", "Firebase"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 3,
    title: "Google Drive Clone: The Ultimate Platform for File Sharing",
    description: "Google Drive Clone is a modern file storage platform built with Next.js, Shadcn UI, and TypeScript. It offers secure uploads, role-based permissions, file organization, real-time updates, and seamless syncing across devices.",
    image: "/anime.png", // Placeholder image
    techStack: ["Next.js", "React", "Node.js", "Convex", "Clerk", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center bg-[#020617] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">Projects</h2>
        <p className="text-white/60 text-sm md:text-base font-medium">Recent Projects</p>
      </motion.div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-[#0a0f1c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-white/20 transition-colors group"
          >
            {/* Project Image */}
            <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#111827]">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-80" />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-[10px] md:text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg transition-colors border border-white/10"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#0070f3] hover:bg-[#005bb5] text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <FiExternalLink className="text-lg" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
