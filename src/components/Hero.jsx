import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500"/>
              Gagnez 5h par semaine sur vos réponses Google
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Transformez vos avis Google en clients fidèles sans écrire un mot.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              L'assistant IA qui répond à vos clients comme un Chef étoilé. Gagnez 5h par semaine et boostez votre référencement local.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:w-auto">Essai gratuit</Button>
              <Button variant="outline" className="w-full sm:w-auto">Voir la démo</Button>
            </div>
            <p className="mt-3 text-sm text-slate-500">Aucune carte requise • Annulation en 1 clic</p>
          </div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, ease:"easeOut"}} className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-4 md:p-6">
              <div className="text-sm text-slate-500 mb-2">Aperçu de réponse IA</div>
              <div className="grid gap-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="text-[13px] text-slate-500 mb-1">Avis client</div>
                  <p className="text-slate-800">"Attente trop longue et service moyen. Déçu de l'expérience."</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="text-[13px] text-emerald-700 mb-1">Réponse IA (amicale)</div>
                  <p className="text-slate-800">Bonjour Camille, merci d'avoir pris le temps de nous écrire. Nous sommes sincèrement désolés pour l'attente. Votre retour nous aide à améliorer notre organisation. Nous serions ravis de vous offrir un café lors de votre prochaine visite — demandez Lucas à l'accueil. À très bientôt.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
