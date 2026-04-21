"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12">
                        About<span className="text-accent">.</span>
                    </h2>

                    <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-muted leading-relaxed">
                        <p>
                            I'm Kartik, a developer passionate about building modern web applications and solving complex problems.
                        </p>
                        <p className="mt-4">
                            I have a strong foundation in <span className="text-white font-medium">Data Structures &amp; Algorithms</span> and experience in building production-ready applications using <span className="text-white font-medium">React, Next.js, and TypeScript</span>.
                        </p>
                        <p className="mt-4">
                            I enjoy designing intuitive user experiences and building scalable frontend architectures.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-12">
                        {[
                            "Data Structures & Algorithms",
                            "React / Next.js development",
                            "UI focused frontend engineering",
                            "Performance optimization"
                        ].map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-accent/30 transition-colors"
                            >
                                <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                                <span className="text-foreground">{highlight}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
