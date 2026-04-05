"use client";

import { motion } from "framer-motion";
import { ChevronDown, Globe2, Clock } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiteSettingsPublic } from "@/lib/data";
import { CountdownTimer } from "../../components/CountdownTimer";



export default function RegistrationHero({ settings }: { settings: SiteSettingsPublic }) {
    return (
        <section className="relative w-full pt-40 pb-20 flex flex-col items-center justify-center text-center z-10 px-6 min-h-[60vh] border-b border-[#f2c45f]/10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#111111]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(242,196,95,0.08)_0%,_transparent_70%)] transform-gpu" />
                <div className="absolute w-[100vw] h-[100vw] md:w-[800px] md:h-[800px] left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[url('/noise.png')] opacity-10 md:opacity-20 pointer-events-none md:mix-blend-overlay transform-gpu" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-8 relative z-10 flex flex-col items-center will-change-transform"
            >
                <div className="w-16 h-16 md:w-20 md:h-20 relative mb-8 drop-shadow-[0_0_20px_rgba(242,196,95,0.3)]">
                    <Image src="/Imun/Logo/Golden.png" alt="IMUN logo" fill className="object-contain" priority />
                </div>
                <div className="inline-flex items-center justify-center gap-4 border-y border-[#f2c45f]/30 py-2 min-w-[280px]">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#f2c45f]" />
                    <span className="text-[#f2c45f] font-secondary tracking-[0.4em] text-xs md:text-sm uppercase font-bold">
                        Imperial Model United Nations
                    </span>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#f2c45f]" />
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-[6.5rem] font-primary font-bold text-white mb-6 leading-[1.1] tracking-widest uppercase relative z-10 flex flex-col items-center will-change-transform"
            >
                <span className="drop-shadow-lg md:drop-shadow-2xl">Official</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f2c45f] via-[#dca943] to-[#8a6d29] italic font-decorative tracking-normal normal-case text-6xl md:text-8xl lg:text-[8rem] -mt-4 md:-mt-8 pr-4 pb-12 -mb-12 filter md:drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                    Registration
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="max-w-2xl text-neutral-400 font-secondary text-sm md:text-base mb-16 leading-relaxed relative z-10 will-change-opacity"
            >
                Take your seat at the diplomatic table. Select your designation below to immediately process your application. Click on a role's icon to read more specific details about it.
            </motion.p>
            
        </section>
    );
}