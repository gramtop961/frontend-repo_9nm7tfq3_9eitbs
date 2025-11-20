import { useState } from "react";

function VibeBubble({ label, active }){
  return (
    <div className={`px-4 py-2 rounded-full text-sm border ${active ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-slate-700 border-slate-200'}`}>{label}</div>
  );
}

export default function VibeSwitch(){
  const [mode, setMode] = useState("Amical");

  const responses = {
    Amical: "Bonjour Claire ! Merci pour votre retour chaleureux. Nous sommes ravis que vous ayez aimé la terrasse. On vous garde votre table préférée pour samedi ?",
    Formel: "Bonjour Claire, merci pour votre avis. Nous sommes heureux que la terrasse vous ait plu. N'hésitez pas à réserver pour samedi afin que nous puissions vous accueillir dans les meilleures conditions.",
    Premium: "Chère Claire, un grand merci pour votre message. Votre satisfaction nous honore. Nous serions ravis d'orchestrer votre prochaine expérience ce samedi — notre équipe s'en occupe."
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Adaptez le ton en un clic</h2>
          <p className="mt-3 text-slate-600">Choisissez un style : l'IA calibre chaque mot sans jamais paraître robot.</p>
        </div>
        <div className="flex justify-center gap-2 mb-6">
          {Object.keys(responses).map((label)=> (
            <button key={label} onClick={()=>setMode(label)} className={`px-3 py-1.5 rounded-full border text-sm ${mode===label? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-slate-700 border-slate-200'}`}>
              {label}
            </button>
          ))}
        </div>
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 text-lg">
          {responses[mode]}
        </div>
      </div>
    </section>
  );
}
