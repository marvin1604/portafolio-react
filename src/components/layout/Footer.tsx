import { Github, Linkedin } from "lucide-react";
import type { PortfolioContent } from "@/types/portfolio";

export function Footer({ content }: { content: PortfolioContent }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-name">Walter Rodríguez</p>
          <p>{content.footer.availability}</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/marvin1604"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/walter-rodriguez-sanchez/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
        </div>
        <p className="footer-credit">
          © {new Date().getFullYear()} · {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
