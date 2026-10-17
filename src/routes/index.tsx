import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, ClipboardList, Cog, MapPin, Menu, MessageCircle, Phone, PhoneCall, Search, Wrench, X } from "lucide-react";
import { business, serviceMessage, telHref, whatsappHref } from "@/lib/business-config";
import { ContactForm } from "@/components/site/ContactForm";
import hero from "@/assets/hero-motor.jpg";
import coil from "@/assets/coil.jpg";
import threePhase from "@/assets/three-phase.jpg";
import submersible from "@/assets/submersible.jpg";
import riceMill from "@/assets/rice-mill.jpg";
import fan from "@/assets/fan.jpg";
import mixer from "@/assets/mixer.jpg";
import riceCooker from "@/assets/rice-cooker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${business.name} | মোটর মেরামত সিংড়া, নাটোর` },
      { name: "description", content: "সিংড়া, নাটোরে ইলেকট্রিক মোটর মেরামত, মোটর কয়েল বাধাই, সাবমার্সিবল পাম্প, রাইস মিল মোটর এবং সিঙ্গেল ফেজ ও থ্রি ফেজ মোটর সার্ভিসিং।" },
      { property: "og:title", content: business.name },
      { property: "og:description", content: "সকল ধরনের ইলেকট্রিক মোটর মেরামত ও কয়েল রিওয়াইন্ডিং — সিংড়া, নাটোর।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: business.name, address: { "@type": "PostalAddress", streetAddress: "সিংড়া রোড, জয়পুরহাট কলম", addressLocality: "সিংড়া", addressRegion: "নাটোর", addressCountry: "BD" }, currenciesAccepted: "BDT", ...(business.phone && { telephone: business.phone }) }) }],
  }),
  component: Index,
});

const services = [
  { t: "ইলেকট্রিক মোটর মেরামত", d: "চালু না হওয়া, গরম হওয়া বা শব্দ করা মোটরের পরীক্ষা ও মেরামত।", img: hero, alt: "খোলা ইলেকট্রিক মোটর মেরামত করছেন একজন টেকনিশিয়ান" },
  { t: "কপার কয়েল রিওয়াইন্ডিং", d: "পুড়ে যাওয়া মোটরের কয়েল নতুন কপার তার দিয়ে বাধাই।", img: coil, alt: "মোটরের স্টেটরে কপার কয়েল বাধাই" },
  { t: "সিঙ্গেল ফেজ মোটর", d: "বাসাবাড়ি ও দোকানের সিঙ্গেল ফেজ মোটর, ক্যাপাসিটর ও সুইচ সমস্যা।", img: coil, alt: "সিঙ্গেল ফেজ মোটরের কয়েল" },
  { t: "থ্রি ফেজ ইন্ডাস্ট্রিয়াল মোটর", d: "কারখানা ও মিলের থ্রি ফেজ মোটরের সার্ভিসিং ও রিওয়াইন্ডিং।", img: threePhase, alt: "নীল রঙের থ্রি ফেজ ইন্ডাস্ট্রিয়াল মোটর" },
  { t: "সাবমার্সিবল পাম্প", d: "সাবমার্সিবল ও পানির পাম্পের মোটর মেরামত।", img: submersible, alt: "ওয়ার্কবেঞ্চে রাখা সাবমার্সিবল পানির পাম্প" },
  { t: "রাইস মিল মেশিনারি", d: "রাইস মিলের মোটর ও সংশ্লিষ্ট বৈদ্যুতিক যন্ত্রের মেরামত।", img: riceMill, alt: "বেল্ট ড্রাইভসহ রাইস মিলের মোটর" },
  { t: "সিলিং ও টেবিল ফ্যান", d: "ফ্যানের কয়েল, বেয়ারিং ও রেগুলেটর সমস্যা।", img: fan, alt: "খোলা সিলিং ফ্যানের মোটর ও টেবিল ফ্যান" },
  { t: "মিক্সার ও ব্লেন্ডার", d: "মিক্সার গ্রাইন্ডার ও ব্লেন্ডারের মোটর মেরামত।", img: mixer, alt: "মেরামতের জন্য খোলা মিক্সার গ্রাইন্ডার" },
  { t: "রাইস কুকার মেরামত", d: "হিটিং এলিমেন্ট, থার্মোস্ট্যাট ও সুইচ সমস্যা।", img: riceCooker, alt: "মাল্টিমিটার দিয়ে রাইস কুকার পরীক্ষা" },
  { t: "ইন্ডাস্ট্রিয়াল মোটর সার্ভিসিং", d: "বেয়ারিং পরিবর্তন, পরিষ্কার ও নিয়মিত রক্ষণাবেক্ষণ।", img: threePhase, alt: "ইন্ডাস্ট্রিয়াল মোটর সার্ভিসিং" },
];
const nav = [["#home", "হোম"], ["#about", "আমাদের সম্পর্কে"], ["#services", "সার্ভিস"], ["#process", "মেরামত প্রক্রিয়া"], ["#contact", "যোগাযোগ"]];
const hp = ["১ HP", "২ HP", "৩ HP", "৪ HP", "৫ HP", "২০ HP", "৩০ HP", "৫০ HP", "অন্যান্য"];
const steps = [
  { i: PhoneCall, t: "যোগাযোগ করুন" },
  { i: ClipboardList, t: "মোটর বা মেশিনের সমস্যা জানান" },
  { i: Search, t: "পরীক্ষা ও খরচ নিয়ে আলোচনা করুন" },
  { i: Wrench, t: "সম্মতি অনুযায়ী মেরামতের কাজ সম্পন্ন করুন" },
];

