import Link from "next/link";
import { Twitter, Linkedin, Instagram, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background pt-24 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="font-bold text-xl tracking-tight text-primary">
                                unify<span className="text-text-main">comply</span>
                            </span>
                        </div>
                        <p className="text-sm text-text-muted max-w-xs">
                            We build a safer financial ecosystem by empowering organizations with real-time tools that keep companies compliant!
                        </p>
                        <div className="flex gap-4 text-text-muted">
                            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Send className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-text-main">Company</h4>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link href="/#hero" className="hover:text-primary">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary">About us</Link></li>
                            <li><Link href="/#pricing" className="hover:text-primary">Pricing</Link></li>
                            <li><Link href="/#features" className="hover:text-primary">Features</Link></li>
                            <li><Link href="/#faq" className="hover:text-primary">Blog Details</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-text-main">Products</h4>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link href="/#products" className="hover:text-primary">API Integration</Link></li>
                            <li><Link href="/#products" className="hover:text-primary">KYC / KYB</Link></li>
                            <li><Link href="/#products" className="hover:text-primary">Bank Analysis</Link></li>
                            <li><Link href="/#products" className="hover:text-primary">AML Screening</Link></li>
                            <li><Link href="/#products" className="hover:text-primary">Transaction Monitoring</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-text-main">Solutions</h4>
                        <ul className="space-y-3 text-sm text-text-muted">
                            <li><Link href="/#products" className="hover:text-primary">Fintech & Neobanks</Link></li>
                            <li><Link href="/#products" className="hover:text-primary">Payment Providers</Link></li>
                            <li><Link href="/#products" className="hover:text-primary">Digital Lenders</Link></li>
                            <li><Link href="/#products" className="hover:text-primary">Crypto & Web3 Platforms</Link></li>
                            <li><Link href="/#products" className="hover:text-primary">Cross-Border Financial</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col items-center">
                    <p className="text-sm text-text-muted">
                        &copy; {new Date().getFullYear()} UnifyComply. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}