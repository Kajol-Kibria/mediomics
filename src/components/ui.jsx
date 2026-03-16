import React from "react";
import { cn } from "../utils/cn";

export function Card(props) {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader(props) {
  const { className, children } = props;
  return <div className={cn("p-6 md:p-8", className)}>{children}</div>;
}

export function CardContent(props) {
  const { className, children } = props;
  return <div className={cn("px-6 pb-6 md:px-8 md:pb-8", className)}>{children}</div>;
}

export function Button(props) {
  const {
    className,
    variant = "primary",
    size = "lg",
    disabled,
    ...restProps
  } = props;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3.5 text-base",
  };

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 shadow-[0_18px_40px_-20px_rgba(56,189,248,0.65)] hover:shadow-[0_22px_60px_-25px_rgba(139,92,246,0.85)] hover:brightness-110 active:scale-[0.99]",
    secondary:
      "text-white bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20",
    ghost: "text-white/80 hover:text-white hover:bg-white/10",
    danger:
      "text-white bg-gradient-to-r from-rose-600 to-orange-500 hover:brightness-110 shadow-[0_18px_40px_-20px_rgba(244,63,94,0.55)]",
  };

  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      disabled={disabled}
      {...restProps}
    />
  );
}

export function Badge(props) {
  const { className, children, tone = "neutral" } = props;

  const tones = {
    neutral: "bg-white/10 text-white/80 border-white/10",
    success: "bg-emerald-500/15 text-emerald-200 border-emerald-500/25",
    warning: "bg-amber-500/15 text-amber-200 border-amber-500/25",
    info: "bg-cyan-500/15 text-cyan-200 border-cyan-500/25",
    purple: "bg-violet-500/15 text-violet-200 border-violet-500/25",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Metric(props) {
  const { label, value, className } = props;
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/5 p-4", className)}>
      <div className="text-xs font-semibold text-white/60">{label}</div>
      <div className="mt-1 text-sm font-bold text-white">{value}</div>
    </div>
  );
}
