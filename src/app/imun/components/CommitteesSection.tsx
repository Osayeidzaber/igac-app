"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Globe, Activity, Scale, Building, Navigation, Zap, Microscope } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import type { SiteSettingsPublic } from "@/lib/data";

const committees = [
    {
        id: "unsc",
        name: "UN Security Council",
        abbr: "UNSC",
        theme: "Global Peace & Conflict Resolution",
        icon: Shield,
        color: "from-blue-900/40 to-blue-900/10",
        border: "border-blue-500/30",
        text: "text-blue-400"
    },
    {
        id: "unhrc",
        name: "UN Human Rights Council",
        abbr: "UNHRC",
        theme: "Protecting Civil Liberties Worldwide",
        icon: Scale,
        color: "from-emerald-900/40 to-emerald-900/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400"
    },
    {
        id: "who",
        name: "World Health Org",
        abbr: "WHO",
        theme: "Global Pandemic Preparedness",
        icon: Activity,
        color: "from-rose-900/40 to-rose-900/10",
        border: "border-rose-500/30",
        text: "text-rose-400"
    },
    {
        id: "imf",
        name: "Int. Monetary Fund",
        abbr: "IMF",
        theme: "Economic Stabilization & Trade",
        icon: Building,
        color: "from-amber-900/40 to-amber-900/10",
        border: "border-amber-500/30",
        text: "text-amber-400"
    },
    {
        id: "disec",
        name: "DISEC",
        abbr: "1st Committee",
        theme: "Disarmament & Global Security",
        icon: Navigation,
        color: "from-violet-900/40 to-violet-900/10",
        border: "border-violet-500/30",
        text: "text-violet-400"
    },
    {
        id: "unep",
        name: "UN Environ. Prog.",
        abbr: "UNEP",
        theme: "Climate Action & Ecology",
        icon: Globe,
        color: "from-teal-900/40 to-teal-900/10",
        border: "border-teal-500/30",
        text: "text-teal-400"
    },
    {
        id: "interpol",
        name: "INTERPOL",
        abbr: "INTERPOL",
        theme: "Transnational Crime & Cyber Security",
        icon: Zap,
        color: "from-cyan-900/40 to-cyan-900/10",
        border: "border-cyan-500/30",
        text: "text-cyan-400"
    },
    {
        id: "crisis",
        name: "JCC / Crisis",
        abbr: "CRISIS",
        theme: "Classified Historical Incident",
        icon: Microscope,
        color: "from-red-900/40 to-red-900/10",
        border: "border-red-500/30",
        text: "text-red-400"
    }
];

export default function CommitteesSection({ settings }: { settings?: SiteSettingsPublic }) {
    const sectionRef = useRef<HTMLElement>(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (!settings?.imun_committees_timer) return;
        const target = new Date(settings.imun_committees_timer).getTime();

        const update = () => {
            const now = new Date().getTime();
            const diff = target - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),     
                mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                secs: Math.floor((diff % (1000 * 60)) / 1000)
            });
        };

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [settings?.imun_committees_timer]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section 
            ref={sectionRef}
            className="w-full relative py-32 md:py-48 bg-transparent"
            style={{ perspective: "2000px" }}
        >
            {/* Hexagonal abstract grid background */}
            <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI2OS4yODIwMzIzMTg5OTA2NSI+PGcgc3Ryb2tlPSJyZ2JhKDI0MiLCAxOTYsIDk1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48cGF0aCBkPSJNIDQwIDM0LjY0MTAxNjE1MTM3NzUwNSBMMCAzNC42NDEwMTYxNTEzNzc1MDUgTTAgNjkuMjgyMDMyMzE4OTkwNjUgTDQwIDAiLz48L2c+PC9zdmc+')] opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="mb-6 font-secondary text-[#f2c45f] tracking-[0.4em] uppercase text-sm"
                    >
                        Discover the Platforms
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-primary font-bold text-white mb-8 tracking-tighter"
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f2c45f] to-[#8a6d2c]">COMMITTEES</span>
                    </motion.h2>
                </div>

                <motion.div 
                    style={{ rotateX, scale }}
                    className="flex flex-col items-center justify-center p-12 md:p-24 rounded-3xl border border-[#f2c45f]/20 bg-neutral-950/80 backdrop-blur-xl transform-gpu mx-auto max-w-4xl"
                >
                    <Microscope className="w-16 h-16 text-[#f2c45f] animate-pulse mb-8" />
                    <h3 className="font-primary text-3xl md:text-5xl font-bold text-white mb-6 text-center">
                        Committees Remain Classified
                    </h3>
                    <p className="font-secondary text-neutral-400 text-lg md:text-xl text-center max-w-2xl mx-auto mb-10">
                        The comprehensive list of interactive arenas and global matrices is currently under embargo.
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
                </motion.div>
            </div>
        </section>
    );
}
