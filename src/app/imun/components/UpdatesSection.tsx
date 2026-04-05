"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, ChevronRight, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { useRef } from "react";

export default function UpdatesSection() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section 
            ref={containerRef}
            className="w-full relative py-32 md:py-48 bg-transparent"
        >
            {/* Background Typography */}
            <motion.div 
                style={{ y: yParallax }}
                className="absolute top-1/4 left-0 right-0 flex justify-center pointer-events-none z-0 opacity-[0.02]"
            >
                <span className="font-primary font-bold text-[10rem] md:text-[20rem] text-white whitespace-nowrap tracking-tighter mix-blend-overlay">
                    UPDATES
                </span>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-[1px]">
                                <div className="w-full h-full bg-[#111111] rounded-full flex items-center justify-center">
                                    <Instagram className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <span className="text-[#f2c45f] font-secondary tracking-[0.3em] text-xs uppercase font-bold">
                                Official Dispatches
                            </span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-primary font-bold text-white mb-6 tracking-tight"
                        >
                            Latest <br />
                            <span className="text-[#f2c45f]">
                                Updates
                            </span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-400 font-secondary text-lg mb-10 max-w-xl leading-relaxed"
                        >
                            Stay informed on crucial announcements, committee releases, and logistical updates leading up to SESSION II. Our official Instagram is the primary source for all live IMUN dispatches.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <a
                                href="https://www.instagram.com/igac.official_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-widest text-xs transition-all duration-500 w-fit overflow-hidden rounded-full border border-white/20 bg-transparent hover:border-transparent hover:shadow-[0_0_40px_rgba(242,196,95,0.2)] hover:scale-105"
                            >
                                {/* Default Background */}
                                <div className="absolute inset-0 w-full h-full bg-[#151515] z-0 transition-opacity duration-300 group-hover:opacity-0" />
                                
                                {/* Instagram Gradient Background Hover */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                                
                                {/* Shine Sweep Effect */}
                                <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[45deg] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out z-0" />

                                <span className="relative z-10 flex items-center gap-3">
                                    <Instagram className="w-4 h-4 text-[#f2c45f] group-hover:text-white transition-colors duration-300" />
                                    <span>Follow @igac.official_</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Mock Instagram Grid */}
                    <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
                        <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                            {/* Post 1 Fallback */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="aspect-square bg-[#1a1a1a] rounded-3xl border border-white/10 relative group overflow-hidden shadow-2xl p-6 flex flex-col justify-center items-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#f2c45f]/10 to-transparent transition-transform duration-700" />
                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 text-center">
                                    <Instagram className="w-8 h-8 text-[#f2c45f] mb-4" />
                                    <h4 className="text-white font-primary text-xl font-bold mb-2 tracking-tight">Stay Connected</h4>
                                    <p className="text-neutral-400 font-secondary text-xs">For the latest news</p>
                                </div>
                            </motion.div>

                            {/* Post 2 Fallback */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 80 }}
                                whileInView={{ opacity: 1, scale: 1, y: 30 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="aspect-square bg-[#151515] rounded-3xl border border-white/10 relative group overflow-hidden shadow-2xl lg:translate-y-8 flex items-center justify-center p-6 text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent transition-transform duration-700" />
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-2">
                                        <Instagram className="w-6 h-6 text-white/50" />
                                    </div>
                                    <h4 className="text-white font-primary font-bold">@igac.official_</h4>
                                    <a 
                                        href="https://www.instagram.com/igac.official_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 px-6 py-2 bg-[#f2c45f] text-[#111111] text-xs font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform"
                                    >
                                        Visit
                                    </a>
                                </div>
                            </motion.div>

                            {/* Post 3 Fallback */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: -20 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="aspect-square bg-[#181818] rounded-3xl border border-white/10 relative group overflow-hidden shadow-2xl lg:-translate-y-5"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent transition-transform duration-700" />
                                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center z-10 relative">
                                    <p className="text-neutral-400 font-secondary text-sm leading-relaxed italic">
                                        "Excited to announce the upcoming session details! Stay tuned..."
                                    </p>
                                    <span className="text-[#f2c45f] text-xs uppercase tracking-widest mt-6 font-bold">Latest Post</span>
                                </div>
                            </motion.div>

                            {/* Post 4 Fallback */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 80 }}
                                whileInView={{ opacity: 1, scale: 1, y: 10 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="aspect-square bg-[#0f0f0f] rounded-3xl border border-white/5 relative flex items-center justify-center p-6 text-center text-neutral-500 font-secondary tracking-widest text-sm"
                            >
                                <a href="https://www.instagram.com/igac.official_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="flex items-center gap-2">Follow For Live Updates <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /></span>
                                </a>
                            </motion.div>
                        </div>
                        
                        {/* Decorative glow behind grid */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-tr from-[#f2c45f]/10 via-[#c39130]/5 to-transparent blur-[120px] -z-10 rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
            
        </section>
    );
}
