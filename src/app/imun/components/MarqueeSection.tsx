"use client";

import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

export default function MarqueeSection() {
    return (
        <section className="w-full relative z-20 py-12 md:py-24 overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111] z-10 pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,196,95,0.08)_0%,transparent_60%)] pointer-events-none" />

            {/* Top Marquee - Moving Left, Tilted Up */}
            <div className="relative flex whitespace-nowrap overflow-hidden py-6 transform -rotate-3 scale-110 border-y border-[#f2c45f]/20 bg-[#111111]/80 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)] z-0">
                <motion.div 
                    className="flex whitespace-nowrap items-center" 
                    animate={{ x: ["0%", "-50%"] }} 
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...Array(8)].map((_, i) => (
                        <div key={`top-${i}`} className="flex items-center shrink-0">
                            <span className="font-primary font-bold text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-[#fff] to-[#b38e36] tracking-[0.15em] px-8 drop-shadow-[0_0_20px_rgba(242,196,95,0.4)]">
                                IMPERIAL MUN
                            </span>
                            <Crown className="w-12 h-12 md:w-16 md:h-16 text-[#f2c45f]/80 animate-pulse mx-4" />
                            <span className="font-decorative italic font-bold text-5xl md:text-8xl text-transparent px-8 drop-shadow-[0_0_15px_rgba(242,196,95,0.3)]" style={{ WebkitTextStroke: '2px rgba(242,196,95,0.9)' }}>
                                SESSION II
                            </span>
                            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-[#f2c45f]/60 mx-4" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Marquee - Moving Right, Tilted Down */}
            <div className="relative flex whitespace-nowrap overflow-hidden py-4 transform translate-y-[-2rem] rotate-2 scale-105 border-b border-[#f2c45f]/10 bg-[#111111]/90 backdrop-blur-xl shadow-2xl z-10">
                <motion.div 
                    className="flex whitespace-nowrap items-center" 
                    animate={{ x: ["-50%", "0%"] }} 
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...Array(8)].map((_, i) => (
                        <div key={`bottom-${i}`} className="flex items-center shrink-0">
                            <span className="font-secondary text-3xl md:text-6xl text-[#f2c45f]/40 tracking-[0.3em] px-10 uppercase font-light">
                                High-Stakes Diplomacy
                            </span>
                            <div className="w-3 h-3 bg-[#f2c45f]/30 rotate-45 mx-6" />
                            <span className="font-primary text-3xl md:text-6xl text-[#f2c45f]/70 tracking-[0.4em] px-10 uppercase drop-shadow-md">
                                Global Discourse
                            </span>
                            <div className="w-3 h-3 bg-[#f2c45f]/30 rotate-45 mx-6" />
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Edge fades for seamless infinite scrolling look */}
            <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#111111] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#111111] to-transparent z-20 pointer-events-none" />
        </section>
    );
}