const btn = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition";

function CallLink({ className, children }: { className: string; children: ReactNode }) {
  const href = telHref();
  return href ? <a href={href} className={className}>{children}</a> : <a href="#contact" className={className} title="ফোন নম্বর শীঘ্রই যুক্ত হবে">{children}</a>;
}
function WaLink({ msg, className, children }: { msg?: string; className: string; children: ReactNode }) {
  const href = whatsappHref(msg);
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a> : <a href="#contact" className={className}>{children}</a>;
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 10);
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("scroll", s); window.addEventListener("keydown", k);
    return () => { window.removeEventListener("scroll", s); window.removeEventListener("keydown", k); };
  }, []);
  const configured = !!telHref();

  return (
    <div className="pb-20 md:pb-0">
      <header className={`sticky top-0 z-40 border-b bg-background/95 backdrop-blur transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="container-site flex h-16 items-center justify-between gap-3">
          <a href="#home" className="flex min-w-0 items-center gap-2 font-bold text-primary">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"><Cog className="size-5" /></span>
            <span className="truncate text-lg">{business.shortName}</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">{nav.map(([h, l]) => <a key={h} href={h} className="font-medium hover:text-accent">{l}</a>)}</nav>
          <div className="flex items-center gap-2">
            <CallLink className={`${btn} hidden bg-accent py-2 text-accent-foreground hover:brightness-105 sm:inline-flex`}><Phone className="size-4" /> ফোন করুন</CallLink>
            <button className="grid size-10 place-items-center rounded-lg border lg:hidden" aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mnav" className="border-t bg-background lg:hidden">
            <div className="container-site grid py-2">{nav.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 font-medium hover:bg-muted">{l}</a>)}</div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="bg-ink text-ink-foreground">
          <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
            <div className="animate-rise min-w-0">
              <p className="mb-4 inline-flex rounded-full bg-accent/15 px-3 py-1 text-sm text-accent">{business.address}</p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">সকল ধরনের ইলেকট্রিক মোটর মেরামত ও কয়েল রিওয়াইন্ডিং</h1>
              <p className="mt-5 text-lg opacity-85">বাসাবাড়ি, দোকান, রাইস মিল ও কারখানার মোটর, সাবমার্সিবল পাম্প এবং বিভিন্ন ইলেকট্রিক্যাল মেশিনের মেরামত ও সার্ভিসিং।</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallLink className={`${btn} bg-accent text-accent-foreground hover:brightness-105`}><Phone className="size-5" /> ফোন করুন</CallLink>
                <WaLink className={`${btn} bg-whatsapp text-primary-foreground hover:brightness-110`}><MessageCircle className="size-5" /> WhatsApp-এ যোগাযোগ</WaLink>
                <a href="#services" className={`${btn} border border-ink-foreground/30 hover:bg-ink-foreground/10`}>সার্ভিস দেখুন <ArrowRight className="size-4" /></a>
              </div>
              {!configured && <p className="mt-4 text-sm opacity-70">ফোন ও WhatsApp নম্বর শীঘ্রই যুক্ত করা হবে।</p>}
            </div>
            <img src={hero} alt="ওয়ার্কশপে ইলেকট্রিক মোটরের কয়েল মেরামত" width={1280} height={960} className="animate-rise aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl" />
          </div>
        </section>

        <section id="about" className="container-site grid items-center gap-10 py-16 md:grid-cols-2">
          <img src={coil} alt="কপার কয়েল বাধাইয়ের কাজ" loading="lazy" width={944} height={704} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div>
            <h2 className="text-3xl font-bold text-primary">আমাদের সম্পর্কে</h2>
            <p className="mt-4 text-lg text-muted-foreground">{business.name} সিংড়া, নাটোরে ইলেকট্রিক মোটর মেরামত, কয়েল রিওয়াইন্ডিং এবং বিভিন্ন বৈদ্যুতিক যন্ত্রপাতির সার্ভিসিং করে থাকে।</p>
            <p className="mt-3 font-medium">মালিক: {business.owner}</p>
            <ul className="mt-5 grid gap-2">{["সিঙ্গেল ফেজ ও থ্রি ফেজ মোটর", "পরীক্ষার পর খরচ জানানো হয়", "বাসাবাড়ি থেকে কারখানা পর্যন্ত"].map((x) => <li key={x} className="flex gap-2"><CheckCircle2 className="size-5 text-accent" />{x}</li>)}</ul>
          </div>
        </section>

        <section id="services" className="bg-muted py-16">
          <div className="container-site">
            <h2 className="text-3xl font-bold text-primary">আমাদের সার্ভিসসমূহ</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((s) => (
                <article key={s.t} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <img src={s.img} alt={s.alt} loading="lazy" width={944} height={704} className="aspect-[4/3] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold">{s.t}</h3>
                    <p className="mt-2 flex-1 text-muted-foreground">{s.d}</p>
                    <WaLink msg={serviceMessage(s.t)} className="mt-4 inline-flex items-center gap-2 font-semibold text-whatsapp"><MessageCircle className="size-4" /> WhatsApp-এ জানুন</WaLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-site py-16">
          <h2 className="text-3xl font-bold text-primary">মোটরের ক্ষমতা</h2>
          <div className="mt-6 flex flex-wrap gap-3">{hp.map((h) => <span key={h} className="rounded-xl border-2 border-primary/20 bg-card px-5 py-3 text-lg font-semibold text-primary">{h}</span>)}</div>
          <p className="mt-4 text-muted-foreground">মেরামত সম্ভব কিনা তা মোটর পরীক্ষার পর জানানো হয়।</p>
        </section>

        <section id="process" className="bg-ink py-16 text-ink-foreground">
          <div className="container-site">
            <h2 className="text-3xl font-bold">মেরামত প্রক্রিয়া</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.t} className="rounded-2xl border border-ink-foreground/15 p-6">
                  <s.i className="size-8 text-accent" />
                  <p className="mt-4 text-sm opacity-70">ধাপ {i + 1}</p>
                  <p className="mt-1 text-lg font-semibold">{s.t}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="container-site grid gap-10 py-16 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="text-3xl font-bold text-primary">যোগাযোগ</h2>
            <p className="mt-4 flex gap-2"><MapPin className="size-5 shrink-0 text-accent" />{business.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallLink className={`${btn} bg-accent text-accent-foreground`}><Phone className="size-5" /> কল করুন</CallLink>
              <WaLink className={`${btn} bg-whatsapp text-primary-foreground`}><MessageCircle className="size-5" /> WhatsApp</WaLink>
            </div>
            {!configured && <p className="mt-4 text-sm text-muted-foreground">ফোন নম্বর এখনো যুক্ত করা হয়নি।</p>}
          </div>
          <ContactForm services={services.map((s) => s.t)} />
        </section>
      </main>

      <footer className="bg-ink py-10 text-ink-foreground">
        <div className="container-site flex flex-col gap-4 md:flex-row md:justify-between">
          <div><p className="font-bold">{business.name}</p><p className="mt-1 text-sm opacity-75">{business.address}</p></div>
          <nav className="flex flex-wrap gap-4 text-sm">{nav.map(([h, l]) => <a key={h} href={h} className="opacity-80 hover:opacity-100">{l}</a>)}</nav>
        </div>
        <p className="container-site mt-6 text-sm opacity-60">© {new Date().getFullYear()} {business.name}</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-card pb-[env(safe-area-inset-bottom)] md:hidden">
        <CallLink className="flex flex-col items-center gap-1 py-2.5 text-sm font-medium text-primary"><Phone className="size-5" />কল করুন</CallLink>
        <WaLink className="flex flex-col items-center gap-1 border-x py-2.5 text-sm font-medium text-whatsapp"><MessageCircle className="size-5" />WhatsApp</WaLink>
        <a href="#contact" className="flex flex-col items-center gap-1 py-2.5 text-sm font-medium"><ClipboardList className="size-5" />ফর্ম</a>
      </div>
      <WaLink className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-xl md:grid"><MessageCircle className="size-7" /><span className="sr-only">WhatsApp</span></WaLink>
    </div>
  );
}
