"use client";

import { motion } from "framer-motion";
import { Coins, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SiteSettingsPublic } from "@/lib/data";

export default function InvestmentSection({ settings }: { settings?: SiteSettingsPublic }) {
    return (
        <section className="relative z-10 py-32 overflow-hidden bg-[url('/noise.png')] bg-repeat bg-opacity-5">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="w-20 h-20 rounded-full bg-[#111111] border border-[#f2c45f]/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(242,196,95,0.15)] ring-4 ring-[#111111]">
                        <Coins className="w-10 h-10 text-[#f2c45f]" />
                    </div>
                
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <span className="uppercase tracking-widest text-[#f2c45f] text-sm font-semibold font-secondary">
                            Transparency
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-primary font-bold text-white mb-8 leading-tight">
                        Investment & <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Return</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-400 font-secondary leading-relaxed mb-16 whitespace-pre-line">
                        {settings?.imun_investment_desc ? settings.imun_investment_desc : "Participation in Session II is a serious investment in your diplomatic and professional future. The delegate fee is structured to guarantee a completely uncompromising, luxurious experience."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        "All Comprehensive Conference Materials",
                        "Exclusive Premium Delegate Kit",
                        "VIP Access to Grand Closing Ceremony"
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-[#151515]/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-[#f2c45f]/30 transition-all duration-300"
                        >
                            <CheckCircle2 className="w-8 h-8 text-[#f2c45f] mb-6" />
                            <p className="text-white font-primary font-bold text-lg">{feature}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}