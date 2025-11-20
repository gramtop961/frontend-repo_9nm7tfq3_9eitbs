import { Button } from "./ui/Button";

export default function Pricing(){
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Tarifs simples et transparents</h2>
          <p className="mt-3 text-slate-600">Commencez petit, grandissez quand vous voulez.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-sm text-slate-500">Mensuel</div>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-slate-900">29€</span>
              <span className="text-slate-500">/mois</span>
            </div>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>➤ 200 réponses IA / mois</li>
              <li>➤ Connexion Google en 1 clic</li>
              <li>➤ Ton personnalisé</li>
              <li>➤ Multi-langues</li>
            </ul>
            <Button className="mt-6 w-full">Essayer</Button>
          </div>
          <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-6 relative">
            <div className="absolute -top-3 right-4 text-xs bg-emerald-500 text-white px-2 py-1 rounded">-20%</div>
            <div className="text-sm text-emerald-700">Annuel</div>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-slate-900">23€</span>
              <span className="text-slate-500">/mois</span>
            </div>
            <p className="text-sm text-slate-600">Facturé 276€ / an</p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>➤ 2 mois offerts</li>
              <li>➤ Tout du plan mensuel</li>
              <li>➤ Support prioritaire</li>
            </ul>
            <Button className="mt-6 w-full">Choisir l'annuel</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
