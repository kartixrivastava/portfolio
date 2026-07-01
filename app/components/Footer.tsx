"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full py-8 border-t border-border mt-20 "
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="text-sm text-center text-muted">© 2026 Made with ❤️ by Kartik Srivastava</p>

            </div>
        </motion.footer>
    );
}
