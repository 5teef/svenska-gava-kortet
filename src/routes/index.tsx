import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Store, CreditCard, Mail, Gift, ShieldCheck, Zap } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digitala presentkort till dina favoritbutiker" },
      { name: "description", content: "Välj butik och belopp, betala med kort eller Apple Pay och få presentkortet i mejlen direkt." },
      { property: "og:title", content: "Digitala presentkort till dina favoritbutiker" },
      { property: "og:description", content: "Presentkort till butikerna de redan gillar – levererat direkt i mejlen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stores = [
  { name: "Zalando", cat: "Mode", domain: "zalando.se" },
  { name: "H&M", cat: "Mode", domain: "hm.com" },
  { name: "Åhléns", cat: "Skönhet & hem", domain: "ahlens.se" },
  { name: "Bokadirekt", cat: "Spa & behandlingar", domain: "bokadirekt.se" },
  { name: "Bodystore", cat: "Hälsa", domain: "bodystore.com" },
  { name: "McDonald's", cat: "Mat", domain: "mcdonalds.se" },
];

const steps = [
  { icon: Store, title: "Välj butik", text: "Hitta favoriten bland våra butiker." },
  { icon: CreditCard, title: "Välj belopp & betala", text: "Kort eller Apple Pay – klart på sekunder." },
  { icon: Mail, title: "Få koden direkt", text: "Presentkortet landar i mejlen samma minut." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <Gift className="h-6 w-6 text-primary" /> Presentkort
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#butiker" className="hover:text-foreground">Butiker</a>
            <a href="#sa-funkar-det" className="hover:text-foreground">Så funkar det</a>
            <a href="#fragor" className="hover:text-foreground">Vanliga frågor</a>
          </nav>
          <a href="#butiker" className="rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-secondary">
            Köp presentkort
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[640px] items-center overflow-hidden lg:min-h-[720px]">
        <img src={hero} alt="Presentkort från Zalando, H&M, Åhléns, Bokadirekt, Bodystore och McDonald's" className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Digitala presentkort</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Presentkort <span className="text-gold-gradient">till butikerna</span> de redan gillar
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Välj butik och belopp, betala med kort eller Apple Pay och få koden i mejlen direkt. Redo att ge bort samma minut.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href="#butiker" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-4 font-semibold text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5">
                Hitta en butik <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#sa-funkar-det" className="font-semibold underline underline-offset-4 hover:text-primary">Så funkar det</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3">
          {[
            { icon: Zap, t: "Leverans direkt", s: "Koden i mejlen på sekunder" },
            { icon: ShieldCheck, t: "Säker betalning", s: "Kort & Apple Pay" },
            { icon: Gift, t: "Alltid rätt present", s: "De väljer själva" },
          ].map(({ icon: I, t, s }) => (
            <div key={t} className="flex items-center gap-4">
              <I className="h-7 w-7 text-primary" />
              <div><p className="font-semibold">{t}</p><p className="text-sm text-muted-foreground">{s}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="butiker" className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Populära butiker</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Välj en <span className="text-gold-gradient">favorit</span></h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Presentkort från 100 kr till 2 000 kr – levererat direkt i mejlen.</p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stores.map((s) => (
              <a key={s.name} href="#" className="group block">
                <div className="relative aspect-[1.586] overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-secondary via-card to-background p-6 shadow-gold transition duration-300 group-hover:-translate-y-2 group-hover:rotate-[-1deg] group-hover:border-primary">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-2xl transition group-hover:bg-primary/30" />
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition duration-700 group-hover:translate-x-full" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-foreground p-2 shadow-lg">
                        <img src={`https://www.google.com/s2/favicons?domain=${s.domain}&sz=128`} alt={`${s.name} logotyp`} className="h-full w-full object-contain" loading="lazy" />
                      </div>
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Presentkort</p>
                        <p className="mt-1 text-2xl font-extrabold">{s.name}</p>
                      </div>
                      <div className="h-8 w-11 rounded-md bg-gold-gradient opacity-90" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-sm text-muted-foreground">{s.cat}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">Välj belopp <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="sa-funkar-det" className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold tracking-tight">Så funkar det</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map(({ icon: I, title, text }, i) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-primary-foreground shadow-gold">
                  <I className="h-7 w-7" />
                </div>
                <p className="mt-5 text-sm font-semibold text-primary">Steg {i + 1}</p>
                <h3 className="mt-1 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fragor" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-4xl font-extrabold tracking-tight">Vanliga frågor</h2>
        <div className="mt-10 divide-y divide-border">
          {[
            ["Hur snabbt får jag presentkortet?", "Direkt efter betalning skickas koden till din mejl."],
            ["Hur betalar jag?", "Med kort eller Apple Pay."],
            ["Kan jag skicka det till någon annan?", "Ja, vidarebefordra mejlet eller skriv ut koden."],
          ].map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold">{q}</summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Presentkort. Alla rättigheter förbehållna.
      </footer>
    </div>
  );
}
