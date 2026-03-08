"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
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
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16">
                        Projects<span className="text-accent">.</span>
                    </h2>

                    <div className="space-y-16 lg:space-y-32">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
                            >
                                {/* Image block */}
                                <div className="w-full lg:w-1/2 aspect-video rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group-hover:border-accent/40 transition-all flex items-center justify-center">
                                    <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className={`w-full lg:w-1/2 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:items-end text-left lg:text-right' : 'lg:items-start text-left'}`}>
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>

                                    {/* The description box needs to overlap the image */}
                                    <div className={`bg-white/5 border border-white/10 p-6 rounded-xl mb-6 relative z-10 w-full backdrop-blur-sm lg:shadow-xl ${idx % 2 !== 0 ? 'lg:-mr-12 lg:pr-12 lg:pl-6' : 'lg:-ml-12 lg:pl-12 lg:pr-6'}`}>
                                        <p className="text-muted leading-relaxed">
                                            {project.description}
                                        </p>
                                        {project.metric && (
                                            <p className={`mt-3 text-sm text-accent max-w-max bg-accent/10 px-2 py-1 rounded ${idx % 2 !== 0 ? 'lg:ml-auto' : ''}`}>{project.metric}</p>
                                        )}
                                    </div>

                                    <ul className={`flex flex-wrap gap-2 mb-8 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                                        {project.tech.map(tech => (
                                            <li key={tech} className="font-mono text-xs sm:text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">{tech}</li>
                                        ))}
                                    </ul>

                                    <div className={`flex gap-6 ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
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
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
