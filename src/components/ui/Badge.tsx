import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border border-[#0A3C32]/10 bg-tint px-3 py-1 text-xs font-semibold text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}