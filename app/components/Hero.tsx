"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[90vh] pt-24 pb-12 flex flex-col justify-center relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Code-style animated illustration or frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="order-2 lg:order-1 relative aspect-square max-w-[400px] mx-auto lg:mx-0 w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center p-6 sm:p-8 backdrop-blur-sm "
                >
                    <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent opacity-20" />
                    {/* Mockup code window */}
                    <div className="w-full h-full rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10 max-w-full">
                        <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5 shrink-0">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-green-400 opacity-80 flex flex-col gap-2 overflow-hidden wrap-break-word">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "linear" }}
                                className="overflow-hidden whitespace-nowrap border-r-2 border-green-500 pr-2 animate-pulse w-max"
                            >
                                &gt; Hello, World!
                            </motion.div>
                            <div className="text-white mt-2 shrink-0">
                                <span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = {"{"}
                            </div>
                            <div className="pl-4 shrink-0">
                                name: <span className="text-yellow-300">'Kartik Srivastava'</span>,
                            </div>
                            <div className="pl-4 shrink-0">
                                role: <span className="text-yellow-300">'Frontend Developer'</span>,
                            </div>
                            <div className="pl-4 shrink-0 whitespace-normal">
                                passion: <span className="text-yellow-300">'Scalable web apps'</span>
                            </div>
                            <div>{"};"}</div>
                            <div className="mt-4 text-accent animate-pulse">_</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Intro & Description */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="order-1 lg:order-2 flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium w-fit border border-accent/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for work
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Hi, I'm <span className="text-gradient">Kartik.</span>
                        <br />
                        Frontend Developer<span className="text-accent">.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
                        Frontend developer focused on building fast, scalable, and intuitive web applications.
                        Strong foundation in Data Structures &amp; Algorithms with hands-on experience shipping projects using React, Next.js, and TypeScript.
                    </p>

                    <div className="flex flex-wrap gap-3 items-center mt-2 opacity-80">
                        {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind"].map(tech => (
                            <span key={tech} className="px-3 py-1 border border-white/10 rounded-md text-sm bg-white/5">{tech}</span>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <a href="#projects" className="flex items-center gap-2 bg-accent text-[#0B0F14] px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all cursor-pointer">
                            View Projects <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="/Resume/Kartik_Resume.pdf" download="Kartik_Srivastava_Resume.pdf" className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-lg font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                            <Download className="w-4 h-4" /> Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
