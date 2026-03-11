"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const TestimonialsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2e7d73]">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 8-8 8" />
        <path d="M9 8h7v7" />
    </svg>
);

const testimonials = [
    {
        name: "Chukwudi Peter",
        role: "Compliance Officer",
        quote: "15 African markets, one unified system. UnifyComply ended our compliance chaos and actually understands local regulations.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        bg: "bg-[#c3aedd]",
    },
    {
        name: "Rajiv Sharma",
        role: "Regional Compliance",
        quote: "From 8 compliance tools to one platform. Less noise, better risk detection, and our team's finally productive.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        bg: "bg-[#a4c2c7]",
    },
    {
        name: "Alex Carter",
        role: "Founder at PayStripe",
        quote: "Compliance software people actually like using? Yes. Smart alerts, clean interface, real results. 96% adoption in two weeks.",
        avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        bg: "bg-[#7d5635]",
    },
    {
        name: "Samantha Lee",
        role: "VP of Risk & Fraud",
        quote: "We scaled our user base 10x without hiring more compliance staff. The automated screening handles 95% of the work flawlessly.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
        bg: "bg-[#f1cdb6]",
    },
    {
        name: "David O'Connor",
        role: "Chief Operating Officer",
        quote: "UnifyComply gives me absolute peace of mind. Their real-time audit trails mean we're always ready for regulatory examinations.",
        avatar: "https://i.pravatar.cc/150?u=a04258a2462d826715d",
        bg: "bg-[#b1c3d1]",
    },
    {
        name: "Elena Rodriguez",
        role: "Head of AML",
        quote: "The explainable AI is a game-changer. When a transaction is flagged, we know exactly why, down to the specific data point.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026028d",
        bg: "bg-[#e5b9d3]",
    }
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        // Reveal Header
        tl.fromTo(".test-header-el",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
        )
            // Reveal Cards
            .fromTo(".test-card",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
                "-=0.4"
            );
    }, { scope: containerRef });

    return (
        <section className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto max-w-6xl px-6 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="test-header-el inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200/80 text-xs font-semibold tracking-wide text-text-main mb-6 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
                            <TestimonialsIcon />
                            <span>Testimonials</span>
                        </div>

                        <h2 className="test-header-el text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-main mb-4 leading-tight">
                            Don't take our word for it.
                        </h2>

                        <p className="test-header-el text-lg text-gray-500 font-medium">
                            Here's what compliance leaders are saying
                        </p>
                    </div>

                    {/* Navigation buttons */}
                    <div className="test-header-el flex items-center gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-text-main shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] active:scale-95"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-text-main shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] active:scale-95"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Cards Grid / Carousel */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 relative z-10 pt-4 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="test-card shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start bg-[#fafbfc] rounded-3xl p-8 lg:p-10 flex flex-col justify-between"
                        >
                            <div>
                                {/* Avatar & Info */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={cn("w-14 h-14 rounded-full overflow-hidden shrink-0", testimonial.bg)}>
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover mix-blend-normal"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-text-main text-lg">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Stars */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star key={idx} className="w-4 h-4 fill-[#0f3c37] text-[#0f3c37]" />
                                        ))}
                                    </div>
                                    <span className="font-semibold text-text-main text-sm">5.0</span>
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-[#1a2b29] text-[17px] leading-relaxed">
                                {testimonial.quote}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom connecting line */}
            <div className="absolute bottom-0 left-0 w-full px-12 md:px-24 hidden md:flex items-center mt-24">
                <div className="w-2 h-2 rounded-full border-2 border-gray-200 bg-white z-10 shrink-0"></div>
                <div className="flex-1 border-t border-dashed border-gray-200/80"></div>
                <div className="w-2 h-2 rounded-full border-2 border-gray-200 bg-white z-10 shrink-0"></div>
            </div>
        </section>
    );
}