"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";

const faqs = [
    {
        q: "I'm unable to upload the payment screenshot on the Google Form (Server Error).",
        a: "If Google Forms shows a server error or restricts file uploads, this is a known Google workspace limitation and not an issue on our end. In this case, please email your screenshot and Transaction ID directly to intlglobalaffairscouncil@gmail.com so we can manually verify your payment."
    },
    {
        q: "How do I contact the Department Head of Delegate Affairs directly?",
        a: (
            <>
                For urgent registration or priority allocation inquiries, you can directly contact our Department Head of Delegate Affairs, <strong className="text-[#f2c45f]">Osayeed Zaber</strong>. Reach out via phone or WhatsApp at <strong className="text-white">01815353082</strong>.
            </>
        )
    },
    {
        q: "When will I receive my country allocation?",
        a: "Allocations are distributed exactly one week before the conference. However, priority and preference are strictly given based on how soon you complete your bKash payment and submit the confirmation form."
    },
    {
        q: "What is the dress code protocol for the conference?",
        a: "Strict Western Formal attire is mandated for the entire duration of the conference. Suits, ties, and conservative formalwear are non-negotiable on the diplomatic floor."
    }
];

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="relative z-10 py-32 container mx-auto px-6 mb-20 max-w-4xl">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <div className="flex items-center justify-center gap-4 mb-6">
                    <MessageSquare className="w-6 h-6 text-[#f2c45f]" />
                    <span className="text-[#f2c45f] font-secondary tracking-[0.3em] text-xs uppercase font-bold">
                        Secretariat Support
                    </span>
                    <MessageSquare className="w-6 h-6 text-[#f2c45f]" />
                </div>
                <h2 className="font-primary text-4xl md:text-5xl text-white font-bold tracking-widest uppercase mb-4">
                    Inquiries
                </h2>
                <div className="h-[1px] w-24 bg-[#f2c45f]/50 mx-auto" />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
            >
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`bg-[#111111] border transition-colors duration-300 rounded-[2rem] overflow-hidden shadow-lg ${
                            openFaq === index ? "border-[#f2c45f]/50 shadow-[0_10px_30px_rgba(242,196,95,0.1)]" : "border-white/5 hover:border-[#f2c45f]/20"
                        }`}
                    >
                        <button 
                            className="w-full text-left px-8 py-8 flex items-start justify-between gap-6 outline-none focus:outline-none"
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                            <span className={`font-primary tracking-wider uppercase text-sm md:text-base leading-relaxed font-bold transition-colors ${openFaq === index ? "text-[#f2c45f]" : "text-white"}`}>
                                {faq.q}
                            </span>
                            <div className={`p-2 rounded-full border transition-colors shrink-0 flex items-center justify-center ${openFaq === index ? "bg-[#f2c45f]/10 border-[#f2c45f]/30" : "bg-[#151515] border-white/5"}`}>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${openFaq === index ? "rotate-180 text-[#f2c45f]" : "text-neutral-500"}`} />
                            </div>
                        </button>
                        
                        <AnimatePresence>
                            {openFaq === index && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }} 
                                    animate={{ height: "auto", opacity: 1 }} 
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <p className="px-8 pb-8 text-neutral-400 font-secondary text-base leading-loose border-t border-white/5 pt-6 bg-[#151515]/50">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}