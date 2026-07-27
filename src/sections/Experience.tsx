import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale, PortfolioContent } from "@/types/portfolio";

interface ExperienceProps {
  locale: Locale;
  content: PortfolioContent;
}

export function Experience({ locale, content }: ExperienceProps) {
  const sectionId = locale === "it" ? "esperienza" : "experience";

  return (
    <section className="section" id={sectionId}>
      <div className="shell">
        <SectionHeading
          eyebrow={content.experience.eyebrow}
          title={content.experience.title}
          intro={content.experience.intro}
        />
        {content.experience.items.map((item) => (
          <article
            className="experience-card"
            key={item.company}
            data-reveal="up"
          >
            <div className="experience-meta">
              <p className="experience-period">{item.period}</p>
              <p>{item.location}</p>
              <span className="experience-line" aria-hidden="true" />
            </div>
            <div className="experience-content">
              <div className="experience-title">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <ArrowUpRight size={24} aria-hidden="true" />
              </div>
              <p className="experience-summary">{item.summary}</p>
              <ul className="achievement-list">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>
                    <span aria-hidden="true">
                      <Check size={14} />
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="tag-list" aria-label="Technologies">
                {item.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
