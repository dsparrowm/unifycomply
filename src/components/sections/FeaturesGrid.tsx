"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Binary, Bot, Building2, ScanSearch, Sparkles } from "lucide-react";

const features = [
    {
        icon: <ScanSearch className="w-[18px] h-[18px] text-[#1f2c29] stroke-[1.75]" />,
        title: "Identity Verification (KYC/KYB)",
        description: "Verify individuals and businesses instantly. Automated identity checks across 200+ global data sources.",
        colSpan: "col-span-1 md:col-span-4",
    },
    {
        icon: <Building2 className="w-[18px] h-[18px] text-[#1f2c29] stroke-[1.75]" />,
        title: "Real-Time Transaction Monitoring",
        description: "Continuously analyzes customer transactions in real time to detect suspicious patterns, unusual behavior, and potential financial crime risks.",
        colSpan: "col-span-1 md:col-span-4",
    },
    {
        icon: <Activity className="w-[18px] h-[18px] text-[#1f2c29] stroke-[1.75]" />,
        title: "AML, Sanctions & PEP Screening",
        description: "Continuous monitoring against global sanctions lists, PEPs, and watchlists. Instant risk alerts.",
        colSpan: "col-span-1 md:col-span-4",
    },
    {
        icon: <Bot className="w-[18px] h-[18px] text-[#1f2c29] stroke-[1.75]" />,
        title: "AI-Powered System",
        description: "Automated systems that provide a high level of true positive alerts and dynamic risk scoring. AI assisted SAR rational documentation.",
        colSpan: "col-span-1 md:col-span-6",
    },
    {
        icon: <Binary className="w-[18px] h-[18px] text-[#1f2c29] stroke-[1.75]" />,
        title: "Compliance & Developer Dashboards",
        description: "Integrates with your tech stack in clicks. Modern APIs that connect instantly-no complex setup required.",
        colSpan: "col-span-1 md:col-span-6",
    },
];

export default function FeaturesGrid() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
            });

            cardRefs.current.forEach((card, i) => {
                if (!card) return;
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative isolate overflow-hidden py-28 bg-background">
            <div className="container mx-auto px-6 max-w-[1120px]">
                <div className="relative mx-auto max-w-[980px] rounded-[44px] bg-[#fcfcfb] px-6 pb-8 pt-3 md:px-10 md:pb-10 md:pt-4 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
                    <div className="pointer-events-none absolute left-1/2 top-[195px] -z-10 h-[430px] w-[116%] -translate-x-1/2 rounded-[52px] bg-[#4fd8e2]/35 blur-[18px]" />
                    <div className="pointer-events-none absolute left-1/2 top-[214px] -z-10 h-[390px] w-[124%] -translate-x-1/2 rounded-[58px] border border-[#11d7f2]/75 shadow-[0_0_0_10px_rgba(17,215,242,0.14),0_0_0_22px_rgba(17,215,242,0.10),0_0_0_34px_rgba(17,215,242,0.07),0_0_0_46px_rgba(17,215,242,0.05)]" />

                    <div className="mx-auto max-w-[560px] text-center">
                        <div className="feature-header mb-5 inline-flex items-center gap-2 rounded-full border border-[#233734]/35 bg-white/90 px-4 py-1.5 text-[12px] font-semibold text-[#102320] shadow-sm">
                            <Sparkles className="h-3.5 w-3.5 text-[#0a3f33] stroke-[2]" />
                            <span>Products</span>
                        </div>
                        <h2 className="feature-header text-[2.35rem] font-bold leading-[1.05] tracking-[-0.04em] text-[#081a17] md:text-[3.5rem]">
                            Your All-in-One
                            <br />
                            Compliance Engine
                        </h2>
                        <p className="feature-header mx-auto mt-5 max-w-[520px] text-[15px] font-medium leading-[1.55] text-[#5e6d69] md:text-[17px]">
                            Move faster, decide smarter, and stay ahead of compliance-all
                            without the complexity or bottlenecks that slow teams down.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-4">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                ref={(el) => { cardRefs.current[i] = el; }}
                                className={`feature-card rounded-[18px] border border-[#e6e7e4] bg-[#f9faf8] p-5 md:p-6 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] ${feature.colSpan} min-h-[168px] md:min-h-[196px]`}
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[11px] border border-[#dedfdb] bg-[#f5f6f4] shadow-[0_1px_0_rgba(255,255,255,0.95)_inset]">
                                    {feature.icon}
                                </div>
                                <h3 className="max-w-[290px] text-[1.05rem] font-semibold leading-[1.35] text-[#1a2c29] md:text-[1.12rem]">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 max-w-[310px] text-[14px] leading-[1.55] text-[#6c7774] md:text-[15px]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}