"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom icons to closely match the design
const SendDataIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8V6a2 2 0 0 1 2-2h2" />
        <path d="M5 16v2a2 2 0 0 0 2 2h2" />
        <path d="M19 8V6a2 2 0 0 0-2-2h-2" />
        <path d="M19 16v2a2 2 0 0 1-2 2h-2" />
        <rect x="9" y="11" width="6" height="2" rx="1" fill="currentColor" stroke="none" />
    </svg>
);

const RunChecksIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        <path d="M16 16v3" />
        <path d="M16 19h3" />
    </svg>
);

const DecisionIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="M8.5 8.5L7 7" />
        <path d="M15.5 15.5L17 17" />
        <path d="M8.5 15.5L7 17" />
        <path d="M15.5 8.5L17 7" />
    </svg>
);

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        // Reveal header elements
        tl.fromTo(".hiw-header > *",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        )
            // Pop in the step circles
            .fromTo(".hiw-grid-icon",
                { scale: 0.8, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.4, ease: "back.out(1.5)" },
                "-=0.4"
            )
            // Fade in text for each step
            .fromTo(".hiw-grid-text",
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.4, ease: "power3.out" },
                "-=1.2"
            );

        // Continuous flowing dash effect
        gsap.to(".hiw-path", {
            strokeDashoffset: -100,
            duration: 4,
            repeat: -1,
            ease: "none"
        });
    }, { scope: containerRef });

    return (
        <section className="py-32 bg-[#fafbfc] relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto max-w-6xl px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center hiw-header max-w-3xl mx-auto mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200/80 text-xs font-semibold tracking-wide text-text-main mb-8 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
                        <RefreshCcw className="w-3.5 h-3.5 text-[#2e7d73]" />
                        <span className="uppercase">How it works</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-text-main mb-6 leading-tight">
                        One Integration. Complete<br />Compliance Coverage.
                    </h2>

                    <p className="text-lg text-gray-500 font-medium">
                        A smooth 3-step process to compliance confidence
                    </p>
                </div>

                {/* Steps Grid & Line */}
                <div className="relative mb-8">

                    {/* S-Curve Dotted Line Background */}
                    {/* This path follows the centers of the 3 staggered cards */}
                    <div className="absolute top-12 left-0 w-full hidden md:block z-0 pointer-events-none">
                        <svg className="w-full h-32 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 100" fill="none">
                            {/* 
                  Start at X=16.6% (Card 1 center), dip down to Y=70, 
                  Rise up to X=50% (Card 2 center) at Y=10, 
                  Dip again to X=83.3% (Card 3 center) at Y=60
               */}
                            <path
                                className="hiw-path"
                                d="M 166,50 C 300,90 350,10 500,10 C 650,10 700,90 833,50"
                                stroke="#c3e8e3"
                                strokeWidth="2"
                                strokeDasharray="6 8"
                                strokeLinecap="round"
                                pathLength="100"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 pt-4">

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="hiw-grid-icon bg-white w-[100px] h-[100px] rounded-full border border-dashed border-[#b6e3de] flex items-center justify-center p-2 mb-8 shadow-sm">
                                <div className="w-full h-full rounded-full bg-[#f8fcfb] flex items-center justify-center">
                                    <SendDataIcon />
                                </div>
                            </div>
                            <div className="hiw-grid-text">
                                <h3 className="text-2xl font-semibold text-text-main mb-4">Send Data</h3>
                                <p className="text-gray-500 leading-relaxed text-[17px] max-w-sm mx-auto">
                                    Your system sends customer information through our secure API.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center -mt-8 md:-mt-8">
                            <div className="hiw-grid-icon bg-white w-[100px] h-[100px] rounded-full border border-dashed border-[#b6e3de] flex items-center justify-center p-2 mb-8 shadow-sm relative">
                                <div className="w-full h-full rounded-full bg-[#f8fcfb] flex items-center justify-center">
                                    <RunChecksIcon />
                                </div>
                            </div>
                            <div className="hiw-grid-text">
                                <h3 className="text-2xl font-semibold text-text-main mb-4">We Run the Checks</h3>
                                <p className="text-gray-500 leading-relaxed text-[17px] max-w-sm mx-auto">
                                    UnifyComply connects to trusted identity, banking, and AML data sources.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center md:mt-4">
                            <div className="hiw-grid-icon bg-white w-[100px] h-[100px] rounded-full border border-dashed border-[#b6e3de] flex items-center justify-center p-2 mb-8 shadow-sm">
                                <div className="w-full h-full rounded-full bg-[#f8fcfb] flex items-center justify-center">
                                    <DecisionIcon />
                                </div>
                            </div>
                            <div className="hiw-grid-text">
                                <h3 className="text-2xl font-semibold text-text-main mb-4">Get a Unified Risk Decision</h3>
                                <p className="text-gray-500 leading-relaxed text-[17px] max-w-sm mx-auto">
                                    Receive a clear risk score, detailed results, and AI-generated rationale in seconds.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Very faint bottom horizontal line mirroring the original design's grounding */}
            <div className="absolute bottom-10 left-0 w-full px-12 md:px-24 hidden md:flex items-center">
                <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white z-10 shrink-0"></div>
                <div className="flex-1 border-t border-dashed border-gray-200"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white z-10 shrink-0"></div>
            </div>
        </section>
    );
}