"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.h2 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                    >
                        Contact<span className="text-accent">.</span>
                    </motion.h2>
                    <motion.p 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-sm sm:text-base md:text-lg text-muted mb-8 sm:mb-10"
                    >
                        Feel free to connect with me for opportunities, collaborations, or tech discussions.
                    </motion.p>

                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6"
                    >
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/kartixrivastava" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all w-full sm:w-auto">
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/kartixrivastava" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all w-full sm:w-auto">
                            <Github className="w-5 h-5" /> GitHub
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://leetcode.com/u/kartixrivastava/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all w-full sm:w-auto">
                            <Code2 className="w-5 h-5" /> LeetCode
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:kartiksrivastava88239@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all w-full sm:w-auto">
                            <Mail className="w-5 h-5" /> Email
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
