"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenis.on("scroll", ScrollTrigger.update);

        const tick = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(tick);

        gsap.ticker.lagSmoothing(0, 0);

        const handleAnchorClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest("a");
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("#")) return;
            const el = document.getElementById(href.slice(1));
            if (!el) return;
            e.preventDefault();
            lenis.scrollTo(el, { offset: 0 });
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
            gsap.ticker.remove(tick);
        };
    }, []);

    return <>{children}</>;
}