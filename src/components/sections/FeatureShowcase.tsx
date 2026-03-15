"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight, Layers, Bot, User, Check, ShieldCheck, AlertCircle, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const demoUrl = "https://calendly.com/akinsanyaowolabi33/30min";

const VerificationMockup = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        // Cursor moving up
        tl.to('.v-cursor', { x: -30, y: -20, duration: 1, ease: 'power2.inOut' })
            // Checklist items stagger in
            .fromTo('.v-check-item',
                { opacity: 0, x: -10 },
                { opacity: 1, x: 0, duration: 0.5, stagger: 0.4, ease: 'back.out(1.5)' }
            )
            // Badge pop in
            .fromTo('.v-verified',
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' },
                "-=0.2"
            )
            // Cursor moves away
            .to('.v-cursor', { x: 0, y: 0, duration: 1, ease: 'power2.inOut', delay: 1 })
            // Fade out items to loop
            .to(['.v-check-item', '.v-verified'], { opacity: 0, duration: 0.4 });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-white/50 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="p-6 pb-4 space-y-4 relative z-10">
                <div className="flex items-center gap-3 border-b border-gray-50 pb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center shrink-0">
                        <img src="https://i.pravatar.cc/100?img=33" alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="h-3 w-28 rounded bg-slate-200 mb-2" />
                        <div className="h-2 w-16 rounded bg-slate-100" />
                    </div>
                    <div className="v-verified px-2 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold rounded-lg flex items-center gap-1 opacity-0">
                        <ShieldCheck className="w-3 h-3" /> VERIFIED
                    </div>
                </div>

                <div className="h-44 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden flex flex-col p-4">
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider mb-3 uppercase">AI Analysis</span>

                    <div className="space-y-3 flex-1">
                        <div className="v-check-item flex items-center gap-3 opacity-0">
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-blue-600" />
                            </div>
                            <span className="text-xs text-slate-600 font-medium">Document ID Scanned</span>
                        </div>
                        <div className="v-check-item flex items-center gap-3 opacity-0">
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-blue-600" />
                            </div>
                            <span className="text-xs text-slate-600 font-medium">Biometric Match: 99.8%</span>
                        </div>
                        <div className="v-check-item flex items-center gap-3 opacity-0">
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-blue-600" />
                            </div>
                            <span className="text-xs text-slate-600 font-medium">Global Watchlist Cleared</span>
                        </div>
                    </div>

                    {/* Faux Cursor & UI piece */}
                    <div className="v-cursor absolute bottom-3 right-3 flex items-center z-10">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="translate-y-2 -translate-x-4 z-20 drop-shadow-md">
                            <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.94c.45 0 .81-.36.81-.81V3.21c0-.45-.36-.81-.81-.81H6.31c-.45 0-.81.36-.81.81z" fill="#F97316" />
                        </svg>
                        <div className="px-3 py-1.5 bg-white shadow-xl shadow-orange-500/10 border border-orange-100 rounded-full flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full overflow-hidden">
                                <img src="https://i.pravatar.cc/100?img=11" alt="reviewer" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[10px] font-semibold text-orange-600">Reviewing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ScreeningMockup = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });

        // Endless incoming transaction loop
        tl.fromTo('.s-alert-row',
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 1.5, ease: 'power2.out' }
        )
            // Wait and clear them out smoothly
            .to('.s-alert-row', { opacity: 0, y: -10, duration: 0.4, stagger: 0.3, delay: 2 });
    }, { scope: containerRef });

    const alerts = [
        { id: 11, name: "Marcus Johnson", amount: "$12,450", status: "Review", risk: "high" },
        { id: 12, name: "Sarah Chen", amount: "$3,200", status: "Cleared", risk: "low" },
        { id: 13, name: "TechFlow Inc.", amount: "$45,000", status: "Pending", risk: "medium" },
    ];

    return (
        <div ref={containerRef} className="w-full max-w-md mx-auto relative pl-12 pt-6 overflow-hidden h-full min-h-[300px]">
            {/* Subtle grid bg */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

            <div className="bg-white rounded-tl-3xl shadow-2xl border-t border-l border-white/60 h-full w-full relative z-10 flex flex-col">
                <div className="h-12 border-b border-gray-100 flex items-center px-6 gap-2 bg-gray-50/50 rounded-tl-3xl shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="flex flex-col p-6 gap-4">
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">Live Transaction Stream</span>

                    <div className="flex flex-col gap-3">
                        {alerts.map((alert) => (
                            <div key={alert.id} className="s-alert-row opacity-0 flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                <div className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm overflow-hidden bg-white shrink-0">
                                    <img src={`https://i.pravatar.cc/150?img=${alert.id}`} alt="user" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-slate-700">{alert.name}</div>
                                    <div className="text-xs text-slate-500 font-medium mt-0.5">{alert.amount} • Wire Transfer</div>
                                </div>
                                <div className={cn(
                                    "px-2.5 py-1 text-[10px] font-bold rounded-lg flex items-center gap-1",
                                    alert.risk === "high" ? "bg-red-50 text-red-600 border border-red-100" :
                                        alert.risk === "medium" ? "bg-orange-50 text-orange-600 border border-orange-100" :
                                            "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                )}>
                                    {alert.risk === "high" && <AlertCircle className="w-3 h-3" />}
                                    {alert.risk === "medium" && <FileText className="w-3 h-3" />}
                                    {alert.risk === "low" && <Check className="w-3 h-3" />}
                                    {alert.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function FeatureShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.showcase-card');

        cards.forEach((card) => {
            gsap.fromTo(card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <section id="features" className="scroll-mt-28 py-24 px-6 relative bg-white" ref={containerRef}>
            <div className="container mx-auto max-w-6xl space-y-24">

                {/* Card 1 */}
                <div className="showcase-card bg-[#eef1fa] rounded-[2.5rem] p-12 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">
                    {/* Mockup */}
                    <div className="hidden md:block flex-1 w-full order-1 relative z-10">
                        <VerificationMockup />
                    </div>

                    {/* Content */}
                    <div className="flex-1 order-2 relative z-10">
                        <div className="inline-flex items-center gap-2 text-[#2f4356] font-semibold text-sm mb-6">
                            <Layers className="w-5 h-5 text-[#3a6889]" />
                            <span>AI Powered Verification</span>
                        </div>
                        <h2 className="text-4xl md:text-4xl font-medium tracking-tight text-text-main mb-6 leading-tight">
                            Smarter Compliance with<br />AI Driven Intelligence
                        </h2>
                        <p className="text-[#596f84] text-lg leading-relaxed mb-10 max-w-xl">
                            UnifyComply doesn't just collect results — it analyzes them. Our AI engine combines identity, banking, TM and AML signals to generate explainable analysis that help compliance teams focus on what truly matters.
                        </p>
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-text-main shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.10)] active:scale-[0.98]"
                        >
                            Learn More <ChevronRight className="w-4 h-4 text-gray-400" />
                        </a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="showcase-card bg-[#e4f7ee] rounded-[2.5rem] p-12 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">
                    {/* Content */}
                    <div className="flex-1 relative z-10">
                        <div className="inline-flex items-center gap-2 text-[#22574e] font-semibold text-sm mb-6">
                            <Bot className="w-5 h-5 text-[#2a8071]" />
                            <span>Intelligent Automation</span>
                        </div>
                        <h2 className="text-4xl md:text-4xl font-medium tracking-tight text-text-main mb-6 leading-tight">
                            Automated Screening
                        </h2>
                        <p className="text-[#3b5e54] text-lg leading-relaxed mb-10 max-w-lg">
                            From AML checks to real-time transaction monitoring, our system handles continuous screening and flagging so your team focuses on exceptions, not routine reviews.
                        </p>
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-text-main shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.10)] active:scale-[0.98]"
                        >
                            Learn More <ChevronRight className="w-4 h-4 text-gray-400" />
                        </a>
                    </div>

                    {/* Mockup */}
                    <div className="hidden md:block flex-1 w-full relative z-10 -mr-12 md:-mr-16 lg:-mr-20 h-full">
                        <ScreeningMockup />
                    </div>
                </div>

            </div>
        </section>
    );
}