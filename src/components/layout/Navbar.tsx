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
                        <Link href="#products" className="hover:text-[#164e43] transition-colors">
                            Products
                        </Link>
                        <Link href="#pricing" className="hover:text-[#164e43] transition-colors">
                            Pricing
                        </Link>
                        <Link href="#resources" className="hover:text-[#164e43] transition-colors">
                            Resources
                        </Link>
                        <Link href="#contact" className="hover:text-[#164e43] transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Button
                            variant="outline"
                            className="hidden sm:inline-flex rounded-full border-gray-200 text-[#164e43] font-semibold hover:bg-gray-50 bg-white"
                        >
                            Get Started
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
