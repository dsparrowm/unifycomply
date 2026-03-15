"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const demoUrl = "https://calendly.com/akinsanyaowolabi33/30min";

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8 })
                .from(".hero-title-line", { y: 40, opacity: 0, duration: 1, stagger: 0.15 }, "-=0.6")
                .from(".hero-desc", { y: 20, opacity: 0, duration: 1 }, "-=0.6")
                .from(".hero-cta", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8")
                .from(".hero-stats", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");

            // Infinite Marquee
            gsap.to(".marquee-track", {
                xPercent: -50,
                repeat: -1,
                duration: 30,
                ease: "linear",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" ref={containerRef} className="scroll-mt-28 pt-18 pb-16 overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-5xl text-center flex flex-col items-center">

                {/* Badge */}
                <div className="hero-badge mb-8 mt-4">
                    <div className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-sm font-medium text-[#314643] shadow-[0_10px_30px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl backdrop-saturate-150">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none" />
                        <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-white/70 bg-[#d9ebe5]/80 shadow-inner shadow-white/60">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#0a3f33] shadow-[0_0_0_4px_rgba(10,63,51,0.08)]" />
                        </div>
                        <span className="relative">New compliance report now available</span>
                    </div>
                </div>

                {/* Headlines */}
                <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight text-[#081a17] mb-6 leading-[1.1]">
                    <div className="overflow-visible pb-2 -mb-2">
                        <span className="block hero-title-line">Compliance, Unified.</span>
                    </div>
                    <div className="overflow-visible pb-4 -mb-4">
                        <span className="block hero-title-line">Onboarding, Simplified</span>
                    </div>
                </h1>

                <p className="hero-desc text-[1.3rem] leading-relaxed text-[#5a6b67] max-w-3xl mx-auto mb-10">
                    UnifyComply brings identity verification, transaction monitoring, AML
                    <br className="hidden md:inline" /> screening, and AI automations into one powerful compliance platform.
                </p>

                {/* CTA */}
                <div className="hero-cta flex gap-4 items-center mb-8">
                    <Button
                        size="lg"
                        className="rounded-full bg-[#0a3f33] hover:bg-[#073026] text-white px-10 h-16 text-lg font-semibold shadow-md md:px-12"
                        onClick={() => window.open(demoUrl, "_blank", "noopener,noreferrer")}
                    >
                        Book a Demo
                    </Button>
                </div>

                {/* Stats Row */}
                <div className="hero-stats hidden flex items-center gap-3 text-[14px] text-slate-500 mb-20">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                            <img
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-white pointer-events-none relative z-10"
                                src={`https://i.pravatar.cc/100?img=${i + 15}`}
                                alt="Avatar"
                            />
                        ))}
                    </div>
                    <span>50+ Reviews</span>
                    <span className="text-slate-800 font-bold ml-2">5.0</span>
                    <div className="flex text-slate-800 gap-[2px] text-xs">
                        {"★★★★★"}
                    </div>
                </div>

                {/* Trusted By Sections with Technical Grid Borders */}
                <div className="w-full relative mt-12 py-12 hidden">
                    {/* Top dashed line with corner crosses */}
                    <div className="absolute top-0 left-0 w-full h-[1px] border-t border-dashed border-gray-200">
                        <div className="absolute -top-[4px] left-0 text-gray-300 text-xs">+</div>
                        <div className="absolute -top-[4px] right-0 text-gray-300 text-xs">+</div>
                    </div>

                    <p className="text-sm font-semibold text-slate-500 mb-10">
                        Trusted by 100+ customers.
                    </p>

                    <div className="overflow-hidden w-full relative before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent after:z-10">
                        <div className="marquee-track flex whitespace-nowrap items-center w-max text-slate-400 gap-16 md:gap-32 pr-16 md:pr-32">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-16 md:gap-32 items-center">
                                    {/* Nexiflow */}
                                    <span className="text-xl font-bold flex items-center gap-2">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                        Nexiflow
                                    </span>
                                    {/* Vortexia */}
                                    <span className="text-xl font-bold flex items-center gap-2">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                        Vortexia
                                    </span>
                                    {/* LUMITRIX */}
                                    <span className="text-xl font-bold flex items-center gap-2 tracking-widest">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                        LUMITRIX
                                    </span>
                                    {/* Bioplex */}
                                    <span className="text-xl font-bold flex items-center gap-2">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                        Bioplex
                                    </span>
                                    {/* Zenithia */}
                                    <span className="text-xl font-bold flex items-center gap-2">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        Zenithia
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom dashed line with corner crosses */}
                    <div className="absolute bottom-0 left-0 w-full h-[1px] border-b border-dashed border-gray-200">
                        <div className="absolute -bottom-[6px] left-0 text-gray-300 text-xs">+</div>
                        <div className="absolute -bottom-[6px] right-0 text-gray-300 text-xs">+</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
