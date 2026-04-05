"use client";

import { motion } from "framer-motion";
import { Crown, CheckCircle2 } from "lucide-react";

export default function AmbassadorBenefitsSection() {
    return (
        <section className="relative z-10 py-32 container mx-auto px-6 max-w-6xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f2c45f]/5 via-[#111111]/0 to-transparent pointer-events-none" />
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20 relative"
            >
                <div className="bg-[#151515] p-4 inline-flex items-center justify-center rounded-full border border-[#f2c45f]/20 mb-8 shadow-[0_0_20px_rgba(242,196,95,0.1)]">
                    <Crown className="w-8 h-8 text-[#f2c45f]" />
                </div>
                <h2 className="font-primary text-5xl md:text-6xl text-white font-bold tracking-widest mb-6 uppercase">
                    Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-[#ffd97d] to-[#b38e36]">Ambassador</span>
                </h2>
                <p className="font-secondary text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto italic">
                    Command your institution. Rise through the ranks and claim exclusive executive privileges.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
                {/* Role Overview */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-[#151515] border border-white/5 hover:border-[#f2c45f]/30 p-12 rounded-[2.5rem] shadow-xl group transition-all duration-500"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#f2c45f]/50 to-transparent" />
                        <h3 className="font-primary text-2xl text-[#f2c45f] font-bold tracking-widest uppercase flex-shrink-0">
                            Role Overview
                        </h3>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-[#f2c45f]/50 to-transparent" />
                    </div>
                    
                    <p className="font-secondary text-neutral-300 leading-relaxed text-lg mb-8">
                        As a Campus Ambassador, you are the official representative and primary liaison for IMUN Session II at your university or institution. This is a role of utmost prestige, requiring dedication, networking, and leadership.
                    </p>
                    
                    <div className="bg-[#111111] border-l-2 border-[#f2c45f] p-6 rounded-r-xl">
                        <p className="font-primary text-sm text-neutral-400 uppercase tracking-widest mb-2 font-bold">The Core Directive</p>
                        <p className="font-secondary text-sm text-neutral-500">Recruit, manage, and coordinate the attendance of delegates from your respective campus. The larger your delegation, the greater your rewards.</p>
                    </div>
                </motion.div>

                {/* Key Responsibilities / Benefits */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-[#151515] border border-[#f2c45f]/10 hover:border-[#f2c45f]/40 p-12 rounded-[2.5rem] shadow-[0_10px_40px_rgba(242,196,95,0.05)] group transition-all duration-500 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c45f]/5 rounded-full blur-[80px]" />
                    
                    <div className="flex items-center justify-between mb-10 relative z-10">
                        <h3 className="font-primary text-2xl text-white font-bold tracking-widest uppercase">
                            Executive Perks
                        </h3>
                    </div>

                    <ul className="space-y-6 font-secondary text-neutral-300 text-lg relative z-10">
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-[#f2c45f] shrink-0 mt-1" />
                            <div>
                                <strong className="text-white font-primary text-sm uppercase tracking-widest block mb-1">VIP Recognition & Awards</strong>
                                <span className="text-base text-neutral-400">Compete for the <span className="text-[#f2c45f] font-bold">Best Campus Ambassador</span> and <span className="text-[#f2c45f] font-bold">Outstanding Campus Ambassador</span> titles. Receive exclusive certificates and official Secretariat recommendation letters.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-[#f2c45f] shrink-0 mt-1" />
                            <div>
                                <strong className="text-white font-primary text-sm uppercase tracking-widest block mb-1">Exclusive Swag & Gifts</strong>
                                <span className="text-base text-neutral-400">Top-performing ambassadors receive premium sponsor kits, customized gift pouches, official IMUN apparel, and event merchandise.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-[#f2c45f] shrink-0 mt-1" />
                            <div>
                                <strong className="text-white font-primary text-sm uppercase tracking-widest block mb-1">Secretariat Access</strong>
                                <span className="text-base text-neutral-400">Direct liaison channel to the Secretary General and priority academic support for your delegates.</span>
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}