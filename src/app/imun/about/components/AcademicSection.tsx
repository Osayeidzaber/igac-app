"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function AcademicSection() {
    return (
        <section className="relative z-10 py-32 overflow-hidden bg-gradient-to-b from-[#111111] to-[#151515]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16 lg:gap-24">
                    
                    {/* Visual Side */}
                    <div className="w-full lg:w-5/12 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative aspect-[3/4] md:aspect-[3/4] rounded-tr-[8rem] rounded-bl-[8rem] overflow-hidden border-2 border-[#f2c45f]/20 bg-[#111111] flex items-center justify-center shadow-[0_0_50px_rgba(242,196,95,0.05)]"
                        >
                            <div className="absolute inset-x-8 inset-y-12 bg-[#111] rounded-3xl overflow-hidden shadow-2xl z-10 p-2">
                                <Image
                                    src="/past-events/imuns1.jpg"
                                    alt="Academic Excellence in IMUN"
                                    fill
                                    className="object-cover rounded-[1.25rem] filter grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/30 pointer-events-none" />
                            </div>
                            
                            {/* Accent Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#f2c45f]/10 blur-[50px] md:blur-[100px] z-0" />
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] w-12 bg-white/20" />
                                <span className="uppercase tracking-widest text-[#f2c45f] text-sm font-semibold font-secondary">
                                    Academic Standard
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-primary font-bold text-white mb-8 leading-tight">
                                Uncompromising Excellence in <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Debate</span>
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 font-secondary leading-relaxed mb-10 border-l-4 border-[#f2c45f]/30 pl-6">
                                In the Model UN circuit, "Academic Standard" defines the true quality of a conference—the rigor of the debate, the precision of the background study materials, and the expertise of the chairs moderating the committee. 
                                <br /><br />
                                The bedrock of Imperial MUN is its uncompromising commitment to this standard. Our Executive Board comprises highly sought-after crisis directors, legal scholars, and veteran debaters who enforce strict procedural compliance and demand factual accuracy from all delegates.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <BookOpen className="w-8 h-8 text-[#f2c45f] mb-4" />
                                <h3 className="text-white font-primary font-bold text-xl mb-2">Legal Drafting</h3>
                                <p className="text-neutral-500 font-secondary text-sm leading-relaxed">
                                    Crafting legally binding resolutions under strict scrutiny.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <ShieldAlert className="w-8 h-8 text-[#f2c45f] mb-4" />
                                <h3 className="text-white font-primary font-bold text-xl mb-2">Crisis Intelligence</h3>
                                <p className="text-neutral-500 font-secondary text-sm leading-relaxed">
                                    Navigate rapid, real-time intelligence drops designed to test fast analytical thinking.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}