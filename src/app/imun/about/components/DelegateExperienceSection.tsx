"use client";

import { motion } from "framer-motion";
import { Users, Clock, Shield, Flag } from "lucide-react";
import Image from "next/image";
import type { SiteSettingsPublic } from "@/lib/data";

export default function DelegateExperienceSection({ settings }: { settings?: SiteSettingsPublic }) {
    const days = [
        {
            title: "Day One",
            desc: "The spark of diplomacy is ignited. Delegates converge to set the agenda, deliver opening statements, and begin forging critical alliances in the initial committee sessions."
        },
        {
            title: "Day Two",
            desc: "The crucible of negotiation. As tension rises, delegates plunge into rigorous debate, navigating unexpected crises, drafting working papers, and solidifying their strategic blocs."
        },
        {
            title: "Day Three",
            desc: "The final verdict and grand conclusion. Resolutions are passed, and delegates transition to the highly anticipated Closing Ceremony. The exact venue and details remain classified.",
            isSecret: true,
            access: ""
        }
    ];

    return (
        <section className="relative z-10 py-32 overflow-hidden bg-gradient-to-t from-[#111111] to-[#131313] border-y border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Delegate Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[1px] w-12 bg-[#f2c45f]" />
                                <span className="uppercase tracking-widest text-[#f2c45f] text-sm font-semibold font-secondary">
                                    The Crucible
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-primary font-bold text-white mb-8 leading-tight">
                                The Delegate <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Experience</span>
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-400 font-secondary leading-relaxed mb-6">
                                Imperial MUN Session II is an absolute crucible. You will be thrust into a high-pressure environment where every word spoken on the floor dictates the trajectory of global conflict and resolution.
                            </p>
                            <p className="text-lg text-neutral-500 font-secondary leading-relaxed mb-10">
                                Your experience is designed to break you out of your geographical and ideological comfort zone, forcing you to advocate for intricate, multi-lateral foreign policies while fending off targeted attacks from rival blocs. Every delegate receives an extensive, premium conference kit upon arrival.
                            </p>

                            <div className="flex border-l-4 border-[#f2c45f]/30 pl-6 mt-8">
                                <p className="text-xl md:text-2xl font-primary italic text-white/90 leading-relaxed shadow-sm">
                                    "When the debate gets impossible, the true tacticians begin."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Schedule Path */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1 }}
                            className="bg-[#151515]/90 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <Clock className="w-8 h-8 text-[#f2c45f]" />
                                <h3 className="text-3xl font-primary font-bold text-white tracking-wide">A Three-Day Orchestration</h3>
                            </div>
                            
                            <div className="space-y-12 relative">
                                {/* Vertical Timeline Line */}
                                <div className="absolute top-2 bottom-6 left-[9px] w-[2px] bg-gradient-to-b from-[#f2c45f] via-[#b38e36]/50 to-transparent" />
                                
                                {days.map((day, idx) => (
                                    <div key={idx} className="relative pl-10">
                                        {/* Timeline Dot */}
                                        <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-[#151515] ring-2 ring-[#f2c45f] shadow-[0_0_10px_rgba(242,196,95,0.4)] ${day.isSecret ? 'bg-[#f2c45f] animate-pulse' : 'bg-[#111111]'}`} />
                                        
                                        <h4 className={`text-2xl font-bold font-primary mb-2 ${day.isSecret ? 'text-[#f2c45f]' : 'text-white'}`}>
                                            {day.title}
                                        </h4>
                                        <p className="text-neutral-400 font-secondary leading-relaxed text-sm md:text-base">
                                            {day.desc}
                                        </p>
                                        
                                        {/* Gala Countdown Element */}
                                        {day.isSecret && (
                                            <div className="mt-4 flex gap-4 text-center">
                                                {['?', '?', '?', '?'].map((char, i) => (
                                                    <div key={i} className="flex flex-col gap-1 items-center justify-center p-3 w-16 h-16 bg-[#111111] border border-[#f2c45f]/20 rounded-xl relative overflow-hidden group">
                                                        <div className="absolute inset-0 bg-[#f2c45f]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        <span className="text-2xl font-bold font-primary text-[#f2c45f]">{char}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}