"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import type { SiteSettingsPublic } from "@/lib/data";

export default function ClosingSection({ settings }: { settings?: SiteSettingsPublic }) {
    return (
        <section className="w-full relative min-h-[60vh] flex flex-col items-center justify-center py-40 bg-transparent text-center overflow-hidden">
            {/* Ambient Grandeur Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,196,95,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* Faint Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f2c45f05_1px,transparent_1px),linear-gradient(to_bottom,#f2c45f05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-4 mb-10"
                >
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#f2c45f]/50" />
                    <span className="text-[#f2c45f] font-secondary tracking-[0.4em] text-xs uppercase font-bold">
                        The Final Call
                    </span>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#f2c45f]/50" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-[7rem] font-primary font-bold text-white mb-6 tracking-tighter leading-[1.1] max-w-5xl"
                >
                    The World Awaits <br />
                    <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">
                        Your Word
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-neutral-400 font-secondary text-lg md:text-xl max-w-2xl mb-14 leading-relaxed"
                >
                    Do not let this moment pass. Inscribe your legacy within the annals of Imperial MUN and secure your position among tomorrow's architects.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-5 rounded-full border border-[#f2c45f]/30 bg-[#111111]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(242,196,95,0.1)] hover:shadow-[0_0_50px_rgba(242,196,95,0.2)] hover:border-[#f2c45f]/60 hover:bg-[#f2c45f]/10 overflow-hidden transition-all duration-500 flex items-center gap-4"
                >
                    {/* Hover Glow Sweep */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#f2c45f]/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out z-0" />
                    
                    <span className="relative z-10 font-secondary font-bold text-[#f2c45f] tracking-[0.2em] uppercase text-sm">
                        Secure Your Position
                    </span>
                    <MoveRight className="relative z-10 w-5 h-5 text-[#f2c45f] group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
            </div>
            
            {/* Very sleek bottom dark fade block instead of harsh line */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-20" />
        </section>
    );
}
