"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function CountdownTimer({ targetDateStr, label = "Reveals In", secret = false }: { targetDateStr: string, label?: string, secret?: boolean }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const target = new Date(targetDateStr).getTime();

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
    }, [targetDateStr]);

    if (!isMounted) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center gap-4 relative z-10 my-8"
        >
            <div className="flex items-center justify-center gap-2 mb-2 text-[#f2c45f]">
                <Clock className="w-4 h-4 text-[#f2c45f] animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-secondary">{label}</span>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 font-primary text-white border border-[#f2c45f]/20 bg-[#111111]/80 backdrop-blur-sm rounded-3xl px-8 md:px-12 py-6 shadow-[0_0_30px_rgba(242,196,95,0.1)]">
                <TimeBlock value={secret ? "?" : timeLeft.days} label="Days" />
                <span className="text-3xl text-neutral-600 font-light -mt-4">:</span>
                <TimeBlock value={secret ? "?" : timeLeft.hours} label="Hours" />
                <span className="text-3xl text-neutral-600 font-light -mt-4">:</span>
                <TimeBlock value={secret ? "?" : timeLeft.mins} label="Mins" />
                <span className="text-3xl text-neutral-600 font-light -mt-4 hidden md:block">:</span>
                <TimeBlock value={secret ? "?" : timeLeft.secs} label="Secs" className="hidden md:flex" />
            </div>
        </motion.div>
    );
}

function TimeBlock({ value, label, className = "" }: { value: number | string, label: string, className?: string }) {
    return (
        <div className={`flex flex-col items-center gap-1 min-w-[3.5rem] md:min-w-[4.5rem] ${className}`}>
            <span className="text-4xl md:text-5xl font-bold font-primary text-[#f2c45f] drop-shadow-[0_0_10px_rgba(242,196,95,0.5)]">
                {typeof value === 'number' ? value.toString().padStart(2, '0') : value}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 font-secondary font-bold">
                {label}
            </span>
        </div>
    );
}
