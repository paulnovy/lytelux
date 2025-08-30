"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ asChild, className, variant = "primary", ...props }: ButtonProps) {
  const Comp: any = asChild ? Slot : "button";
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-60 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:opacity-95 focus-visible:ring-primary/60",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-primary/60",
    ghost: "bg-transparent hover:bg-accent text-foreground focus-visible:ring-primary/60"
  };
  return <Comp className={clsx(base, variants[variant], className)} {...props} />;
}

