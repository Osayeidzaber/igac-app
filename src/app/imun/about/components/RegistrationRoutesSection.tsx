"use client";

import { motion } from "framer-motion";
import { UserPlus, Briefcase, Key, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegistrationRoutesSection() {
    return (
        <section className="relative z-10 py-32 overflow-hidden bg-[#111111] border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-[#f2c45f]/5 via-[#111111]/0 to-transparent" />
            
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
                            Your Place Awaits
                        </span>
                        <div className="h-[1px] w-8 bg-[#f2c45f]" />
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-primary font-bold text-white mb-8">
                        The Paths of <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Entry</span>
                    </h2>
                    
                    <p className="text-xl text-neutral-400 font-secondary leading-relaxed">
                        Imperial MUN Session II offers multiple avenues to participate in our prestigious simulation. Whether you seek to debate, organize, or adjudicate, secure your application before capacity is reached.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                    {/* CA Route */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#151515]/90 border border-[#f2c45f]/20 p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 shadow-[0_0_30px_rgba(242,196,95,0.05)] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#f2c45f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="w-16 h-16 bg-[#111111] border border-[#f2c45f]/40 rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(242,196,95,0.2)] relative z-10">
                            <Briefcase className="w-8 h-8 text-[#f2c45f]" />
                        </div>
                        
                        <h3 className="text-2xl font-primary font-bold text-[#f2c45f] mb-4 relative z-10">
                            Campus Ambassador
                        </h3>
                        <p className="text-neutral-400 font-secondary leading-relaxed mb-10 flex-grow relative z-10">
                            Take charge of your institution. Build a massive delegation, earn waived fees, receive VIP treatment, and secure an official Secretariat recommendation.
                        </p>
                        
                        <Link href="/imun/register/ca" className="inline-flex items-center gap-2 text-white font-secondary uppercase tracking-widest text-sm font-bold group-hover:gap-4 transition-all relative z-10 cursor-pointer">
                            Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Executive Board Route */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#151515]/90 border border-white/5 p-10 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#f2c45f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="w-16 h-16 bg-[#111111] border border-[#f2c45f]/20 rounded-full flex items-center justify-center mb-8 shadow-inner relative z-10">
                            <Key className="w-8 h-8 text-[#f2c45f]" />
                        </div>
                        
                        <h3 className="text-2xl font-primary font-bold text-white mb-4 relative z-10">
                            Executive Board
                        </h3>
                        <p className="text-neutral-500 font-secondary leading-relaxed mb-10 flex-grow relative z-10">
                            Command the room. We seek veteran debaters and crisis directors to uphold the Imperial Standard, enforce decorum, and adjudicate with supreme authority.
                        </p>
                        
                        <div className="inline-flex items-center gap-2 text-neutral-600 font-secondary uppercase tracking-widest text-sm font-bold relative z-10 cursor-not-allowed">
                            Opening Soon
                        </div>
                    </motion.div>

                    {/* Delegate Route */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#151515]/90 border border-white/5 p-10 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#f2c45f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="w-16 h-16 bg-[#111111] border border-[#f2c45f]/20 rounded-full flex items-center justify-center mb-8 shadow-inner relative z-10">
                            <UserPlus className="w-8 h-8 text-[#f2c45f]" />
                        </div>
                        
                        <h3 className="text-2xl font-primary font-bold text-white mb-4 relative z-10">
                            Delegate Registration
                        </h3>
                        <p className="text-neutral-500 font-secondary leading-relaxed mb-10 flex-grow relative z-10">
                            Enter the crucible. Advocate for multi-lateral policies, engage in intense lobbying, and fight for the ultimate awards on the diplomatic floor.
                        </p>
                        
                        <div className="inline-flex items-center gap-2 text-neutral-600 font-secondary uppercase tracking-widest text-sm font-bold relative z-10 cursor-not-allowed">
                            Opening Soon
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}