"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Lock, SearchX } from "lucide-react";
import Link from "next/link";

export default function EBPage() {
    return (
        <main className="min-h-screen bg-[#111111] text-[#f2c45f] selection:bg-[#f2c45f]/30 selection:text-[#111111] w-full overflow-hidden relative">
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
                <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2 grayscale" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-5xl">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                    <Link href="/imun/register" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-primary text-xs uppercase tracking-widest font-bold">
                        <div className="w-8 h-8 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"><ArrowLeft className="w-4 h-4" /></div> Return to Hub
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.1, duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-8">
                            <Lock className="w-3.5 h-3.5 text-red-500" />
                            <span className="font-primary text-[10px] text-red-500 tracking-[0.2em] uppercase font-bold">Applications Closed</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-primary font-bold text-white mb-6 leading-[1.1] tracking-widest uppercase opacity-80">
                            Executive <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700 italic font-decorative tracking-normal lowercase text-5xl md:text-6xl lg:text-8xl block mt-2">
                                Board
                            </span>
                        </h1>
                        
                        <p className="text-neutral-500 font-secondary text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
                            The applications for the Executive Board (Chairs, Co-Chairs, and Directors) are currently closed. All positions for Session II have been filled following a rigorous selection phase.
                        </p>

                        <div className="bg-[#151515] border border-white/5 rounded-[2rem] p-8 md:p-10 mb-8 opacity-80">
                            <h3 className="font-primary text-xl text-neutral-400 tracking-widest uppercase mb-8 border-b border-white/5 pb-4">Status & Inquiries</h3>
                            <p className="font-secondary text-neutral-500 leading-relaxed mb-6">
                                If you submitted an application previously and have not heard back, please check your inbox for correspondence from the Secretariat.
                            </p>
                            <p className="font-secondary text-neutral-500 leading-relaxed">
                                You may still apply as a regular Delegate to participate in the assembly floor debates.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="bg-[#1a1a1a]/50 p-[1px] rounded-[2.5rem] relative opacity-80 grayscale">
                            <div className="bg-[#111111] rounded-[2.5rem] p-8 md:p-10 h-full relative overflow-hidden border border-white/10">
                                
                                <SearchX className="w-12 h-12 text-neutral-600 mb-6 relative z-10" />
                                
                                <h3 className="text-2xl font-primary text-neutral-400 font-bold tracking-widest uppercase mb-2 relative z-10">No Openings</h3>
                                <p className="font-secondary text-neutral-500 text-sm mb-8 leading-relaxed relative z-10">
                                    The submission form for the Secretariat and Executive Board is offline.
                                </p>

                                <div className="space-y-4 relative z-10 mb-8">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <span className="font-secondary text-neutral-600 uppercase text-xs tracking-widest">Status</span>
                                        <span className="font-primary text-red-500/80 font-bold tracking-widest text-sm">Closed</span>
                                    </div>
                                </div>
                                <div className="w-full bg-[#151515] text-neutral-600 px-8 py-5 rounded-full font-primary text-sm font-bold uppercase tracking-widest text-center cursor-not-allowed border border-white/5">
                                    Form Unavailable
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </main>
    );
}