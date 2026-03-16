import Link from "next/link";
import { Facebook, Linkedin, Instagram, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" className="bg-white pt-16 pb-8">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Footer Links Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Logo & Description */}
                    <div className="lg:col-span-4 flex flex-col items-start pr-8">
                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                alt="UnifyComply Logo"
                                width={180}
                                height={40}
                                priority
                                className="cursor-pointer"
                            />
                        </Link>
                        <p className="text-gray-500 text-[15px] mt-4 leading-relaxed mb-8">
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
                        <a
                            href="mailto:info@unifycomply.com"
                            className="mt-6 text-[15px] font-semibold text-gray-500 hover:text-[#0f3c37] transition-colors"
                        >
                            info@unifycomply.com
                        </a>
                    </div>

                    {/* Empty spacer for grid alignment closely matching design */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Links Columns */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Company */}
                        <div className="flex flex-col gap-5">
                            <h4 className="font-semibold text-gray-900 text-[17px] mb-1">Company</h4>
                            <Link href="/#hero" className="text-[#323936] font-medium text-[15px] hover:text-[#0f3c37] transition-colors">Home</Link>
                            <Link href="/about" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">About us</Link>
                            <Link href="/#pricing" className="text-gray-500 hidden text-[15px] hover:text-[#0f3c37] transition-colors">Pricing</Link>
                            <Link href="/#features" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Features</Link>

                        </div>

                        {/* Products */}
                        <div className="flex flex-col gap-5">
                            <h4 className="font-semibold text-gray-900 text-[17px] mb-1">Products</h4>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">API Integration</Link>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">KYC/ KYB</Link>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Bank Analysis</Link>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">AML Screening</Link>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Transaction Monitoring</Link>
                        </div>

                        {/* Solutions */}
                        <div className="flex flex-col gap-5">
                            <h4 className="font-semibold text-gray-900 text-[17px] mb-1">Solutions</h4>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Fintech & Neobanks</Link>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Payment Providers</Link>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Digital Lenders</Link>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Crypto & Web3 Platforms</Link>
                            <Link href="/#products" className="text-gray-500 text-[15px] hover:text-[#0f3c37] transition-colors">Cross-Border Financial</Link>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="bg-[#fcfdfc] border border-gray-100/50 rounded-2xl py-5 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[15px] text-gray-500">
                    <span>© {new Date().getFullYear()} Unifycomply. All rights reserved.</span>

                </div>

            </div>
        </footer>
    );
}