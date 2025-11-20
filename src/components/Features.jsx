import { Brain, Languages, Sparkles } from "lucide-react";

function FeatureCard({ icon: Icon, title, description }){
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 text-white flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}

export default function Features(){
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Tout ce qu'il faut pour répondre comme un pro</h2>
          <p className="mt-3 text-slate-600">Des réponses humaines, cohérentes avec votre marque et prêtes en 1 clic.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-5">
          <div className="md:col-span-3 grid grid-rows-2 gap-5">
            <FeatureCard icon={Brain} title="Tone of Voice personnalisé" description="Définissez votre style (amical, formel, premium) et laissez l'IA s'adapter automatiquement à chaque situation." />
            <FeatureCard icon={Sparkles} title="Connexion Google en 1 clic" description="Connectez votre fiche d'établissement et répondez directement depuis TrustFlow sans changer d'outil." />
          </div>
          <div className="md:col-span-2">
            <div className="h-full rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 flex flex-col justify-between">
              <div>
                <div className="text-sm text-emerald-700 mb-2">Multi-langues</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Parlez la langue de vos clients</h3>
                <p className="text-slate-600 text-sm">Générez automatiquement des réponses naturelles en français, anglais, espagnol, italien et plus.</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-slate-600">
                <Languages className="h-5 w-5 text-emerald-500" />
                Français • English • Español • Italiano
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
