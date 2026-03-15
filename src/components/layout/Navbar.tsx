"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const demoUrl = "https://calendly.com/akinsanyaowolabi33/30min";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none",
                scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-gray-100" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 max-w-6xl pointer-events-auto">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
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
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-slate-800">
                        <Link href="/#products" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Products
                        </Link>
                        {/* <Link href="/#pricing" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Pricing
                        </Link> */}
                        <Link href="/#faq" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Resources
                        </Link>
                        <Link href="/about" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            About Us
                        </Link>
                        <Link href="/#contact" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Contact Us
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            size="lg"
                            className="hidden font-semibold sm:inline-flex"
                            onClick={() => window.open(demoUrl, "_blank", "noopener,noreferrer")}
                        >
                            Book a Demo
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-slate-800 transition-colors bg-slate-50 hover:bg-slate-100 rounded-lg"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl py-4 px-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto pointer-events-auto">
                        <Link
                            href="/#products"
                            className="text-[15px] font-semibold text-slate-800 py-2 border-b border-slate-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <Link
                            href="/#faq"
                            className="text-[15px] font-semibold text-slate-800 py-2 border-b border-slate-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Resources
                        </Link>
                        <Link
                            href="/about"
                            className="text-[15px] font-semibold text-slate-800 py-2 border-b border-slate-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-[15px] font-semibold text-slate-800 py-2 border-b border-slate-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <div className="pt-2 sm:hidden">
                            <Button
                                className="w-full font-semibold"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    window.open(demoUrl, "_blank", "noopener,noreferrer");
                                }}
                            >
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
