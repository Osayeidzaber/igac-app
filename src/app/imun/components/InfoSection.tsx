"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Clock, Music, Sparkles } from "lucide-react";
import type { SiteSettingsPublic } from "@/lib/data";

export default function InfoSection({ settings }: { settings: SiteSettingsPublic }) {
    // Updated more realistic and premium placeholders
    const infoData = [
        {
            num: "01",
            icon: Calendar,
            title: "Date",
            value: settings.imun_info_date_value || "Secret",
            sub: settings.imun_info_date_sub || "Will be revealed soon",
            delay: 0.1,
        },
        {
            num: "02",
            icon: MapPin,
            title: "Venue",
            value: settings.imun_info_venue_value || "To Be Announced",
            sub: settings.imun_info_venue_sub || "A Premium Location",
            delay: 0.2,
        },
        {
            num: "03",
            icon: Clock,
            title: "Schedule",
            value: settings.imun_info_schedule_value || "In Preparation",
            sub: settings.imun_info_schedule_sub || "Curating the agenda",
            delay: 0.3,
        },
        {
            num: "04",
            icon: Music,
            title: "Band",
            value: settings.imun_info_band_value || "Classified",
            sub: settings.imun_info_band_sub || "An exclusive performance",
            delay: 0.4,
        }
    ];

    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section 
            ref={sectionRef} 
            className="w-full relative min-h-screen flex flex-col justify-center items-center py-20 lg:py-32 bg-transparent"
        >
            {/* Parallax Background Elements */}
            <motion.div 
                style={{ y: bgY }}
                className="absolute inset-0 z-0 pointer-events-none opacity-30"
            >
                <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-[#f2c45f]/10 blur-[150px]" />
                <div className="absolute bottom-[0%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[#b38e36]/10 blur-[120px]" />
            </motion.div>

            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f2c45f10_1px,transparent_1px),linear-gradient(to_bottom,#f2c45f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-10 pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 2xl:max-w-[1400px]">
                
                {/* Redesigned Asymmetrical Header */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-[#f2c45f]" />
                            <span className="text-[#f2c45f] font-secondary tracking-[0.3em] text-xs uppercase font-bold">
                                Conference Overview
                            </span>
                            <div className="h-px w-24 bg-gradient-to-r from-[#f2c45f]/50 to-transparent" />
                        </motion.div>

                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="text-4xl md:text-6xl lg:text-[5rem] font-primary font-bold text-white leading-[1.1] tracking-tight"
                        >
                            The Pinnacle <br />
                            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">
                                of Debate
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="w-full lg:w-4/12 relative pl-6 border-l-2 border-[#f2c45f]/20"
                    >
                        <p className="text-lg md:text-xl text-neutral-300 font-secondary leading-relaxed">
                            <strong className="text-white font-primary font-normal tracking-wide">Imperial Model United Nations Session II</strong> sets a new standard for academic debate. Step into the roles of global delegates and engage in high-stakes negotiations to shape tomorrow's geopolitical landscape.
                        </p>
                    </motion.div>
                </div>

                {/* Elegant List-Style Info Blocks Instead of Generic Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {infoData.map((item) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
                            className="group flex flex-col relative"
                        >
                            {/* Decorative Line */}
                            <div className="w-full h-px bg-gradient-to-r from-[#f2c45f]/30 via-white/5 to-transparent mb-6 group-hover:from-[#f2c45f] transition-all duration-500" />
                            
                            <div className="flex gap-6 sm:gap-10">
                                {/* Huge elegant number */}
                                <div className="text-4xl sm:text-5xl font-primary font-bold text-white/5 group-hover:text-[#f2c45f]/20 transition-colors duration-500 select-none">
                                    {item.num}
                                </div>

                                <div className="flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <item.icon className="w-4 h-4 text-[#f2c45f]/60" />
                                        <h3 className="font-secondary tracking-[0.2em] text-[#f2c45f] uppercase text-xs font-bold">
                                            {item.title}
                                        </h3>
                                    </div>
                                    
                                    <div className="font-primary text-2xl sm:text-3xl font-semibold text-white mb-2 tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                                        {item.value}
                                    </div>
                                    
                                    <p className="text-neutral-500 font-secondary text-sm md:text-base">
                                        {item.sub}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
