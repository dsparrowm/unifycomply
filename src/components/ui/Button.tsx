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
                    "inline-flex cursor-pointer items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
                    {
                        "bg-primary text-white shadow-sm hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_12px_24px_rgba(10,63,51,0.18)]": variant === "primary",
                        "border border-gray-200 bg-white text-text-main shadow-sm hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_10px_22px_rgba(15,23,42,0.08)]": variant === "secondary",
                        "border border-primary bg-white text-primary shadow-sm hover:-translate-y-0.5 hover:bg-primary/5 hover:shadow-[0_10px_22px_rgba(10,63,51,0.10)]": variant === "outline",
                        "text-text-muted hover:bg-gray-100 hover:text-text-main": variant === "ghost",
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