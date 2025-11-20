import { Button } from "./ui/Button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-emerald-400 shadow-sm" />
            <span className="text-slate-900 font-semibold tracking-tight">TrustFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Fonctionnalités</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Tarifs</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </nav>
          <div className="hidden md:block">
            <Button>Essai gratuit</Button>
          </div>
          <button aria-label="Open menu" className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={()=>setOpen(v=>!v)}>
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 text-slate-700">
              <a href="#features" className="px-2 py-2 rounded-lg hover:bg-slate-100">Fonctionnalités</a>
              <a href="#pricing" className="px-2 py-2 rounded-lg hover:bg-slate-100">Tarifs</a>
              <a href="#faq" className="px-2 py-2 rounded-lg hover:bg-slate-100">FAQ</a>
              <Button className="mt-2">Essai gratuit</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
