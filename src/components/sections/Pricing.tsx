"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight, Check } from "lucide-react";

const PricingIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-teal-700">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const tiers = [
    {
        name: "Starter",
        price: "$29",
        description: "Startups & small financial institutions",
        features: [
            "500 verifications/month",
            "KYC/KYB + Basic AML + TM",
            "30+ watchlist screening",
            "2 team members",
            "Email support",
            "API access",
        ],
        isPro: false,
    },
    {
        name: "Pro",
        price: "$99",
        badge: "Save 20%",
        description: "Mid-size enterprises & financial services",
        features: [
            "Everything in Starter",
            "2,500 verifications/month",
            "Bank network intelligence",
            "10 team members",
            "24/7 priority support",
            "Custom risk scoring",
        ],
        isPro: true,
    },
    {
        name: "Enterprise",
        price: "$199",
        description: "Full power for teams managing",
        features: [
            "Everything in Pro",
            "Unlimited verifications",
            "Dedicated account manager",
            "Custom integrations",
            "Multi-country support",
            "Dedicated support manager",
        ],
        isPro: false,
    },
];

export default function Pricing() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        // Reveal header
        tl.fromTo(".pricing-header > *",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        )
            // Reveal cards
            .fromTo(".pricing-card",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
                "-=0.4"
            );
    }, { scope: containerRef });

    return (
        <section className="scroll-mt-28 py-24 bg-white relative overflow-hidden" ref={containerRef} id="pricing">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* Header Section */}
                <div className="text-center pricing-header max-w-2xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-xs font-semibold tracking-wide text-gray-900 mb-6 bg-white shadow-sm">
                        <PricingIcon />
                        <span>Pricing</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 leading-tight">
                        Pick a plan. Grow smarter
                    </h2>

                    <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-lg mx-auto">
                        Built to safeguard your business at every stage. Compliance and security, simplified.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {tiers.map((tier, i) => (
                        <div
                            key={i}
                            style={{
                                borderRadius: "2rem",
                                minHeight: "100%",
                                display: "flex",
                                flexDirection: "column"
                            }}
                            className={`pricing-card overflow-hidden transition-all duration-300 ${tier.isPro
                                ? "bg-white border-2 border-teal-800 shadow-xl md:-my-4"
                                : "bg-slate-50 border border-slate-100"
                                }`}
                        >
                            {/* Card Top Section */}
                            <div className={`p-8 pb-10 ${tier.isPro ? "bg-teal-50" : ""}`}>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold text-gray-900 text-lg">{tier.name}</h3>
                                    {tier.badge && (
                                        <div className="px-3 py-1 bg-white rounded-full text-xs font-bold text-gray-900 shadow-sm border border-gray-200">
                                            {tier.badge}
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-1.5 mb-4">
                                    <span className={`text-6xl font-medium tracking-tight ${tier.isPro ? "text-teal-950" : "text-gray-900"}`}>
                                        {tier.price}
                                    </span>
                                    <span className="text-gray-500 font-medium">/ month</span>
                                </div>
                                <p className="text-gray-500 text-[15px] mb-8 min-h-[44px]">
                                    {tier.description}
                                </p>
                                <button className={`w-full cursor-pointer py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 ease-out shadow-sm border active:scale-[0.98] hover:-translate-y-0.5 ${tier.isPro
                                    ? "bg-teal-900 text-white hover:bg-teal-950 border-teal-900 hover:shadow-[0_16px_30px_rgba(13,74,69,0.22)]"
                                    : "bg-white text-gray-900 hover:bg-gray-50 border-gray-200 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                                    }`}>
                                    Get Started Now <ChevronRight className={`w-4 h-4 ${tier.isPro ? "text-teal-200" : "text-gray-400"}`} />
                                </button>
                            </div>

                            {/* Card Bottom Section (Features) */}
                            <div className={`p-8 pt-6 flex-1 flex flex-col ${tier.isPro ? "bg-white" : ""}`}>
                                <p className="font-semibold text-gray-900 mb-6 text-[15px]">What's Included:</p>
                                <ul className="flex-1 flex flex-col">
                                    {tier.features.map((feature, j) => (
                                        <li
                                            key={j}
                                            className={`flex gap-3 text-[15px] items-center py-3.5 ${j !== tier.features.length - 1 ? "border-b border-gray-200" : ""
                                                }`}
                                        >
                                            <Check className="w-[18px] h-[18px] text-gray-400 shrink-0" strokeWidth={2.5} />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom connecting line */}
            <div className="absolute bottom-6 left-0 w-full px-12 md:px-24 hidden md:flex items-center">
                <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white z-10 shrink-0"></div>
                <div className="flex-1 border-t border-dashed border-gray-200/80"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white z-10 shrink-0"></div>
            </div>
        </section>
    );
}