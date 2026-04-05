"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Building2, User } from "lucide-react";
import type { SiteSettingsPublic } from "@/lib/data";

export default function RegistrationSection({ settings }: { settings?: SiteSettingsPublic }) {
    return (
        <section className="w-full relative min-h-screen py-24 md:py-40 bg-transparent flex flex-col justify-center">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f2c45f10_1px,transparent_1px),linear-gradient(to_bottom,#f2c45f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#f2c45f]/20 bg-[#f2c45f]/5 mb-8"
                    >
                        <Star className="w-4 h-4 text-[#f2c45f]" />
                        <span className="text-[#f2c45f] font-secondary tracking-[0.2em] text-sm uppercase">
                            Secure Your Place
                        </span>
                        <Star className="w-4 h-4 text-[#f2c45f]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-primary font-bold text-white mb-6 tracking-tight"
                    >
                        Official <span className="font-decorative italic text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] to-[#b38e36] pr-4">Registration</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-neutral-400 font-secondary text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Applications for <span className="font-bold text-[#f2c45f]/80">Imperial Model United Nations Session II</span> are currently open. Choose your registration pathway to join the imperial legacy.
                    </motion.p>
                </div>

                {/* Registration Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
                    {/* Campus Ambassador Ticket */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 40, damping: 20, mass: 1 }}
                        className="group relative"
                        style={{ perspective: 1000 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#f2c45f]/0 via-[#f2c45f]/30 to-[#b38e36]/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        
                        <div className="relative h-full bg-[#111111] border border-[#f2c45f]/20 rounded-3xl p-8 md:p-10 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f2c45f] to-transparent opacity-50" />
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-[#f2c45f]/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(242,196,95,0.2)]">
                                    <Star className="w-6 h-6 text-[#f2c45f]" />
                                </div>
                                
                                <h3 className="text-2xl md:text-3xl font-primary font-bold text-white mb-4">
                                    Campus<br />Ambassador
                                </h3>
                                
                                <p className="text-neutral-400 font-secondary leading-relaxed mb-8">
                                    Lead the vanguard at your institution. Recruit delegates and unlock exclusive leadership perks and institutional recognition.
                                </p>
                            </div>

                            <motion.a 
                                href={settings?.imun_ca_url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10 flex items-center justify-between w-full p-4 rounded-xl bg-[#111111] border border-[#f2c45f]/20 group-hover:bg-[#f2c45f] group-hover:border-[#f2c45f] transition-all duration-300 cursor-pointer"
                            >
                                <span className="font-secondary font-semibold text-[#f2c45f] group-hover:text-[#050505] tracking-widest pl-2">
                                    APPLY NOW
                                </span>
                                <div className="w-10 h-10 rounded-lg bg-[#111111]/30 flex items-center justify-center group-hover:bg-[#111111]/10">
                                    <ArrowRight className="w-5 h-5 text-[#f2c45f] group-hover:text-[#050505] group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Delegate Ticket */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 40, damping: 20, mass: 1, delay: 0.2 }}
                        className="group relative"
                        style={{ perspective: 1000 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-l from-[#f2c45f]/0 via-[#f2c45f]/50 to-[#b38e36]/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        
                        <div className="relative h-full bg-[#111111] border border-[#f2c45f]/20 rounded-3xl p-8 md:p-10 overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-transparent via-[#f2c45f] to-transparent opacity-50" />
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-[#f2c45f]/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(242,196,95,0.2)]">
                                    <User className="w-6 h-6 text-[#f2c45f]" />
                                </div>
                                
                                <h3 className="text-2xl md:text-3xl font-primary font-bold text-white mb-4">
                                    Delegate<br />Application
                                </h3>
                                
                                <p className="text-neutral-400 font-secondary leading-relaxed mb-8">
                                    Step into the shoes of global leaders. Join rigorous debates and master the art of diplomacy as a dedicated delegate.
                                </p>
                            </div>

                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative z-10 flex items-center justify-center w-full p-4 rounded-xl bg-[#2a2a2a] text-[#888888] shadow-inner border border-[#333333] cursor-not-allowed"
                            >
                                <span className="font-secondary font-bold tracking-widest text-center text-sm">
                                    APPLICATIONS OPENING SOON
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
