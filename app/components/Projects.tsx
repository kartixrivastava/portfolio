"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "UGC AI — AI Content Generation Platform",
        description: "Generates professional lifestyle imagery and short-form videos from product and model photos. Designed creator-focused workflow for rapid content generation.",
        tech: ["React", "TypeScript", "Clerk", "Vercel"],
        github: "https://github.com/kartixrivastava/ugcai",
        live: "https://ugcai-iota.vercel.app/",
        image: "/projects/UGCAi.png",
    },
    {
        title: "VirtualR — VR Developer Platform",
        description: "Modern SaaS landing page for VR development tools. Responsive UI with reusable components. Includes pricing tiers, testimonials, and feature highlights.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/kartixrivastava/virtualr",
        live: "https://virtualr-tan-ten.vercel.app/",
        image: "/projects/VirtualR.png",
    },
    {
        title: "Centora — SaaS Landing Page",
        description: "High-converting SaaS landing page. Performance optimized UI. Modular and reusable component architecture.",
        tech: ["Next.js", "Tailwind CSS", "ShadCN", "Figma"],
        github: "https://github.com/kartixrivastava/centora",
        live: "https://centora-eta.vercel.app/",
        image: "/projects/Centora.png",
    }, {
        title: "CodeFlow — AI Coding Assistant",
        description: "AI-powered coding assistant that helps developers write code faster and more efficiently. Features real-time code suggestions, error detection, and code optimization.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/kartixrivastava/codeflow",
        live: "https://code-flow-dun-seven.vercel.app/",
        image: "/projects/CodeFlow.png",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Projects<span className="text-accent">.</span>
                        </h2>
                        <p className="mt-2 sm:mt-4 text-muted max-w-2xl text-base sm:text-lg mx-auto lg:mx-0">
                            A curated selection of my recent work, focused on AI, SaaS, and cutting-edge web technologies.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 items-center">
                                    {/* Image block with 3D effect */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="w-full lg:w-3/5 aspect-auto min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[315px] rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group/img transition-all shadow-2xl lg:shadow-accent/5"
                                    >
                                        <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity z-20 pointer-events-none" />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain transition-transform duration-700 group-hover/img:scale-105"
                                            sizes="(max-width: 1024px) 100vw, 60vw"
                                        />
                                    </motion.div>

                                    {/* Content block */}
                                    <div className="w-full lg:w-2/5 flex flex-col justify-center">

                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 group-hover:text-accent transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-8 rounded-2xl mb-6 sm:mb-8 relative z-10 w-full shadow-xl">
                                            <p className="text-muted leading-relaxed text-sm sm:text-base md:text-lg italic">
                                                "{project.description}"
                                            </p>
                                        </div>

                                        <ul className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                                            {project.tech.map(tech => (
                                                <li key={tech} className="font-mono text-[10px] sm:text-xs text-accent border border-accent/20 bg-accent/5 px-3 sm:px-4 py-1.5 rounded-full hover:bg-accent/10 transition-colors">
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-4 sm:gap-8">
                                            <a href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 text-sm font-semibold hover:text-accent transition-all hover:translate-x-1">
                                                <ExternalLink className="w-5 h-5" /> Live Demo
                                            </a>
                                            <a href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 text-sm font-semibold hover:text-accent transition-all hover:translate-x-1">
                                                <Github className="w-5 h-5" /> Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Background Glow */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
