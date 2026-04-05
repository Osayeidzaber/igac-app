"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SiteSettingsPublic } from "@/lib/data";

// Modular Registration Sections
import RegistrationHero from "./components/RegistrationHero";
import FormsGridSection from "./components/FormsGridSection";
import PaymentSection from "./components/PaymentSection";
import FAQSection from "./components/FAQSection";

export default function ImunRegisterClient({ settings }: { settings: SiteSettingsPublic }) {
    return (
        <main className="min-h-screen bg-[#111111] text-[#f2c45f] selection:bg-[#f2c45f]/30 selection:text-[#111111] w-full overflow-hidden">
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
                <div className="absolute top-1/3 left-1/4 w-[100vw] h-[100vw] md:w-[50vw] md:h-[50vw] bg-[#f2c45f]/5 rounded-full blur-[80px] md:blur-[150px] transform -translate-x-1/2 -translate-y-1/2 transform-gpu" />
                <div className="absolute bottom-0 right-1/4 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#b38e36]/5 rounded-full blur-[60px] md:blur-[120px] transform translate-x-1/2 translate-y-1/2 transform-gpu" />
            </div>

            {/* Modular Components */}
            <RegistrationHero settings={settings} />
            <FormsGridSection settings={settings} />
            <PaymentSection />
            <FAQSection />

        </main>
    );
}