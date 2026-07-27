import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollEffects } from "@/components/motion/ScrollEffects";
import { portfolioContent, isLocale } from "@/data/content";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { notFound } from "next/navigation";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = portfolioContent[locale];

  return (
    <>
      <ScrollEffects />
      <a className="skip-link" href="#main-content">
        {locale === "it" ? "Vai al contenuto" : "Skip to content"}
      </a>
      <Header locale={locale} content={content} />
      <main id="main-content">
        <Hero locale={locale} content={content} />
        <Experience locale={locale} content={content} />
        <Projects locale={locale} content={content} />
        <About locale={locale} content={content} />
        <Skills locale={locale} content={content} />
        <Contact locale={locale} content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
