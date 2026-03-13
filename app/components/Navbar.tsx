"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className=" fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="text-xl font-bold tracking-tighter group flex items-center">
                        Kartik 
                        <motion.span 
                            className="text-accent ml-1 inline-block"
                            animate={{ rotate: [0, 20, -20, 0] }}
                            transition={{ 
                                duration: 1,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 3
                            }}
                        >
                            /
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
