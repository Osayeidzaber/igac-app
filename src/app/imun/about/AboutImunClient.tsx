"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Globe2, Sparkles, Building2, Scale, MapPin, Calendar, Clock, Crown, Shield, Users, MailCheck, GraduationCap, Coins } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Modular Sections
import ChairmanMessageSection from "./components/ChairmanMessageSection";
import VenueSection from "./components/VenueSection";
import AcademicSection from "./components/AcademicSection";
import AmbassadorSection from "./components/AmbassadorSection";
import DelegateExperienceSection from "./components/DelegateExperienceSection";
import InvestmentSection from "./components/InvestmentSection";
import DecorumSection from "./components/DecorumSection";
import AwardsSection from "./components/AwardsSection";
import InfiniteDivider from "./components/InfiniteDivider";
import RegistrationRoutesSection from "./components/RegistrationRoutesSection";
import type { SiteSettingsPublic } from "@/lib/data";

export default function AboutImunClient({ settings }: { settings: SiteSettingsPublic }) {
    return (
        <main className="min-h-screen bg-[#111111] text-[#f2c45f] selection:bg-[#f2c45f]/30 selection:text-[#111111] w-full overflow-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
                @font-face { font-family: 'Trajan Pro Bold'; src: local('Trajan Pro Bold'), local('TrajanPro-Bold'); font-weight: bold; }
                @font-face { font-family: 'Baskerville Old Face'; src: local('Baskerville Old Face'), local('Baskerville'); }
                @font-face { font-family: 'DeVinne Swash Regular'; src: local('DeVinne Swash Regular'), local('DeVinne Swash'); }
                .font-primary { font-family: 'Trajan Pro Bold', 'Cinzel', serif; }
                .font-secondary { font-family: 'Baskerville Old Face', 'Libre Baskerville', serif; }
                .font-decorative { font-family: 'DeVinne Swash Regular', 'Playfair Display', serif; }
            `}</style>
            
            {/* Global Ambient Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#f2c45f]/5 rounded-full blur-[60px] md:blur-[150px] transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#b38e36]/5 rounded-full blur-[50px] md:blur-[120px] transform translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Hero Section */}
            <section className="relative w-full pt-40 pb-20 flex flex-col items-center justify-center text-center z-10 px-6 min-h-[60vh]">
                <motion.div
                    initial={{ opacity: 0, y: 15 }} // Reduced for mobile
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }} // Faster for mobile
                    className="mb-8 will-change-transform transform-gpu"
                >
                    <div className="inline-flex items-center gap-4 px-6 py-2 border-y border-[#f2c45f]/20 bg-[#111111]/80 backdrop-blur-xl">
                        <Sparkles className="w-4 h-4 text-[#f2c45f]" />
                        <span className="text-[#f2c45f] font-secondary tracking-[0.3em] text-xs uppercase font-bold">
                            Legacy & Prestige
                        </span>
                        <Sparkles className="w-4 h-4 text-[#f2c45f]" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }} // Reduced
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-[6rem] font-primary font-bold text-white mb-6 leading-tight tracking-tight max-w-5xl will-change-transform transform-gpu"
                >
                    About <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2c45f] via-[#ffd97d] to-[#b38e36] italic font-light drop-shadow-sm pr-4 filter">
                        Imperial MUN
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-400 font-secondary max-w-3xl leading-relaxed mt-4 will-change-transform transform-gpu"
                >
                    Forging the next generation of global diplomats, tacticians, and visionaries. We are not just a simulation; we are the crucible where the future of international relations is architected.
                </motion.p>
            </section>

            {/* Pillar Grid Section */}
            <section className="relative z-10 py-24 pb-40 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Pillar 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="group bg-[#151515]/80 backdrop-blur-sm border border-white/5 hover:border-[#f2c45f]/30 p-10 rounded-[2rem] transition-all duration-500 hover:shadow-[0_0_30px_rgba(242,196,95,0.1)] flex flex-col items-start"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#111111] border border-[#f2c45f]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Building2 className="w-6 h-6 text-[#f2c45f]" />
                        </div>
                        <h3 className="text-2xl font-primary font-bold text-white mb-4 group-hover:text-[#f2c45f] transition-colors">
                            The Imperial Standard
                        </h3>
                        <p className="text-neutral-400 font-secondary leading-relaxed text-sm">
                            Imperial MUN elevates the classic debate structure with rigorous academic checks, world-class adjudication, and venues that match the prestige of our councils. We mandate excellence at every tier of diplomacy.
                        </p>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group bg-[#151515]/80 backdrop-blur-sm border border-white/5 hover:border-[#f2c45f]/30 p-10 rounded-[2rem] transition-all duration-500 hover:shadow-[0_0_30px_rgba(242,196,95,0.1)] flex flex-col items-start"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#111111] border border-[#f2c45f]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Globe2 className="w-6 h-6 text-[#f2c45f]" />
                        </div>
                        <h3 className="text-2xl font-primary font-bold text-white mb-4 group-hover:text-[#f2c45f] transition-colors">
                            Global Perspectives
                        </h3>
                        <p className="text-neutral-400 font-secondary leading-relaxed text-sm">
                            Our councils demand a nuanced understanding of real-world geopolitics. Delegates are pushed out of their geographical comfort zones to advocate for intricate, multi-lateral foreign policies.
                        </p>
                    </motion.div>

                    {/* Pillar 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="group bg-[#151515]/80 backdrop-blur-sm border border-white/5 hover:border-[#f2c45f]/30 p-10 rounded-[2rem] transition-all duration-500 hover:shadow-[0_0_30px_rgba(242,196,95,0.1)] flex flex-col items-start lg:col-span-1 md:col-span-2"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#111111] border border-[#f2c45f]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Scale className="w-6 h-6 text-[#f2c45f]" />
                        </div>
                        <h3 className="text-2xl font-primary font-bold text-white mb-4 group-hover:text-[#f2c45f] transition-colors">
                            Uncompromising Justice
                        </h3>
                        <p className="text-neutral-400 font-secondary leading-relaxed text-sm">
                            Debate is merely the beginning. We emphasize the drafting of legally and morally sound resolutions. Our crisis scenarios and crisis directors ensure that immediate action meets long-term accountability.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* Individual Detailed Sections */}
            <ChairmanMessageSection />
            <VenueSection settings={settings} />
            <AcademicSection />
            <AmbassadorSection />
            
            <InfiniteDivider />
            
            <RegistrationRoutesSection />
            <DelegateExperienceSection settings={settings} />
            
            <DecorumSection settings={settings} />
            
            <InvestmentSection settings={settings} />
            <AwardsSection />

        </main>
    );
}