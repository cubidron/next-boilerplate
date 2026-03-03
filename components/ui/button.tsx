import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/ui/utils";

const buttonVariants = cva(
    "flex  size-max ease-in-out duration-300 group cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-zinc-800 text-white flex items-center justify-center hover:text-white hover:bg-blue-500",
                dark: "bg-black text-white flex items-center justify-center hover:text-white hover:bg-blue-500",
                light: "bg-white text-black flex items-center justify-center hover:text-white hover:bg-blue-500",
            },
            size: {
                default: "h-14 px-6 py-5 gap-3 rounded-xl",
                small: "w-max h-9.5 px-2.5 gap-2 rounded-lg",
                icon: "size-9.5 rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export type ButtonProps = VariantProps<typeof buttonVariants> & {
    as?: "button" | "a";
} & React.ComponentPropsWithoutRef<"button"> &
    React.ComponentPropsWithoutRef<"a">;

const Button = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps
>(({ className, variant, size, as = "button", ...props }, ref) => {
    const Comp = as as React.ElementType;
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    );
});
Button.displayName = "Button";

export { Button, buttonVariants };
