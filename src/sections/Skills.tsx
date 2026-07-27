import { SectionHeading } from "@/components/SectionHeading";
import type { Locale, PortfolioContent } from "@/types/portfolio";

interface SkillsProps {
  locale: Locale;
  content: PortfolioContent;
}

export function Skills({ locale, content }: SkillsProps) {
  const sectionId = locale === "it" ? "competenze" : "skills";

  return (
    <section className="section section-muted" id={sectionId}>
      <div className="shell">
        <SectionHeading
          eyebrow={content.skills.eyebrow}
          title={content.skills.title}
          intro={content.skills.intro}
        />
        <div className="skills-grid">
          {content.skills.groups.map((group, index) => (
            <article
              className="skill-group"
              key={group.title}
              data-reveal="up"
              data-delay={String(index + 1)}
            >
              <div className="skill-group-title">
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
