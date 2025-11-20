import clsx from "clsx";

export function Button({ className = "", variant = "accent", size = "md", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    accent: "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500",
    outline: "border border-slate-300 text-slate-800 hover:bg-slate-50",
    ghost: "text-slate-800 hover:bg-slate-100"
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-6 text-base"
  };
  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
