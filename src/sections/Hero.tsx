import { ArrowDownRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import type { Locale, PortfolioContent } from "@/types/portfolio";

export function Hero({
  locale,
  content,
}: {
  locale: Locale;
  content: PortfolioContent;
}) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="shell hero-layout">
        <div className="hero-copy" data-reveal="hero">
          <p className="eyebrow">
            <MapPin size={15} aria-hidden="true" />
            {content.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {content.hero.title}
            <span>{content.hero.highlight}</span>
          </h1>
          <p className="hero-description">{content.hero.description}</p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={locale === "it" ? "#progetti" : "#projects"}
            >
              {content.actions.viewProjects}
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href="/cv/Walter_Rodriguez_CV_FullStack_IT.pdf"
              download
            >
              <Download size={18} aria-hidden="true" />
              {content.actions.downloadCv}
            </a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/marvin1604" target="_blank" rel="noreferrer">
              <Github size={19} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/walter-rodriguez-sanchez/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={19} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <aside
          className="hero-card"
          aria-label="Professional profile summary"
          data-reveal="scale"
          data-delay="2"
          data-tilt
        >
          <div className="availability">
            <span aria-hidden="true" />
            Available for work
          </div>
          <p className="hero-card-label">Walter Rodríguez</p>
          <p className="hero-card-role">Full Stack / Frontend</p>
          <div className="hero-card-rule" />
          <ul>
            {content.hero.facts.map((fact, index) => (
              <li key={fact}>
                <span>0{index + 1}</span>
                {fact}
              </li>
            ))}
          </ul>
          <div className="code-line" aria-hidden="true">
            <span>const</span> focus = [&quot;products&quot;, &quot;data&quot;, &quot;UX&quot;];
          </div>
        </aside>
      </div>
    </section>
  );
}
