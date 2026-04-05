"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function InfiniteDivider() {
    const text = "UNCOMPROMISING EXCELLENCE • ABSOLUTE DECORUM • ELITE DIPLOMACY • THE IMPERIAL STANDARD • ";

    return (
        <section className="w-full bg-[#f2c45f] py-4 overflow-hidden flex whitespace-nowrap items-center transform -skew-y-2 -my-8 z-20 relative">
            <motion.div
                className="flex items-center gap-8 px-4 font-primary text-2xl md:text-3xl font-extrabold text-[#111111] tracking-[0.2em]"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
                <div className="flex items-center gap-8">
                    <span>{text}</span>
                    <Sparkles className="fill-[#111111] w-6 h-6" />
                </div>
                <div className="flex items-center gap-8">
                    <span>{text}</span>
                    <Sparkles className="fill-[#111111] w-6 h-6" />
                </div>
                <div className="flex items-center gap-8">
                    <span>{text}</span>
                    <Sparkles className="fill-[#111111] w-6 h-6" />
                </div>
                <div className="flex items-center gap-8">
                    <span>{text}</span>
                    <Sparkles className="fill-[#111111] w-6 h-6" />
                </div>
            </motion.div>
        </section>
    );
}