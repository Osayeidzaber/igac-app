"use client";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLeft, Crown, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function SecretariatClient() {
    return (
        <main className="min-h-screen bg-[#111111] text-[#f2c45f] mx-auto selection:bg-[#f2c45f]/30 selection:text-[#111111] relative py-20 pb-32 overflow-hidden">
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
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#f2c45f]/5 rounded-full blur-[150px] transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#b38e36]/5 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="container relative z-10 mx-auto px-6 max-w-5xl pt-10">
                {/* Back Button */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-16">
                    <Link href="/imun" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#f2c45f] transition-colors font-primary text-xs uppercase tracking-widest font-bold">
                        <div className="w-8 h-8 rounded-full bg-[#151515] border border-[#f2c45f]/20 flex items-center justify-center hover:bg-[#f2c45f]/10 transition-colors"><ArrowLeft className="w-4 h-4" /></div> Home
                    </Link>
                </motion.div>
                {/* Page Header */}
                <div className="text-center mb-24 relative">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        transition={{ duration: 1.2 }}
                        className="w-24 h-24 mx-auto mb-8 relative drop-shadow-[0_0_20px_rgba(242,196,95,0.3)]"
                    >
                        <Image src="/Imun/Logo/Golden.png" alt="IMUN logo" fill className="object-contain" priority />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                    >
                        <div className="inline-flex items-center gap-4 px-6 py-2 border-y border-[#f2c45f]/20 bg-[#111111]/80 backdrop-blur-xl mb-8">
                            <Crown className="w-4 h-4 text-[#f2c45f]" />
                            <span className="text-[#f2c45f] font-secondary tracking-[0.3em] text-xs uppercase font-bold">
                                Architects of Session II
                            </span>
                            <Crown className="w-4 h-4 text-[#f2c45f]" />
                        </div>
                    </motion.div>
                    <Reveal delay={0.2} width="100%">
                        <h1 className="font-primary text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] text-white uppercase tracking-widest mb-6">
                            The <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-[#ffd97d] to-[#b38e36] italic font-decorative tracking-normal pr-4 lowercase drop-shadow-lg">Secretariat</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.3} width="100%">
                        <p className="text-neutral-400 font-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            The driving forces orchestrating Imperial Model United Nations.
                        </p>
                    </Reveal>
                </div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-[#151515] border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden backdrop-blur-sm max-w-3xl mx-auto text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center"
                >
                    <div className="absolute inset-0 bg-[#f2c45f]/5 opacity-20" />
                    <Lock className="w-16 h-16 text-[#f2c45f] opacity-50 mb-8" />
                    <h2 className="font-primary text-3xl md:text-4xl text-white tracking-widest uppercase mb-4">Classified</h2>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#f2c45f]/50 to-transparent mx-auto mb-8" />
                    <p className="font-secondary text-neutral-400 text-lg leading-relaxed max-w-lg mx-auto relative z-10">
                        The identities of the Core Secretariat members and the Executive Board are heavily guarded and have not yet been revealed to the public. 
                        <br/><br/>
                        Stay tuned to our official portals for the great unveiling.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
