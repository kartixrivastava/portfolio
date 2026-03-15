"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

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
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex gap-8">
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

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        className="relative inline-flex h-9 w-16 items-center rounded-full border border-border bg-card px-1 shadow-sm transition-colors"
                    >
                        <motion.span
                            layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className={`flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background text-xs ${
                                theme === "dark" ? "translate-x-7" : "translate-x-0"
                            }`}
                        >
                            {theme === "dark" ? "🌙" : "☀️"}
                        </motion.span>
                    </button>
                </div>
            </div>
        </header>
    );
}
