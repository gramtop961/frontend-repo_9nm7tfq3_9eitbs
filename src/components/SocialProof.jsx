export default function SocialProof(){
  const logos = ["LeGuideGourmand","BistroMag","FoodIndex","ChefReview","Paris Restos","TopTables"];
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-widest text-slate-500 mb-6">Ils nous font confiance</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name)=> (
            <div key={name} className="h-10 flex items-center justify-center text-slate-400 font-semibold tracking-tight border border-slate-100 rounded-md bg-white">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
