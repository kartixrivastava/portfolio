"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight, Sparkles, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] pt-20 sm:pt-28 pb-12 flex flex-col justify-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-120 h-120 bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10 relative">
        
        {/* Left Space: Aura Orbit UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 lg:order-1 relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center p-4"
        >
          {/* Central Aura Sphere */}
          <motion.div
            animate={{
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[70%] h-[70%] bg-linear-to-br from-cyan-400/40 via-blue-500/40 to-purple-500/40 dark:from-cyan-400/20 dark:via-blue-500/20 dark:to-purple-500/20 blur-2xl z-0 mix-blend-multiply dark:mix-blend-screen"
          />
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "70% 30% 50% 50% / 30% 30% 70% 70%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[65%] h-[65%] bg-linear-to-tr from-sky-400/50 to-violet-400/50 dark:from-sky-400/20 dark:to-violet-400/20 blur-xl z-0"
          />

          {/* Central Core Glass Layer */}
          <motion.div 
             animate={{ borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 30% 70% / 70% 30% 70% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 w-[55%] h-[55%] border border-white/50 dark:border-white/10 bg-white/30 dark:bg-black/20 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(15,23,42,0.05)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.02)] flex items-center justify-center p-8"
          >
             <motion.div 
                animate={{ borderRadius: ["50% 50% 30% 70% / 70% 30% 70% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 30% 70% / 70% 30% 70% 30%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 border border-white/40 dark:border-white/5 opacity-50 scale-105" 
             />
             <motion.div 
                animate={{ borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "70% 30% 50% 50% / 30% 30% 70% 70%", "40% 60% 70% 30% / 40% 50% 60% 50%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 border border-white/30 dark:border-white/5 opacity-30 scale-110" 
             />
             
             <div className="text-center relative z-20">
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1, borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="w-20 h-20 mx-auto my-3 bg-linear-to-br from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 p-[2px] shadow-xl overflow-hidden block"
               >
                 <motion.div 
                    animate={{ borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full bg-white dark:bg-[#0b0f14] flex items-center justify-center overflow-hidden"
                 >
                    <span className="text-2xl font-black text-slate-800 dark:text-white tracking-tighter">Hello There!</span>
                 </motion.div>
               </motion.div>
               {/* <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white tracking-tight leading-none mt-2">Kartik<span className="text-accent">.</span></h3>
               <p className="text-[10px] font-mono text-slate-500 dark:text-muted uppercase tracking-widest mt-1">Dev Core</p> */}
             </div>
          </motion.div>

          {/* Card 1: Experience / Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="absolute top-[10%] left-[2%] z-20"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-[#121820]/70 p-3 pr-5 shadow-xl backdrop-blur-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-300 transform -rotate-20 transition-transform duration-300 hover:rotate-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold font-mono">Focus</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">Scalable Web Apps</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Card 2: Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="absolute top-[30%] right-[0%] z-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex flex-col gap-2 rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-[#121820]/70 p-4 shadow-xl backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold font-mono flex items-center gap-2">
                <Code2 className="w-3 h-3" /> Tech Stack
              </p>
              <div className="flex gap-1.5 flex-wrap w-28">
                {["React", "Next", "TS", "Tailwind", "Framer Motion", "TanStack Query",""].map(tech => (
                  <span key={tech} className="px-2 py-0.5 text-[9px] font-bold rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

         

          {/* Card 3: Availability */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
            className="absolute bottom-[25%] left-[2%] z-20"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="rounded-xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-[#121820]/80 px-4 py-3 shadow-lg backdrop-blur-md flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200">Available for work</span>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Right Space: Typography & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 flex flex-col gap-6 lg:pl-10 relative z-20 mt-8 lg:mt-0"
        >
          <div className="space-y-4">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-sm w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Available for new opportunities</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              <span className="text-slate-400 dark:text-muted font-light block mb-2 text-2xl sm:text-3xl md:text-4xl tracking-tight">Hello, I'm Kartik.</span>
              Crafting Digital <br className="hidden sm:block" />
              <span className="text-gradient">
                Excellence.
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
            Frontend engineer designing seamless, responsive, and visually stunning web applications. Bridging the gap between design and deep technical execution to create memorable user experiences.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-4">
            <Link
              href="/projects"
              className="group relative flex w-full sm:w-auto justify-center items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden shadow-lg shadow-slate-900/20 dark:shadow-white/10"
            >
              <div className="absolute inset-0 rotate-180 bg-linear-to-tr from-transparent via-white/20 dark:via-black/10 to-transparent translate-y-full group-hover:-translate-y-full transition-transform duration-700 ease-in-out" />
              View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="/Resume/Kartik_Resume.pdf"
              download="Kartik_Srivastava_Resume.pdf"
              className="group flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl border-2 border-slate-200 dark:border-white/10 bg-white/50 dark:bg-transparent px-8 py-3.5 font-bold text-slate-700 dark:text-white transition-all hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/5 active:scale-[0.98] backdrop-blur-sm"
            >
              <Download className="h-4 w-4 group-hover:-translate-y-1 transition-transform" /> 
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
