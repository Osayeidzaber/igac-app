"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { SiteSettingsPublic } from "@/lib/data";
import { CountdownTimer } from "../components/CountdownTimer";

export default function ScheduleClient({ settings }: { settings: SiteSettingsPublic }) {
    return (
        <main className="min-h-screen bg-[#111111] text-[#f2c45f] selection:bg-[#f2c45f]/30 selection:text-[#111111] w-full overflow-hidden relative pb-32">
            <style jsx global>{`
                @font-face { font-family: 'Trajan Pro Bold'; src: local('Trajan Pro Bold'), local('TrajanPro-Bold'); font-weight: bold; }
                @font-face { font-family: 'Baskerville Old Face'; src: local('Baskerville Old Face'), local('Baskerville'); }
                @font-face { font-family: 'DeVinne Swash Regular'; src: local('DeVinne Swash Regular'), local('DeVinne Swash'); }
                .font-primary { font-family: 'Trajan Pro Bold', 'Cinzel', serif; }
                .font-secondary { font-family: 'Baskerville Old Face', 'Libre Baskerville', serif; }
                .font-decorative { font-family: 'DeVinne Swash Regular', 'Playfair Display', serif; }
            `}</style>
            
            {/* Global Ambient Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-[#f2c45f]/5 rounded-full blur-[150px] transform translate-x-1/2 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#b38e36]/5 rounded-full blur-[150px] transform -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-6xl">
                
                {/* Back Button */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-16">
                    <Link href="/imun" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#f2c45f] transition-colors font-primary text-xs uppercase tracking-widest font-bold">
                        <div className="w-8 h-8 rounded-full bg-[#151515] border border-[#f2c45f]/20 flex items-center justify-center hover:bg-[#f2c45f]/10 transition-colors"><ArrowLeft className="w-4 h-4" /></div> Home
                    </Link>
                </motion.div>

                {/* Hero Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold text-white mb-6 leading-tight tracking-widest uppercase">
                        The <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-[#ffd97d] to-[#b38e36] italic font-decorative tracking-normal lowercase text-5xl md:text-7xl lg:text-8xl pr-4">
                            Schedule
                        </span>
                    </h1>
                    
                    <p className="text-neutral-400 font-secondary text-lg md:text-xl leading-relaxed mt-8 max-w-2xl mx-auto">
                        A rigorous itinerary of debate, networking, and the highly anticipated Imperial Socials over two days.
                    </p>
                </motion.div>

                {/* Placeholder Timeline */}
                <div className="bg-[#1d1d1d]/50 border border-white/5 rounded-[3rem] p-10 md:p-16 lg:p-24 backdrop-blur-sm max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <Clock className="w-16 h-16 text-[#f2c45f] opacity-50 mb-6" />
                    <h2 className="font-primary text-3xl text-white tracking-widest uppercase">To Be Revealed</h2>
                    <p className="font-secondary text-neutral-400 text-lg leading-relaxed max-w-lg mx-auto">
                        The official chronological breakdown of Session II will be published closer to the conference dates, detailing committee sessions, opening/closing ceremonies, and high-tea breaks.
                    </p>
                    {settings.imun_committees_timer && (
                        <div className="mt-4">
                            <CountdownTimer targetDateStr={settings.imun_committees_timer} label="Schedule Revealed In" secret={true} />
                        </div>
                    )}
                </div>

            </div>
        </main>
    );
}