"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        Contact<span className="text-accent">.</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted mb-8 sm:mb-10">
                        Feel free to connect with me for opportunities, collaborations, or tech discussions.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6">
                        <a href="https://www.linkedin.com/in/kartixrivastava" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all w-full sm:w-auto">
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                        <a href="https://github.com/kartixrivastava" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all w-full sm:w-auto">
                            <Github className="w-5 h-5" /> GitHub
                        </a>
                        <a href="https://leetcode.com/u/kartixrivastava/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all w-full sm:w-auto">
                            <Code2 className="w-5 h-5" /> LeetCode
                        </a>
                        <a href="mailto:kartiksrivastava88239@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all w-full sm:w-auto">
                            <Mail className="w-5 h-5" /> Email
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
