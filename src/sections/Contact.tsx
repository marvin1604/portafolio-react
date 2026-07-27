import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Locale, PortfolioContent } from "@/types/portfolio";

interface ContactProps {
  locale: Locale;
  content: PortfolioContent;
}

export function Contact({ locale, content }: ContactProps) {
  const sectionId = locale === "it" ? "contatti" : "contact";

  return (
    <section className="contact-section" id={sectionId}>
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.description}</p>
          <dl className="contact-details">
            <div>
              <dt><Mail size={18} aria-hidden="true" />{content.contact.emailLabel}</dt>
              <dd><a href="mailto:walter.rodriguez.dev@gmail.com">walter.rodriguez.dev@gmail.com</a></dd>
            </div>
            <div>
              <dt><MapPin size={18} aria-hidden="true" />{content.contact.locationLabel}</dt>
              <dd>{content.contact.location}</dd>
            </div>
          </dl>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/walter-rodriguez-sanchez/" target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://github.com/marvin1604" target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>

        <form className="contact-form" action="https://formspree.io/f/xayrpabr" method="POST">
          <input type="hidden" name="_subject" value="Portfolio contact" />
          <div className="form-row">
            <label>
              {content.contact.form.name}
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              {content.contact.form.email}
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <label>
            {content.contact.form.subject}
            <input name="subject" type="text" required />
          </label>
          <label>
            {content.contact.form.message}
            <textarea name="message" rows={5} required />
          </label>
          <button className="button button-primary" type="submit">
            {content.contact.form.submit}
            <Mail size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
