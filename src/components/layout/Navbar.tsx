"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                        <Image
                            src="/images/logo.svg"
                            alt="UnifyComply Logo"
                            width={180}
                            height={40}
                            priority
                        />

                    </div>

                    <div className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-slate-800">
                        <Link href="#products" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Products
                        </Link>
                        <Link href="#pricing" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Pricing
                        </Link>
                        <Link href="#resources" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Resources
                        </Link>
                        <Link href="#contact" className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-[#164e43] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[#164e43] after:transition-transform after:duration-300 hover:after:scale-x-100">
                            Contact Us
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Button
                            variant="outline"
                            className="hidden bg-white font-semibold text-[#164e43] sm:inline-flex"
                        >
                            Get Started
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
