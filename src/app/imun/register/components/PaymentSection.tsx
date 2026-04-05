"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, CreditCard, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";

export default function PaymentSection() {
    return (
        <section className="relative z-10 py-24 container mx-auto px-6 max-w-5xl">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#151515] border border-[#f2c45f]/20 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden"
            >
                {/* Background ambient */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2c45f]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-12 relative z-10">
                    
                    {/* Left content */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#111111] border border-white/5 mb-6">
                            <ShieldCheck className="w-4 h-4 text-[#f2c45f]" />
                            <span className="font-secondary text-xs uppercase tracking-widest font-bold text-[#f2c45f]">Step 2</span>
                        </div>
                        
                        <h2 className="font-primary text-3xl md:text-5xl text-white font-bold tracking-widest uppercase mb-6 leading-tight">
                            Payment <br />
                            <span className="text-[#f2c45f] italic font-light lowercase">Confirmation</span>
                        </h2>
                        
                        <p className="font-secondary text-neutral-400 mb-8 leading-relaxed max-w-md">
                            Both Campus Ambassadors and Delegates share a unified fee of <strong className="text-white font-bold">4080 BDT</strong>. 
                            After receiving your selection email, you have <strong className="text-white font-bold">48 hours</strong> to submit your transaction verification to solidify your place. <strong className="text-[#f2c45f]">Country allocation depends on how soon you complete the payment.</strong>
                        </p>
                        
                        <Link 
                            href="https://forms.gle/pGn5tWTWxvYnikTQ7" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-[#f2c45f] text-black px-8 py-4 rounded-full font-primary text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(242,196,95,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        >
                            Verify Transaction <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    {/* Right visual steps */}
                    <div className="flex-1 flex flex-col gap-6 justify-center">
                        <div className="flex items-start gap-4 bg-[#111111]/50 p-6 rounded-2xl border border-white/5">
                            <div className="w-10 h-10 shrink-0 bg-[#f2c45f]/10 rounded-full flex items-center justify-center border border-[#f2c45f]/20">
                                <CreditCard className="w-4 h-4 text-[#f2c45f]" />
                            </div>
                            <div>
                                <h4 className="font-primary text-white text-sm uppercase tracking-widest mb-1">1. Transfer via bKash</h4>
                                <p className="font-secondary text-xs text-neutral-500 leading-relaxed">Send the exact fee (4080 BDT) to the designated accounts mentioned in the verification portal. <strong className="text-white">Save the Transaction ID.</strong></p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-[#111111]/50 p-6 rounded-2xl border border-white/5">
                            <div className="w-10 h-10 shrink-0 bg-[#f2c45f]/10 rounded-full flex items-center justify-center border border-[#f2c45f]/20">
                                <FileText className="w-4 h-4 text-[#f2c45f]" />
                            </div>
                            <div>
                                <h4 className="font-primary text-white text-sm uppercase tracking-widest mb-1">2. Fill Confirmation Form</h4>
                                <p className="font-secondary text-xs text-neutral-500 leading-relaxed">Input your <strong className="text-white">Transaction ID</strong> and upload a <strong className="text-white">screenshot of the bKash payment sent page</strong>.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-[#111111]/50 p-6 rounded-2xl border border-white/5">
                            <div className="w-10 h-10 shrink-0 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                            </div>
                            <div>
                                <h4 className="font-primary text-white text-sm uppercase tracking-widest mb-1">3. Allocation & Confirmation</h4>
                                <p className="font-secondary text-xs text-neutral-500 leading-relaxed">You will get confirmation soon. Due to demand, <strong className="text-white">allocation is given 1 week prior the conference</strong> subject to payment priority.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}