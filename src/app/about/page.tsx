"use client";

import React, { useRef } from "react";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/FAQ";
import { SlidersIcon, Search, ShieldCheck, Hexagon, Users, Compass } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Animations
    const heroTl = gsap.timeline();
    heroTl.fromTo(".hero-text > *", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(".hero-image",
      { scale: 0.9, opacity: 0, y: 40 },
      { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "expo.out" },
      "-=0.6"
    )
    .fromTo(".hero-card",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.2)" },
      "-=0.8"
    );

    // 2. Our Story Set
    gsap.fromTo(".story-item",
      { y: 40, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 75%",
        }
      }
    );

    // 3. Mission Section Set
    const missionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mission-section",
        start: "top 75%",
      }
    });

    missionTl.fromTo(".mission-header > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    )
    .fromTo(".mission-image",
      { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.2, ease: "power4.inOut" },
      "-=0.4"
    )
    .fromTo(".mission-card",
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.8"
    );

    // 4. Team Section
    gsap.fromTo(".team-card",
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 75%",
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div className="bg-[#fcfdfd] min-h-screen relative overflow-hidden font-sans" ref={containerRef}>

      {/* Background connecting lines pattern */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none hidden md:flex justify-center z-0">
        <div className="w-full max-w-6xl mx-auto px-6 h-full flex justify-between">
          <div className="w-[1px] h-full border-l border-dashed border-gray-200"></div>
          <div className="w-[1px] h-full border-l border-dashed border-gray-200"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* 1. Hero Section */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-32 relative text-left w-full mx-auto flex flex-col items-center md:items-start">
          <div className="max-w-3xl mb-12 text-center md:text-left hero-text">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium tracking-tight text-gray-900 mb-6 leading-[1.1] opacity-0 translate-y-8">
              Building the Future of<br className="hidden md:block" />
              Unified Compliance
            </h1>
            <p className="text-lg md:text-[21px] leading-relaxed text-gray-500 max-w-2xl opacity-0 translate-y-8">
              A unified compliance and risk intelligence platform designed to help organizations navigate the growing complexity of regulatory requirements.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-[2/1] rounded-3xl overflow-hidden shadow-sm flex items-center justify-center p-6 md:p-12 bg-gray-200 hero-image opacity-0">
            {/* Image Placeholder Background */}
            <Image
              src="/images/aboutUs_hero_img.png"
              alt="About UnifyComply"
              fill
              className="object-cover"
              priority
            />

            {/* Floating Card - Outer White Container */}
            <div className="relative z-10 w-full max-w-[90%] md:max-w-4xl bg-white rounded-[2rem] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center hero-card opacity-0">
              {/* Inner Gray Container */}
              <div className="bg-[#f8faf9] rounded-2xl md:rounded-3xl p-6 md:p-12 w-full h-full border-[2px] border-gray-100/80 shadow-sm">
                <div className="w-12 h-12 rounded-xl border border-gray-100 bg-white flex items-center justify-center mb-6 text-gray-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <SlidersIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-4">The product</h3>
                <p className="text-gray-500 text-[14px] md:text-[15px] leading-[1.7]">
                  UnifyComply brings the entire compliance lifecycle into one intelligent platform. Our technology integrates KYC/KYB verification, AML and sanctions screening, bank account ownership analysis, and real-time transaction monitoring into a single system powered by a unified risk intelligence engine. We believe compliance should enable innovation, not slow it down. By unifying compliance processes and providing real-time risk visibility, we help organizations protect their users, reduce financial crime, and maintain regulatory confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator / Intersection visual */}
        <div className="w-full relative h-[1px] border-t border-dashed border-gray-200 hidden md:block">
          <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
          <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
        </div>

        {/* 2. Our Story Section */}
        <section className="py-24 md:py-32 relative story-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 story-content">
            <div className="lg:col-span-4 flex justify-start lg:justify-start">
              <div className="inline-flex h-fit items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-semibold tracking-wide text-gray-900 bg-white shadow-sm opacity-0 translate-y-4 story-item">
                <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-teal-50 text-teal-700">
                  <Search className="w-3.5 h-3.5" />
                </span>
                <span>Our Story</span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 mb-8 leading-[1.3] tracking-tight text-left opacity-0 translate-y-4 story-item">
                UnifyComply was founded to address a growing challenge in the digital financial ecosystem — the increasing complexity of compliance.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed text-left max-w-3xl opacity-0 translate-y-4 story-item">
                Unlike traditional compliance tools that operate in isolation, UnifyComply was built to connect onboarding verification and ongoing transaction behavior into one continuous risk intelligence model. Backed up with AI automations that saves hours of work, and helps teams focus on what really matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Separator / Intersection visual */}
        <div className="w-full relative h-[1px] border-t border-dashed border-gray-200 hidden md:block">
          <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
          <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
        </div>

        {/* 3. Built with Clarity */}
        <section className="py-24 md:py-32 relative mission-section">
          <div className="mb-16 mission-header">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-semibold tracking-wide text-gray-900 bg-white shadow-sm mb-6 opacity-0 translate-y-4">
              <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-teal-50 text-teal-700">
                <Compass className="w-3.5 h-3.5" />
              </span>
              <span>Mission & Vision</span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-medium tracking-tight text-gray-900 mb-6 leading-tight opacity-0 translate-y-4">Built with Clarity</h2>
            <p className="text-[17px] text-gray-500 leading-relaxed max-w-3xl opacity-0 translate-y-4">
              Our mission is to make compliance smarter, faster, and more intelligent — helping organizations grow securely while protecting the global financial system.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-[2/1] bg-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row gap-6 lg:gap-8 items-center justify-center p-6 md:p-12 mission-image">
            <Image
              src="/images/aboutUs_mission_img.png"
              alt="UnifyComply Mission & Vision"
              fill
              className="object-cover"
            />

            <div className="relative z-10 w-full md:w-1/2 h-full bg-white rounded-[2rem] p-4 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col mission-card opacity-0">
              <div className="bg-[#f8faf9] rounded-2xl md:rounded-3xl p-6 lg:p-10 w-full h-full border-[2px] border-gray-100/80 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl border border-gray-100 bg-white flex items-center justify-center mb-6 text-gray-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <Hexagon className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] font-semibold text-gray-900 mb-4">The problem</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">
                  Many organizations have been forced to rely on fragmented systems to keep up with compliance. This fragmented approach created operational inefficiencies, slowed customer onboarding, and made it difficult for compliance teams to maintain a clear view of risk and solid accuracy.
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-1/2 h-full bg-white rounded-[2rem] p-4 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col mission-card opacity-0">
              <div className="bg-[#f8faf9] rounded-2xl md:rounded-3xl p-6 lg:p-10 w-full h-full border-[2px] border-gray-100/80 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl border border-gray-100 bg-white flex items-center justify-center mb-6 text-gray-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[22px] font-semibold text-gray-900 mb-4">Our solution</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">
                  Our vision is to become the intelligent compliance infrastructure powering the next generation of digital financial ecosystems. As financial services continue to evolve, the need for unified, real-time compliance intelligence will only grow. We help to manage risk with greater speed, accuracy, and confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator / Intersection visual */}
        <div className="w-full relative h-[1px] border-t border-dashed border-gray-200 hidden md:block">
          <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
          <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
        </div>

        {/* 4. Core Team */}
        <section className="py-24 md:py-32 relative text-center flex flex-col items-center team-section">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-semibold tracking-wide text-gray-900 bg-white shadow-sm mb-6">
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-teal-50 text-teal-700">
              <Users className="w-3.5 h-3.5" />
            </span>
            <span>Core Team</span>
          </div>

          <h2 className="text-4xl md:text-[56px] font-medium tracking-tight text-gray-900 mb-6 leading-tight">
            The team behind the movement
          </h2>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mb-16">
            We're a focused group aimed at helping organizations protect their users, reduce financial crime, and maintain regulatory confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full text-left">

            {/* Team Member 1 */}
            <div className="bg-white rounded-3xl p-6 flex flex-col shadow-[0_5px_15px_rgba(0,0,0,0.03)] border border-gray-50 team-card opacity-0 translate-y-8">
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                <Image
                  src="/images/ceo_img.png"
                  alt="Owolabi Babatunde Akinsanya"
                  fill
                  className="object-cover object-top scale-[1.25] origin-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Owolabi Babatunde Akinsanya</h3>
              <p className="text-[15px] font-medium text-gray-900 mb-4">CEO/Founder</p>
              <p className="text-gray-500 text-[14px] leading-[1.6]">
                His experience in the fintech industry helped to develop a strong understanding of the growing challenges financial institutions face in meeting regulatory requirements. His M.A. in Technology Governance and Sustainability, provides a unique perspective on the intersection of technology innovation, regulatory frameworks, and responsible digital transformation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-3xl p-6 flex flex-col shadow-[0_5px_15px_rgba(0,0,0,0.03)] border border-gray-50 team-card opacity-0 translate-y-8">
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                <Image
                  src="/images/cto_img.jpg"
                  alt="Adeboye Stephen Oyeniran"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Adeboye Stephen Oyeniran</h3>
              <p className="text-[15px] font-medium text-gray-900 mb-4">Chief Technology Officer (CTO)</p>
              <p className="text-gray-500 text-[14px] leading-[1.6]">
                As a senior fintech engineer and technology leader, he specializes in designing robust infrastructure, leading engineering teams, and delivering reliable, high-performance technology solutions. With a PhD in Computer Systems Engineering and extensive experience building scalable cloud and distributed systems. He drives the technological success within UnifyComply.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-3xl p-6 flex flex-col shadow-[0_5px_15px_rgba(0,0,0,0.03)] border border-gray-50">
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl mb-6 overflow-hidden relative">
                <Image
                  src="/images/coo_img.png"
                  alt="Ayobami Ogunkoya"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Ayobami Ogunkoya</h3>
              <p className="text-[15px] font-medium text-gray-900 mb-4">Chief Compliance Officer (CCO)</p>
              <p className="text-gray-500 text-[14px] leading-[1.6]">
                Chief Compliance Officer with extensive experience in regulatory compliance, risk management, and corporate governance across dynamic and highly regulated environments. Proven ability to design and implement effective compliance frameworks that ensure adherence to regulatory requirements while supporting business growth and operational efficiency.
              </p>
            </div>

          </div>
        </section>

        {/* Separator / Intersection visual */}
        <div className="w-full relative h-[1px] border-t border-dashed border-gray-200 hidden md:block">
          <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
          <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
        </div>

      </div>

      <div className="relative z-10">
        <FAQ />
        {/* Adds dashed border right above footer to match image */}
        <div className="container mx-auto px-6 max-w-6xl -mb-12">
          <div className="w-full relative h-[1px] border-t border-dashed border-gray-200 hidden md:block">
            <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
            <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
