"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Wrench, BrainCircuit } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="w-5 h-5 text-accent" />,
        skills: ["C++", "JavaScript", "TypeScript", "Python"],
    },
    {
        title: "Frontend",
        icon: <Layout className="w-5 h-5 text-accent" />,
        skills: ["React.js", "Next.js", "Tailwind CSS", "ShadCN UI", "TanStack Query"],
    },
    {
        title: "Tools",
        icon: <Wrench className="w-5 h-5 text-accent" />,
        skills: ["Git", "Vercel", "Clerk"],
    },
    {
        title: "Concepts",
        icon: <BrainCircuit className="w-5 h-5 text-accent" />,
        skills: ["Data Structures & Algorithms"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 sm:py-20 lg:py-24 relative border-t border-white/5 bg-white/1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16">
                        Skills<span className="text-accent">.</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/40 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/20 transition-all z-0" />

                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>

                                <ul className="space-y-3 relative z-10">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors shrink-0" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
