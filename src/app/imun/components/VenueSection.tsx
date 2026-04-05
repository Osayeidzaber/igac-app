"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Building, Sparkles, Navigation, ChevronRight, Lock } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import type { SiteSettingsPublic } from "@/lib/data";

export default function VenueSection({ settings }: { settings?: SiteSettingsPublic }) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Countdown Timer State
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set your target date here
        const targetDate = settings?.imun_committees_timer ? new Date(settings.imun_committees_timer).getTime() : new Date("2026-06-01T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            ref={containerRef}
            className="w-full relative min-h-screen py-32 bg-transparent"
        >
            {/* Topography / Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f2c45f 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-[#f2c45f]/5 rounded-full border border-[#f2c45f]/30 mb-8"
                    >
                        <MapPin className="w-4 h-4 text-[#f2c45f]" />
                        <span className="text-[#f2c45f] font-secondary tracking-[0.3em] text-xs uppercase font-bold">
                            Official Venues
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-primary font-black text-white mb-6 tracking-tighter"
                    >
                        Where Leaders <span className="text-[#f2c45f] italic drop-shadow-md">Unite.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-neutral-400 max-w-2xl font-secondary italic"
                    >
                        Experience the grandeur of IGAC's handpicked locations, carefully chosen to elevate your diplomatic journey.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-24 lg:gap-32 w-full max-w-6xl mx-auto">
                    
                    {/* Venue 1: Academic Venue (Picture Left, Text Right) */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Image Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="absolute inset-0 bg-[#f2c45f]/20 blur-xl md:blur-3xl rounded-full" />
                            <div className="w-full aspect-[4/3] bg-[#111111] rounded-[2rem] border border-[#f2c45f]/30 relative overflow-hidden shadow-[0_0_30px_rgba(242,196,95,0.1)] group">
                                {/* Placeholder for AUW image */}
                                <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                                    <Building className="w-20 h-20 text-[#f2c45f]/20" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                                </div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                                    <div className="w-10 h-10 rounded-full bg-[#111111]/80 backdrop-blur-md flex items-center justify-center border border-[#f2c45f]/30">
                                        <Lock className="w-5 h-5 text-[#f2c45f]" />
                                    </div>
                                    <span className="text-[#f2c45f] font-secondary font-bold tracking-widest text-xs uppercase px-3 py-1 bg-[#111111]/80 backdrop-blur-md rounded-full border border-[#f2c45f]/30">
                                        Classified
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-12 bg-[#f2c45f]/50" />
                                <span className="text-[#f2c45f] font-bold tracking-[0.3em] uppercase text-sm">Academic Venue</span>
                            </div>
                            
                            <h3 className="text-4xl md:text-5xl font-primary font-bold text-white mb-6 leading-tight">
                                <span className="block text-[#f2c45f] drop-shadow-md">To Be Revealed...</span>
                            </h3>
                            
                            <p className="text-lg text-neutral-400 leading-relaxed mb-10 font-secondary border-l-2 border-[#f2c45f]/30 pl-6 italic whitespace-pre-line">
                                The main academic venue for our rigorous committee sessions is currently classified. Our unparalleled arenas await your presence.
                            </p>

                            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-widest text-xs transition-all duration-300 w-fit overflow-hidden rounded-full border border-[#f2c45f]/30 hover:border-[#f2c45f] hover:shadow-[0_0_20px_rgba(242,196,95,0.3)] bg-[#111111] disabled:opacity-50 disabled:cursor-not-allowed">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Location Hidden
                                        <Lock className="w-4 h-4" />
                                    </span>
                                <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#f2c45f]/20 to-[#f2c45f]/5 transition-all duration-500 ease-out group-hover:w-full" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Venue 2: Closing Ceremony (Text Left, Picture Right) */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                        {/* Image Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="absolute inset-0 bg-white/10 blur-xl md:blur-3xl rounded-full" />
                            <div className="w-full aspect-[4/3] bg-[#111111] rounded-[2rem] border border-[#f2c45f]/30 relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
                                {/* Placeholder for Club image */}
                                <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                                    <Sparkles className="w-20 h-20 text-white/20" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                                </div>
                                <div className="absolute bottom-6 right-6 flex items-center flex-row-reverse gap-3 z-10">
                                    <div className="w-10 h-10 rounded-full bg-[#111111]/80 backdrop-blur-md flex items-center justify-center border border-white/30">
                                        {settings?.imun_closing_venue_secret !== false ? <Lock className="w-4 h-4 text-white" /> : <Navigation className="w-4 h-4 text-white" />}
                                    </div>
                                    <span className="text-white font-secondary font-bold tracking-widest text-xs uppercase px-3 py-1 bg-[#111111]/80 backdrop-blur-md rounded-full border border-white/30">
                                        {settings?.imun_closing_venue_secret !== false ? "Classified" : "Revealed"}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 flex flex-col items-start lg:items-end text-left lg:text-right justify-center"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-white font-bold tracking-[0.3em] uppercase text-sm">Closing Ceremony</span>
                                <div className="h-[2px] w-12 bg-white/50" />
                            </div>
                            
                            <h3 className="text-5xl md:text-6xl font-primary font-bold text-white mb-6 leading-tight flex flex-wrap items-center gap-4 lg:justify-end">
                                <>
                                    To Be 
                                    <span className="text-white drop-shadow-md">Revealed...</span>
                                    <Lock className="w-8 h-8 md:w-10 md:h-10 text-white/50" />
                                </>
                            </h3>
                            
                            <p className="text-lg text-neutral-400 leading-relaxed mb-10 font-secondary border-l-2 lg:border-l-0 lg:border-r-2 border-white/30 pl-6 lg:pl-0 lg:pr-6 italic whitespace-pre-line text-left lg:text-right">
                                The grand finale's location remains a closely guarded secret. A culmination of days of rigorous discourse, hosted in an elegant masterpiece. The countdown has begun for the ultimate revelation.
                            </p>

                            <div className="flex gap-4 mt-2">
                                <div className="flex flex-col items-center justify-center bg-[#111111] border border-white/20 rounded-xl w-16 h-16 md:w-20 md:h-20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                    <span className="text-2xl md:text-3xl font-primary font-bold text-[#f2c45f]">?</span>
                                    <span className="text-[10px] md:text-xs text-neutral-500 font-secondary uppercase tracking-widest">Days</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#111111] border border-white/20 rounded-xl w-16 h-16 md:w-20 md:h-20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                    <span className="text-2xl md:text-3xl font-primary font-bold text-[#f2c45f]">?</span>
                                    <span className="text-[10px] md:text-xs text-neutral-500 font-secondary uppercase tracking-widest">Hrs</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#111111] border border-white/20 rounded-xl w-16 h-16 md:w-20 md:h-20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                    <span className="text-2xl md:text-3xl font-primary font-bold text-[#f2c45f]">?</span>
                                    <span className="text-[10px] md:text-xs text-neutral-500 font-secondary uppercase tracking-widest">Mins</span>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-[#111111] border border-white/20 rounded-xl w-16 h-16 md:w-20 md:h-20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                    <span className="text-2xl md:text-3xl font-primary font-bold text-[#f2c45f]">?</span>
                                    <span className="text-[10px] md:text-xs text-neutral-500 font-secondary uppercase tracking-widest">Secs</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
