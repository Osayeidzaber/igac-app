"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Flame } from "lucide-react";
import Image from "next/image";

export default function AwardsSection() {
    return (
        <section className="relative z-10 py-32 overflow-hidden bg-gradient-to-b from-[#111111] to-[#151515] border-y border-[#f2c45f]/10">
            <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat bg-opacity-5 md:mix-blend-overlay opacity-20 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-[#f2c45f]" />
                        <span className="uppercase tracking-widest text-[#f2c45f] text-sm font-semibold font-secondary">
                            The Ultimate Stakes
                        </span>
                        <div className="h-[1px] w-8 bg-[#f2c45f]" />
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-primary font-bold text-white mb-8">
                        To the <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Victor</span>
                    </h2>
                    
                    <p className="text-xl text-neutral-400 font-secondary leading-relaxed">
                        To earn an award at Imperial MUN is to be inscribed in an elite global ledger. Only the most devastatingly effective tacticians, impassioned orators, and meticulous resolution drafters are called to the stage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gradient-to-b from-[#151515] to-[#111111] border border-white/5 p-10 rounded-t-full rounded-b-3xl relative group hover:border-[#f2c45f]/30 transition-colors shadow-2xl flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 bg-[#111111] border border-[#f2c45f]/20 rounded-full flex items-center justify-center -mt-20 mb-8 shadow-[0_0_30px_rgba(242,196,95,0.1)] group-hover:scale-110 transition-transform">
                            <Medal className="w-10 h-10 text-[#f2c45f]" />
                        </div>
                        <h3 className="text-2xl font-primary font-bold text-white mb-4">Outstanding Delegate</h3>
                        <p className="text-neutral-500 font-secondary leading-relaxed text-sm">
                            Awarded to the secondary driving force of the committee. A delegate whose tactical maneuvering and profound knowledge shaped the core resolutions, proving lethal in debate.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-b from-[#1a1710] to-[#111111] border border-[#f2c45f]/30 p-10 rounded-[3rem] relative group shadow-[0_0_50px_rgba(242,196,95,0.1)] flex flex-col items-center text-center -mt-6 z-10"
                    >
                        <div className="w-28 h-28 bg-gradient-to-tr from-[#111111] to-[#b38e36]/20 border-2 border-[#f2c45f] rounded-full flex items-center justify-center -mt-24 mb-8 shadow-[0_0_50px_rgba(242,196,95,0.3)] group-hover:scale-110 transition-transform">
                            <Trophy className="w-12 h-12 text-[#f2c45f] fill-[#f2c45f]/20" />
                        </div>
                        <h3 className="text-3xl font-primary font-bold text-[#f2c45f] mb-4">Best Delegate</h3>
                        <p className="text-neutral-400 font-secondary leading-relaxed">
                            The apex predator of the committee. The undeniable leader who commanded alliances, dictated the flow of debate, dominated crises, and drafted the final passing directive. An absolute icon of diplomacy.
                        </p>
                        <div className="mt-8 py-2 px-6 border border-[#f2c45f]/50 rounded-full font-primary text-xs tracking-widest uppercase text-[#f2c45f]">
                            The Highest Honor
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gradient-to-b from-[#151515] to-[#111111] border border-white/5 p-10 rounded-t-full rounded-b-3xl relative group hover:border-[#f2c45f]/30 transition-colors shadow-2xl flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 bg-[#111111] border border-[#f2c45f]/20 rounded-full flex items-center justify-center -mt-20 mb-8 shadow-[0_0_30px_rgba(242,196,95,0.1)] group-hover:scale-110 transition-transform">
                            <Star className="w-10 h-10 text-[#f2c45f]" />
                        </div>
                        <h3 className="text-2xl font-primary font-bold text-white mb-4">Honorable Mention</h3>
                        <p className="text-neutral-500 font-secondary leading-relaxed text-sm">
                            Awarded to delegates whose passion and unyielding presence demanded the floor's attention. A testament to massive potential, resilience, and highly impactful rhetoric under pressure.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}