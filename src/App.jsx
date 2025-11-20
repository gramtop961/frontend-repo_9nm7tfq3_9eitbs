import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import VibeSwitch from "./components/VibeSwitch";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <VibeSwitch />
      <Pricing />
      <FAQ />
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-emerald-400" />
            <span className="font-semibold">TrustFlow</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} TrustFlow. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
