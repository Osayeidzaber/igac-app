"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import type { SiteSettingsPublic } from "@/lib/data";

export default function VenueSection({ settings }: { settings?: SiteSettingsPublic }) {
    return (
        <section className="relative z-10 py-32 overflow-hidden border-t bg-[#111111] border-white/5 mt-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#f2c45f]/5 via-[#111111]/0 to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Head */}
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
                            Conference Venues
                        </span>
                        <div className="h-[1px] w-8 bg-[#f2c45f]" />
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-primary font-bold text-white mb-8">
                        Our <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-yellow-400 to-[#b38e36] pr-4">Locations</span>
                    </h2>
                    
                    <p className="text-xl text-neutral-400 font-secondary leading-relaxed">
                        Imperial MUN Session II will be hosted across two distinct venues. The formal committee sessions will take place at our academic partner institution, followed by a celebratory closing Ceramony to conclude the conference.
                    </p>
                </motion.div>

                {/* Vertical Venue Stack instead of old split */}
                <div className="flex flex-col items-center justify-center p-12 md:p-24 rounded-3xl border border-[#f2c45f]/20 bg-neutral-950/80 backdrop-blur-xl transform-gpu mx-auto max-w-4xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI2OS4yODIwMzIzMTg5OTA2NSI+PGcgc3Ryb2tlPSJyZ2JhKDI0MiLCAxOTYsIDk1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48cGF0aCBkPSJNIDQwIDM0LjY0MTAxNjE1MTM3NzUwNSBMMCAzNC42NDEwMTYxNTEzNzc1MDUgTTAgNjkuMjgyMDMyMzE4OTkwNjUgTDQwIDAiLz48L2c+PC9zdmc+')] opacity-20" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <Lock className="w-16 h-16 text-[#f2c45f] animate-pulse mb-8" />
                        <h3 className="font-primary text-3xl md:text-5xl font-bold text-white mb-6 text-center">
                            Venues Remain Classified
                        </h3>
                        <p className="font-secondary text-neutral-400 text-lg md:text-xl text-center max-w-2xl mx-auto mb-10">
                            The exact locations for our academic sessions and the grand closing ceremony are currently under embargo. Rest assured, they will definitely be good. Our unparalleled platforms await your presence.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-6 text-center font-primary text-4xl md:text-6xl text-[#f2c45f]">
                            <div className="flex flex-col items-center">
                                <span>?</span>
                                <span className="text-sm font-secondary text-neutral-500 uppercase tracking-widest mt-2">Days</span>
                            </div>
                            <span className="text-neutral-600">:</span>
                            <div className="flex flex-col items-center">
                                <span>?</span>
                                <span className="text-sm font-secondary text-neutral-500 uppercase tracking-widest mt-2">Hours</span>
                            </div>
                            <span className="text-neutral-600">:</span>
                            <div className="flex flex-col items-center">
                                <span>?</span>
                                <span className="text-sm font-secondary text-neutral-500 uppercase tracking-widest mt-2">Mins</span>
                            </div>
                            <span className="text-neutral-600">:</span>
                            <div className="flex flex-col items-center">
                                <span>?</span>
                                <span className="text-sm font-secondary text-neutral-500 uppercase tracking-widest mt-2">Secs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}