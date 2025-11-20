export default function FAQ(){
  const faqs = [
    {q: "Est-ce que les réponses font robot ?", a: "Non. Notre modèle ajuste le ton et la formulation pour rester naturel et empathique, tout en respectant votre charte."},
    {q: "Est-ce compatible avec Google ?", a: "Oui. Connectez votre fiche d'établissement en un clic et répondez directement depuis TrustFlow."},
    {q: "C'est cher ?", a: "Chaque avis bien géré ramène des clients. 29€ couvrent largement le gain de temps et l'impact SEO local."},
    {q: "Puis-je annuler ?", a: "À tout moment. Aucune carte requise pour commencer."},
  ];
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-8">Questions fréquentes</h2>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((item, i)=> (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-slate-900 font-medium">
                {item.q}
                <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
