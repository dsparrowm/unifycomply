import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-8">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* CTO Block */}
                <div className="bg-[#242625] rounded-[2.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden mb-24">

                    {/* Subtle light flares mimicking the image's gradient/lighting */}
                    <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-white/5 to-transparent pointer-events-none opacity-50 mix-blend-overlay"></div>
                    <div className="absolute bottom-0 right-0 w-[60%] h-[150%] bg-gradient-to-tl from-[#3a3f3b]/30 to-transparent pointer-events-none rounded-full translate-y-1/4 translate-x-1/4 blur-3xl"></div>

                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                            Ready to Simplify<br />Compliance?
                        </h2>
                        <p className="text-[#a3a6a4] text-lg mb-10 max-w-lg leading-relaxed">
                            Join financial companies using UnifyComply to onboard customers faster while staying fully compliant.
                        </p>
                        <button className="cursor-pointer rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#242625] shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)] active:scale-[0.98]">
                            Request a Demo
                        </button>
                    </div>
                </div>

                {/* Footer Links Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Logo & Description */}
                    <div className="lg:col-span-4 flex flex-col items-start pr-8">
                        <Image
                            src="/images/logo.svg"
                            alt="UnifyComply Logo"
                            width={180}
                            height={40}
                            priority
                        />
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                            We build a safer financial ecosystem by empowering organizations with real-time tools that keep companies compliant!
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#f4f5f7] flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
                                <Send className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Empty spacer for grid alignment closely matching design */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Links Columns */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Company */}
                        <div className="flex flex-col gap-5">
                            <h4 className="font-semibold text-gray-900 text-[17px] mb-1">Company</h4>
                            <Link href="#" className="text-[#323936] font-medium text-[15px] hover:text-[#0f3c37] transition-colors">Home</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">About us</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Pricing</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Features</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Blog Details</Link>
                        </div>

                        {/* Products */}
                        <div className="flex flex-col gap-5">
                            <h4 className="font-semibold text-gray-900 text-[17px] mb-1">Products</h4>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">API Integration</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">KYC/ KYB</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Bank Analysis</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">AML Screening</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Transaction Monitoring</Link>
                        </div>

                        {/* Solutions */}
                        <div className="flex flex-col gap-5">
                            <h4 className="font-semibold text-gray-900 text-[17px] mb-1">Solutions</h4>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Fintech & Neobanks</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Payment Providers</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Digital Lenders</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Crypto & Web3 Platforms</Link>
                            <Link href="#" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Cross-Border Financial</Link>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="bg-[#fcfdfc] border border-gray-100/50 rounded-2xl py-5 flex items-center justify-center text-[15px] text-gray-500">
                    © 2025 Unifycomply. All rights reserved.
                </div>

            </div>
        </footer>
    );
}