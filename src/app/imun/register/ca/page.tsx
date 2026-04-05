"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, ExternalLink, Calendar, CheckCircle2, Crown, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CAPage() {
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
                <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-[#f2c45f]/5 rounded-full blur-[150px] transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#f2c45f]/3 rounded-full blur-[150px] transform -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-5xl">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
                    <Link href="/imun/register" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#f2c45f] transition-colors font-primary text-xs uppercase tracking-widest font-bold">
                        <div className="w-8 h-8 rounded-full bg-[#151515] border border-[#f2c45f]/20 flex items-center justify-center hover:bg-[#f2c45f]/10 transition-colors"><ArrowLeft className="w-4 h-4" /></div> Return to Hub
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.1, duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#f2c45f]/20 bg-[#151515] mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2c45f] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f2c45f]"></span>
                            </span>
                            <span className="font-primary text-[10px] text-[#f2c45f] tracking-[0.2em] uppercase font-bold">Applications Open</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-primary font-bold text-white mb-6 leading-[1.1] tracking-widest uppercase">
                            Campus <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-[#ffd97d] to-[#b38e36] italic font-decorative tracking-normal lowercase text-5xl md:text-6xl lg:text-8xl block mt-2">
                                Ambassador
                            </span>
                        </h1>
                        
                        <p className="text-neutral-400 font-secondary text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
                            <strong className="text-white">Command your institution.</strong> Rise through the ranks and claim exclusive executive privileges.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="bg-[#151515] border border-white/5 rounded-[2rem] p-8 md:p-10 group hover:border-[#f2c45f]/20 transition-colors">
                                <h3 className="font-primary text-xl text-[#f2c45f] tracking-widest uppercase mb-4 border-b border-white/5 pb-4">Role Overview</h3>
                                <p className="font-secondary text-neutral-400 leading-relaxed">
                                    As a Campus Ambassador, you are the official representative and primary liaison for IMUN Session II at your university or institution. This is a role of utmost prestige, requiring dedication, networking, and leadership.
                                </p>
                            </div>

                            <div className="bg-[#151515] border border-white/5 rounded-[2rem] p-8 md:p-10 group hover:border-[#f2c45f]/20 transition-colors">
                                <h3 className="font-primary text-xl text-[#f2c45f] tracking-widest uppercase mb-4 border-b border-white/5 pb-4">The Core Directive</h3>
                                <p className="font-secondary text-neutral-400 leading-relaxed">
                                    Recruit, manage, and coordinate the attendance of delegates from your respective campus. The larger your delegation, the greater your rewards.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#f2c45f]/20 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#f2c45f]/40 transition-all shadow-[0_10px_30px_rgba(242,196,95,0.05)]">
                                <div className="absolute top-0 right-0 p-8 opacity-5 text-[#f2c45f] group-hover:opacity-10 transition-opacity"><Crown className="w-32 h-32" /></div>
                                <h3 className="font-primary text-2xl text-white tracking-widest uppercase mb-8 flex items-center gap-3 relative z-10">
                                    <Zap className="w-6 h-6 text-[#f2c45f]" /> Executive Perks
                                </h3>
                                
                                <div className="space-y-6 relative z-10">
                                    <div className="flex gap-4">
                                        <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-[#f2c45f]" /></div>
                                        <div>
                                            <h4 className="font-primary text-sm text-white uppercase tracking-widest mb-1">VIP Recognition</h4>
                                            <p className="font-secondary text-neutral-400 text-sm">Exclusive certificates, official Secretariat recommendation letters, and awards for Top Ambassadors.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-[#f2c45f]" /></div>
                                        <div>
                                            <h4 className="font-primary text-sm text-white uppercase tracking-widest mb-1">Secretariat Access</h4>
                                            <p className="font-secondary text-neutral-400 text-sm">Direct liaison channel to the Secretary General and priority academic support for your delegates.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="bg-gradient-to-b from-[#f2c45f] to-[#dca943] p-[1px] rounded-[2.5rem] shadow-[0_20px_40px_rgba(242,196,95,0.15)] relative">
                            <div className="bg-[#111111] rounded-[2.5rem] p-8 md:p-10 h-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,196,95,0.1)_0%,_transparent_60%)] pointer-events-none" />
                                
                                <Users className="w-12 h-12 text-[#f2c45f] mb-6 relative z-10" />
                                
                                <h3 className="text-2xl font-primary text-white font-bold tracking-widest uppercase mb-2 relative z-10">Sign Up</h3>
                                <p className="font-secondary text-neutral-400 text-sm mb-8 leading-relaxed relative z-10">
                                    Begin your journey as a primary representative of IMUN at your campus.
                                </p>

                                <div className="space-y-4 relative z-10 mb-8">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <span className="font-secondary text-neutral-500 uppercase text-xs tracking-widest">Base Fee</span>
                                        <span className="font-primary text-[#f2c45f] font-bold">4080 BDT</span>
                                    </div>
                                </div>

                                <a 
                                    href="https://forms.gle/Hv1zzVieppwt6YZXA" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-3 w-full bg-[#f2c45f] text-black px-8 py-5 rounded-full font-primary text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(242,196,95,0.2)] relative z-10"
                                >
                                    Apply Now <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-[#151515] border border-white/5 rounded-[2rem] p-8 text-center flex flex-col items-center">
                            <Calendar className="w-8 h-8 text-neutral-500 mb-4" />
                            <h4 className="font-primary text-white text-sm uppercase tracking-widest mb-2">Important Notice</h4>
                            <p className="font-secondary text-xs text-neutral-500 leading-relaxed">
                                Once accepted, you must complete your payment verification on the main hub page within 48 hours to lock your position.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}