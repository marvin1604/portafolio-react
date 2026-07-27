import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale, PortfolioContent, Project } from "@/types/portfolio";

interface ProjectsProps {
  locale: Locale;
  content: PortfolioContent;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image && project.imageAlt) {
    return (
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 55vw"
        />
      </div>
    );
  }

  return (
    <div className="portfolio-visual" aria-hidden="true">
      <div className="browser-dots"><span /><span /><span /></div>
      <p>Walter Rodríguez</p>
      <strong>Full Stack Developer</strong>
      <div className="visual-lines"><span /><span /><span /></div>
    </div>
  );
}

export function Projects({ locale, content }: ProjectsProps) {
  const sectionId = locale === "it" ? "progetti" : "projects";

  return (
    <section className="section section-contrast" id={sectionId}>
      <div className="shell">
        <SectionHeading
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          intro={content.projects.intro}
        />
        <div className="projects-list">
          {content.projects.items.map((project, index) => (
            <article
              className={`project-card ${project.featured ? "project-featured" : ""}`}
              key={project.name}
              data-reveal="up"
              data-spotlight
            >
              <ProjectVisual project={project} />
              <div className="project-copy">
                <p className="project-number">0{index + 1} / 0{content.projects.items.length}</p>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-status">{project.status}</p>
                <div className="tag-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      {content.actions.viewDemo}
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  ) : null}
                  <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                    <Github size={17} aria-hidden="true" />
                    {content.actions.viewCode}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
