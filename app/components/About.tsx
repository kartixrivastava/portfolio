"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12"
          >
            About<span className="text-accent">.</span>
          </motion.h2>

          <div className="prose prose-invert prose-base sm:prose-lg max-w-none text-muted leading-relaxed">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I'm Kartik, a developer passionate about building modern web
              applications and solving complex problems.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-4"
            >
              I have a strong foundation in{" "}
              <span className="text-white font-medium">
                Data Structures &amp; Algorithms
              </span>{" "}
              and experience in building production-ready applications using{" "}
              <span className="text-white font-medium">
                React, Next.js, and TypeScript
              </span>
              .
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-4"
            >
              I enjoy designing intuitive user experiences and building scalable
              frontend architectures.
            </motion.p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-12">
            {[
              "Data Structures & Algorithms",
              "React / Next.js development",
              "UI focused frontend engineering",
              "Performance optimization",
            ].map((highlight, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.01, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
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
