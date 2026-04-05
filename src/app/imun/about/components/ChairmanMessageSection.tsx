"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function ChairmanMessageSection() {
    return (
        <section className="relative z-10 py-32 overflow-hidden bg-[#111111]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#f2c45f]/5 via-[#111111]/0 to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Visual Profile */}
                    <div className="w-full lg:w-5/12 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#f2c45f]/20 bg-[#151515] will-change-transform transform-gpu"
                        >
                            <Image 
                                src="/governing-panel/chairman.jpg"
                                alt="Marzia Jannat Tayeba - Chairman"
                                fill
                                className="object-cover object-top transition-all duration-700 opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
                        </motion.div>
                        
                        {/* Decorative element */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="absolute -bottom-8 -right-8 bg-[#111111] p-6 border border-[#f2c45f]/30 rounded-2xl shadow-xl z-20 will-change-transform transform-gpu"
                        >
                            <Quote className="w-10 h-10 text-[#f2c45f] opacity-50" />
                        </motion.div>
                    </div>

                    {/* Content Message */}
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.6 }}
                            className="will-change-transform transform-gpu"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] w-12 bg-[#f2c45f]" />
                                <span className="uppercase tracking-widest text-[#f2c45f] text-sm font-semibold font-secondary">
                                    Message from the Chairman
                                </span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-white mb-10 leading-tight">
                                A Vision for <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Leadership</span>
                            </h2>
                            
                            <div className="space-y-6 text-lg md:text-xl text-neutral-400 font-secondary leading-relaxed">
                                <p>
                                    Welcome to the battleground of ideas. Imperial Model United Nations is not merely another conference—it is a crucible where raw ambition meets relentless diplomacy. We don't just simulate the UN; we forge the precise tacticians and bold visionaries the future desperately needs.
                                </p>
                                <p>
                                    Every resolution drafted, every crisis navigated, and every alliance forged here carries the weight of authentic policy-making. I demand excellence from every delegate who steps onto this floor. We have engineered an environment designed to push you to your intellectual limits and expose the realities of global conflict.
                                </p>
                                <p>
                                    Step into the arena. Shatter expectations. Let your diplomacy echo with authority. I personally await your performance at the second session.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <h3 className="text-2xl font-primary font-bold text-white mb-1">
                                    Marzia Jannat Tayeba
                                </h3>
                                <p className="text-[#f2c45f] font-secondary uppercase tracking-widest text-sm">
                                    Chairman, International Global Affairs Council (IGAC)
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}