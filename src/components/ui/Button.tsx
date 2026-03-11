import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-white hover:bg-primary-hover hover:scale-105 shadow-sm": variant === "primary",
                        "bg-white text-text-main hover:bg-gray-50 border border-gray-200 shadow-sm hover:-translate-y-0.5": variant === "secondary",
                        "border border-primary text-primary hover:bg-primary/5": variant === "outline",
                        "hover:bg-gray-100 text-text-muted hover:text-text-main": variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-6 text-sm": size === "md",
                        "h-14 px-8 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";