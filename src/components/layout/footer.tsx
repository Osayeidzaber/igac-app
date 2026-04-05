import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site-data";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Reveal } from "@/components/motion/reveal";
import { motion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import { MoveUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-white/5 pt-20 pb-10 overflow-hidden bg-[#111111]">
            <div className="absolute inset-0 bg-[#f2c45f]/[0.02] pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
                <div className="grid gap-16 md:grid-cols-12 mb-20">
                    <div className="md:col-span-4">
                        <Reveal>
                            <Link href="/" className="inline-block mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12">
                                        <Image
                                            src="/logo.png"
                                            alt="IGAC Logo"
                                            fill
                                            className="object-contain drop-shadow-[0_0_15px_rgba(242,196,95,0.3)]"
                                        />
                                    </div>
                                    <span className="text-3xl tracking-tighter text-foreground font-primary font-bold">
                                        IGAC<span className="text-[#f2c45f]">.</span>
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-lg text-neutral-400 leading-relaxed font-secondary max-w-md mb-8 italic">
                                "Forging the diplomats, leaders, and changemakers of tomorrow."
                            </p>
                        </Reveal>
                        <div className="flex gap-6">
                            {[
                                { name: "Facebook", href: siteConfig.socials.facebook },
                                { name: "Instagram", href: siteConfig.socials.instagram },
                                { name: "LinkedIn", href: siteConfig.socials.linkedin }
                            ].map((social, i) => (
                                <Reveal key={social.name} delay={0.2 + i * 0.1}>
                                    <Link
                                        href={social.href}
                                        className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-[#f2c45f] transition-colors duration-300"
                                    >
                                        {social.name}
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <Reveal delay={0.3}>
                            <h4 className="font-primary font-bold text-xl tracking-widest uppercase mb-8 text-[#f2c45f]">Network</h4>
                        </Reveal>
                        <ul className="space-y-4">
                            {[
                                { name: "About IGAC", href: "/about" },
                                { name: "Events & Archives", href: "/events" },
                                { name: "Executive Board", href: "/team" },
                                { name: "Join the Family", href: "/join" }
                            ].map((item, i) => (
                                <Reveal key={item.name} delay={0.4 + i * 0.1}>
                                    <li>
                                        <Link href={item.href} className="text-neutral-400 hover:text-[#f2c45f] font-secondary tracking-wide transition-all flex items-center group">
                                            <MoveUpRight className="w-4 h-4 mr-2 text-[#f2c45f] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                            {item.name}
                                        </Link>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <Reveal delay={0.4}>
                            <h4 className="font-primary font-bold text-xl tracking-widest uppercase mb-8 text-[#f2c45f]">IMUN Access</h4>
                        </Reveal>
                        <ul className="space-y-4">
                            {[
                                { name: "IMUN Portal", href: "/imun" },
                                { name: "Committees", href: "/imun/committees" },
                                { name: "Itinerary", href: "/imun/schedule" },
                                { name: "Secretariat", href: "/imun/secretariat" },
                                { name: "Register", href: "/imun/register" }
                            ].map((item, i) => (
                                <Reveal key={item.name} delay={0.5 + i * 0.1}>
                                    <li>
                                        <Link href={item.href} className="text-neutral-400 hover:text-[#f2c45f] font-secondary tracking-wide transition-all flex items-center group">
                                            <MoveUpRight className="w-4 h-4 mr-2 text-[#f2c45f] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                            {item.name}
                                        </Link>
                                    </li>
                                </Reveal>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <Reveal delay={0.5}>
                            <h4 className="font-primary font-bold text-xl tracking-widest uppercase mb-8 text-[#f2c45f]">Contact Us</h4>
                        </Reveal>
                        <Reveal delay={0.6}>
                            <p className="text-neutral-400 font-secondary mb-6 leading-relaxed">
                                Reach out and start your diplomatic journey.
                            </p>
                        </Reveal>
                        <Reveal delay={0.7}>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-3 border border-[#f2c45f]/30 rounded-full text-[#f2c45f] font-bold text-xs uppercase tracking-widest hover:bg-[#f2c45f] hover:text-[#111111] transition-all duration-300"
                            >
                                Dispatch
                            </Link>
                        </Reveal>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <Reveal delay={0.8}>
                        <div className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-primary font-bold">
                            &copy; {new Date().getFullYear()} INTERNATIONAL GLOBAL AFFAIRS COUNCIL
                        </div>
                    </Reveal>
                    <Reveal delay={0.9}>
                        <div className="flex flex-col md:items-end items-center gap-1 group">
                            <div className="text-[10px] uppercase tracking-[0.3em] font-primary font-bold text-neutral-600 mb-1 group-hover:text-[#f2c45f] transition-colors">
                                System Architect Interface
                            </div>
                            <a href="https://github.com/OsayeedZaber" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                <ShinyText
                                    text="Osayeed Zaber"
                                    speed={3}
                                    className="text-sm font-bold tracking-[0.2em] font-primary uppercase"
                                    shineColor="#f2c45f"
                                />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="mt-16 opacity-[0.05] hover:opacity-10 transition-opacity duration-1000 w-full overflow-hidden">
                <TextHoverEffect text="IGAC" />
            </div>
        </footer>
    );
}
