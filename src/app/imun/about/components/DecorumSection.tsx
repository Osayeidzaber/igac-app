"use client";

import { motion } from "framer-motion";
import { Scissors, Shirt, Briefcase, Scale } from "lucide-react";
import type { SiteSettingsPublic } from "@/lib/data";

export default function DecorumSection({ settings }: { settings?: SiteSettingsPublic }) {
    return (
        <section className="relative z-10 py-32 overflow-hidden bg-[#111111] border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#f2c45f]/5 via-[#111111]/0 to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-[#151515]/90 border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square group hover:border-[#f2c45f]/30 transition-colors"
                            >
                                <Shirt className="w-12 h-12 text-[#f2c45f] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                                <h4 className="text-white font-primary font-bold tracking-widest uppercase text-sm mb-2">Western Formal</h4>
                                <p className="text-neutral-500 font-secondary text-xs">Impeccable tailoring mandated.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-[#151515]/90 border border-[#f2c45f]/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square mt-8 group hover:border-[#f2c45f]/30 transition-colors"
                            >
                                <Briefcase className="w-12 h-12 text-[#f2c45f] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                                <h4 className="text-white font-primary font-bold tracking-widest uppercase text-sm mb-2">Regal Colors</h4>
                                <p className="text-neutral-500 font-secondary text-xs">Muted, powerful, and understated.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-[#151515]/90 border border-[#f2c45f]/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square -mt-8 group hover:border-[#f2c45f]/30 transition-colors"
                            >
                                <Scale className="w-12 h-12 text-[#f2c45f] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                                <h4 className="text-white font-primary font-bold tracking-widest uppercase text-sm mb-2">Diplomatic Tact</h4>
                                <p className="text-neutral-500 font-secondary text-xs">Unwavering parliamentary language.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="bg-[#151515]/90 border border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square group hover:border-[#f2c45f]/30 transition-colors"
                            >
                                <Scissors className="w-12 h-12 text-[#f2c45f] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
                                <h4 className="text-white font-primary font-bold tracking-widest uppercase text-sm mb-2">Zero Tolerance</h4>
                                <p className="text-neutral-500 font-secondary text-xs">Strict adherence to the code.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] w-12 bg-[#f2c45f]" />
                                <span className="uppercase tracking-widest text-[#f2c45f] text-sm font-semibold font-secondary">
                                    The Code of Conduct
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-primary font-bold text-white mb-8 leading-tight">
                                The Aesthetics of <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Power</span>
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 font-secondary leading-relaxed mb-6 whitespace-pre-line">
                                {settings?.imun_decorum_desc ? settings.imun_decorum_desc : "Appearance dictates authority. The Imperial Code of Decorum is one of the strictest in the global circuit. We do not view dress code as a suggestion—it is an absolute mandate."}
                            </p>
                            <p className="text-lg text-neutral-500 font-secondary leading-relaxed border-l-2 border-[#f2c45f]/20 pl-6 mt-8">
                                Gentlemen are expected in full western formal attire—tailored suits, sober ties, and polished oxford shoes. Ladies are expected in conservative, elegant formalwear. Casual elements are unconditionally prohibited on the diplomatic floor.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}