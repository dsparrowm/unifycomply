"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "How fast can we get up and running?",
        a: "Starter: Same day. Professional: 1-2 weeks. Enterprise: 3-6 weeks for tailored deployment."
    },
    {
        q: "How do you handle our data?",
        a: "We use enterprise-grade encryption and comply with GDPR, CCPA, and SOC2 standards to ensure your customer data is always secure and never misused."
    },
    {
        q: "How does UnifyComply integrate with our existing systems?",
        a: "We offer RESTful APIs, secure webhooks, and pre-built connectors for popular CRM and banking core platforms to make integration seamless."
    },
    {
        q: "Can we customize risk scoring?",
        a: "Yes. Our platform allows you to adjust risk weights, set thresholds, and create custom rules based on your specific internal compliance requirements."
    },
    {
        q: "Do you support multi country operation?",
        a: "Absolutely. UnifyComply continuously updates data sources to support local regulatory requirements across over 150 different jurisdictions."
    },
    {
        q: "How does pricing scale with transaction volume or user count?",
        a: "Pricing is tiered based on monthly verification volumes. Additional user seats or high-volume API requests can be customized through our Enterprise plan."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        // Reveal Left Column
        tl.fromTo(".faq-left > *",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        )
            // Reveal FAQ Items
            .fromTo(".faq-item",
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
                "-=0.6"
            );
    }, { scope: containerRef });

    return (
        <section className="py-24 bg-white relative overflow-hidden" ref={containerRef} id="faq">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column - Header Info */}
                    <div className="faq-left lg:col-span-5 flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-xs font-semibold tracking-wide text-gray-900 mb-6 bg-white shadow-sm">
                            <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-teal-100/50 border border-teal-200 text-teal-800 text-[11px] font-bold">
                                ?
                            </span>
                            <span>FAQs</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-gray-900 mb-6 leading-tight">
                            Frequently<br />Asked Questions
                        </h2>

                        <p className="text-gray-500 text-[17px] leading-relaxed mb-10 max-w-md">
                            From setup to support, here are the answers you need to launch faster with confidence.
                        </p>

                        <button className="bg-[#0d4a45] hover:bg-[#093531] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-colors shadow-sm">
                            Get Started <ChevronRight className="w-4 h-4 text-teal-200" />
                        </button>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-7 flex flex-col gap-4 pt-2">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    className="faq-item rounded-xl border border-gray-200/80 bg-[#f8f9fb] overflow-hidden transition-colors"
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    >
                                        <span className="font-medium text-gray-900 text-[17px] pr-8">{faq.q}</span>
                                        <ChevronDown
                                            className={cn(
                                                "w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300",
                                                isOpen && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    <div
                                        className={cn(
                                            "overflow-hidden transition-all duration-300 ease-in-out",
                                            isOpen ? "max-h-40 xl:max-h-48 opacity-100" : "max-h-0 opacity-0"
                                        )}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-gray-500 text-[15px] leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Bottom connecting line */}
            <div className="absolute bottom-0 left-0 w-full px-12 md:px-24 hidden md:flex items-center mt-24">
                <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white z-10 shrink-0"></div>
                <div className="flex-1 border-t border-dashed border-gray-200/80"></div>
                <div className="w-1.5 h-1.5 rounded-full border border-gray-300 bg-white z-10 shrink-0"></div>
            </div>
        </section>
    );
}