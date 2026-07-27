import { Cpu, Layers3, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale, PortfolioContent } from "@/types/portfolio";

const icons = [Cpu, Layers3, Users];

interface AboutProps {
  locale: Locale;
  content: PortfolioContent;
}

export function About({ locale, content }: AboutProps) {
  const sectionId = locale === "it" ? "profilo" : "about";

  return (
    <section className="section" id={sectionId}>
      <div className="shell about-layout">
        <SectionHeading eyebrow={content.about.eyebrow} title={content.about.title} />
        <div className="about-content" data-reveal="up" data-delay="1">
          <div className="about-copy">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="principles-grid">
            {content.about.principles.map((principle, index) => {
              const Icon = icons[index];
              return (
                <div
                  className="principle-card"
                  key={principle}
                  data-reveal="scale"
                  data-delay={String(index + 1)}
                >
                  <Icon size={22} aria-hidden="true" />
                  <span>0{index + 1}</span>
                  <p>{principle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
