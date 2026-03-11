"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Binary, Bot, GitBranch, Landmark, ScanSearch, Sparkles } from "lucide-react";

const features = [
    {
        icon: <Bot className="h-[18px] w-[18px] text-[#1a2522] stroke-[1.8]" />,
        title: "Identity Verification (KYC/KYB)",
        description: "Verify individuals and businesses instantly. Automated identity checks across 200+ global data sources.",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        icon: <Landmark className="h-[18px] w-[18px] text-[#1a2522] stroke-[1.8]" />,
        title: "Real-Time Transaction Monitoring",
        description: "Continuously analyzes customer transactions in real time to detect suspicious patterns, unusual behavior, and potential financial crime risks.",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        icon: <ScanSearch className="h-[18px] w-[18px] text-[#1a2522] stroke-[1.8]" />,
        title: "AML, Sanctions & PEP Screening",
        description: "Continuous monitoring against global sanctions lists, PEPs, and watchlists. Instant risk alerts.",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        icon: <Binary className="h-[18px] w-[18px] text-[#1a2522] stroke-[1.8]" />,
        title: "AI-Powered System",
        description: "Automated systems that provide a high level of true positive alerts and dynamic risk scoring. AI assisted SAR rational documentation.",
        colSpan: "col-span-1 md:col-span-3",
    },
    {
        icon: <GitBranch className="h-[18px] w-[18px] text-[#1a2522] stroke-[1.8]" />,
        title: "Compliance & Developer Dashboards",
        description: "Integrates with your tech stack in clicks. Modern APIs that connect instantly-no complex setup required.",
        colSpan: "col-span-1 md:col-span-3",
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
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f7f8f6_0%,#f7f8f6_70%,#edf4f3_100%)] py-28"
        >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-[radial-gradient(90%_80%_at_0%_100%,rgba(219,237,239,0.9),transparent_68%)]" />

            <div className="relative mx-auto max-w-[1040px] px-6">
                <div className="mx-auto max-w-[560px] text-center">
                    <div className="feature-header mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6dad7] bg-[#f4f5f3] px-4 py-1.5 text-[12px] font-semibold text-[#102320] shadow-[0_1px_0_rgba(255,255,255,0.95)_inset]">
                        <Sparkles className="h-3.5 w-3.5 text-[#1b6a63] stroke-[2]" />
                        <span>Products</span>
                    </div>

                    <h2 className="feature-header text-[2.45rem] font-medium leading-[0.98] tracking-[-0.055em] text-[#10221f] md:text-[4rem]">
                        Your All-in-One
                        <br />
                        Compliance Engine
                    </h2>

                    <p className="feature-header mx-auto mt-5 max-w-[560px] text-[15px] font-medium leading-[1.58] text-[#6d7774] md:text-[17px]">
                        Move faster, decide smarter, and stay ahead of compliance - all
                        without the complexity or bottlenecks that slow teams down.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-[14px] md:grid-cols-6 md:gap-[16px]">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className={`feature-card min-h-[188px] rounded-[18px] border border-[#e6e6e3] bg-[#f8f8f6] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:min-h-[188px] md:p-6 ${feature.colSpan}`}
                        >
                            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#d8dad7] bg-[#f2f3f1] shadow-[inset_0_1px_0_rgba(255,255,255,0.96)]">
                                {feature.icon}
                            </div>

                            <h3 className="max-w-[300px] text-[1rem] font-semibold leading-[1.35] tracking-[-0.03em] text-[#152622] md:text-[1.03rem]">
                                {feature.title}
                            </h3>

                            <p className="mt-3 max-w-[320px] text-[14px] leading-[1.55] text-[#6d7774] md:text-[15px]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}