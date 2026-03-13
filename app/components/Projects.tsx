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
        metric: "Authentication built with Clerk.",
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
    },{
        title:"CodeFlow — AI Coding Assistant",
        description:"AI-powered coding assistant that helps developers write code faster and more efficiently. Features real-time code suggestions, error detection, and code optimization.",
        tech:["React","Tailwind CSS"],
        github:"https://github.com/kartixrivastava/codeflow",
        live:"https://code-flow-dun-seven.vercel.app/",
        image:"/projects/CodeFlow.png",
    }
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Projects<span className="text-accent">.</span>
                        </h2>
                        
                        <div className="hidden md:flex gap-4">
                            <button 
                                onClick={handlePrev} 
                                className="p-3 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors bg-white/5 backdrop-blur-sm"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button 
                                onClick={handleNext} 
                                className="p-3 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors bg-white/5 backdrop-blur-sm"
                                aria-label="Next project"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="overflow-hidden">
                            <motion.div 
                                className="flex"
                                animate={{ x: `-${currentIndex * 100}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {projects.map((project, idx) => (
                                    <div 
                                        key={project.title}
                                        className="w-full shrink-0 flex-none focus:outline-none"
                                    >
                                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center px-1">
                                            {/* Image block */}
                                            <div className="w-full lg:w-1/2 aspect-video rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group/img transition-all flex items-center justify-center">
                                                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity z-20 pointer-events-none" />
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start text-left">
                                                <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-accent transition-colors">{project.title}</h3>

                                                <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-6 relative z-10 w-full backdrop-blur-sm lg:shadow-xl lg:-ml-12 lg:pl-12 lg:pr-6">
                                                    <p className="text-muted leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                    {project.metric && (
                                                        <p className="mt-3 text-sm text-accent max-w-max bg-accent/10 px-2 py-1 rounded">{project.metric}</p>
                                                    )}
                                                </div>

                                                <ul className="flex flex-wrap gap-2 mb-8">
                                                    {project.tech.map(tech => (
                                                        <li key={tech} className="font-mono text-xs sm:text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">{tech}</li>
                                                    ))}
                                                </ul>

                                                <div className="flex gap-6">
                                                    <a href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                                                        <ExternalLink className="w-5 h-5" /> Live Demo
                                                    </a>
                                                    <a href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                                                        <Github className="w-5 h-5" /> Source
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        
                        {/* Mobile Navigation */}
                        <div className="flex gap-4 justify-center mt-12 md:hidden">
                            <button 
                                onClick={handlePrev} 
                                className="p-3 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors bg-white/5 backdrop-blur-sm"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button 
                                onClick={handleNext} 
                                className="p-3 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-colors bg-white/5 backdrop-blur-sm"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* Dots Indicators */}
                        <div className="flex justify-center gap-3 mt-8">
                            {projects.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        currentIndex === idx 
                                            ? "bg-accent scale-125" 
                                            : "bg-white/20 hover:bg-white/40"
                                    }`}
                                    aria-label={`Go to project ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
