"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 py-3 sm:py-4 backdrop-blur-xl border-b border-border/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-card border border-border text-muted hover:text-foreground transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-accent text-background transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
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
                                className={`flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background text-xs ${theme === "dark" ? "translate-x-7" : "translate-x-0"
                                    }`}
                            >
                                {theme === "dark" ? "🌙" : "☀️"}
                            </motion.span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-background/60 backdrop-blur-lg z-60 md:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-card/80 backdrop-blur-xl border-l border-border z-70 md:hidden shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-border">

                                <span className="font-bold tracking-tighter">Quick Search</span>
                                <div className="flex items-center gap-4">

                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-lg bg-card border border-border text-muted hover:text-foreground transition-colors"
                                    >
                                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-lg bg-accent text-background transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <nav className="flex flex-col gap-4 p-8">
                                {links.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-bold hover:text-accent transition-colors flex items-center justify-between group"
                                        >
                                            {link.name}
                                            <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-auto p-8 border-t border-border bg-muted/20">
                                <p className="text-muted text-xs tracking-widest uppercase mb-4">Say Hello</p>
                                <a href="mailto:kartiksrivastava88239@gmail.com" className="text-lg font-medium text-accent break-all">kartiksrivastava88239@gmail.com</a>

                                <div className="mt-8 flex items-center justify-between">

                                    
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
