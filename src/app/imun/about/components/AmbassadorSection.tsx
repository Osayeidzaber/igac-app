"use client";

import { motion } from "framer-motion";
import { Globe2, Briefcase, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AmbassadorSection() {
    return (
        <section className="relative z-10 py-32 overflow-hidden bg-[#111111]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-[#f2c45f]/10 via-[#111111] to-[#111111]" />
            
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
                            Leadership Track
                        </span>
                        <div className="h-[1px] w-8 bg-[#f2c45f]" />
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-primary font-bold text-white mb-8">
                        The Campus <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Ambassador</span> Program
                    </h2>
                    
                    <p className="text-xl text-neutral-400 font-secondary leading-relaxed mb-12">
                        Leaders are not merely born; they are forged through initiative. The Campus Ambassador (CA) Program is an exclusive leadership track for well-connected, driven individuals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto relative">
                    {/* Ambassador Card 1 - Spans 4 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 md:col-span-4 bg-[#151515]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:-translate-y-2 transition-all duration-500 shadow-xl group hover:border-[#f2c45f]/20 flex flex-col justify-between"
                    >
                        <div>
                            <Globe2 className="w-12 h-12 text-[#f2c45f] mb-8 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-primary font-bold text-white mb-4">
                                Expand Your Network
                            </h3>
                            <p className="text-neutral-500 font-secondary leading-relaxed">
                                Represent Imperial MUN at your respective institution and act as the core liaison between your delegation and the Secretariat.
                            </p>
                        </div>
                    </motion.div>
                    
                    {/* Ambassador Card 2 - Spans 8 cols - The Main Attraction */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="col-span-1 md:col-span-8 bg-[#151515]/80 backdrop-blur-xl border border-[#f2c45f]/30 rounded-3xl p-10 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_30px_rgba(242,196,95,0.08)] group relative overflow-hidden flex flex-col justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f2c45f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Decorative background number */}
                        <div className="absolute -right-6 -top-10 text-[12rem] font-primary font-bold text-white opacity-5 select-none transition-transform duration-700 group-hover:scale-110">
                            01
                        </div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <Award className="w-16 h-16 text-[#f2c45f] mb-6 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(242,196,95,0.5)]" />
                                <h3 className="text-3xl font-primary font-bold text-white mb-4 leading-tight">
                                    Premium Awards & Exclusive Swag
                                </h3>
                            </div>
                            <div>
                                <p className="text-neutral-400 font-secondary leading-relaxed text-lg border-l-2 border-[#f2c45f]/50 pl-6">
                                    Compete for the highly coveted <span className="text-[#f2c45f] font-bold">Best Campus Ambassador</span> & <span className="text-[#f2c45f] font-bold">Outstanding Campus Ambassador</span> titles. 
                                    <br /><br />
                                    Top performers receive exclusive sponsor kits, customized event t-shirts, exclusive gift pouches, and official IMUN merchandise that money can't buy.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Ambassador Card 3 - full width banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="col-span-1 md:col-span-12 bg-gradient-to-r from-[#151515] to-[#1a1a1a] border border-white/5 rounded-3xl p-8 md:p-12 hover:-translate-y-2 transition-all duration-500 shadow-xl group hover:border-[#f2c45f]/20 flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-[#111111] border border-[#f2c45f]/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(242,196,95,0.1)]">
                                <Briefcase className="w-8 h-8 text-[#f2c45f] group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-primary font-bold text-white mb-2">
                                    Official Certification
                                </h3>
                                <p className="text-neutral-500 font-secondary leading-relaxed max-w-2xl">
                                    Receive an official letter of recommendation signed by the Secretary General certifying your outstanding organizational leadership, adding immense weight to your university or professional portfolio.
                                </p>
                            </div>
                        </div>

                        <Link href="/imun/register" className="shrink-0 px-8 py-4 bg-white/5 hover:bg-[#f2c45f]/10 text-white hover:text-[#f2c45f] border border-white/10 hover:border-[#f2c45f]/50 rounded-full font-primary tracking-widest text-sm uppercase font-bold transition-all duration-300 flex items-center gap-3">
                            Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}