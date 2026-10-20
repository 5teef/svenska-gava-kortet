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
  { name: "Zalando", cat: "Mode" },
  { name: "H&M", cat: "Mode" },
  { name: "Åhléns", cat: "Skönhet & hem" },
  { name: "Bokadirekt", cat: "Spa & behandlingar" },
  { name: "Bodystore", cat: "Hälsa" },
  { name: "McDonald's", cat: "Mat" },
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

      <section id="butiker" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Populära butiker</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Välj en favorit</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((s) => (
            <a key={s.name} href="#" className="group flex items-center justify-between rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-gold">
              <div>
                <p className="text-2xl font-bold">{s.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.cat}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
            </a>
          ))}
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
