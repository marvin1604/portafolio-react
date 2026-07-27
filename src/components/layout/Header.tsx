import { Download, Languages, Menu } from "lucide-react";
import Link from "next/link";
import type { Locale, PortfolioContent } from "@/types/portfolio";

interface HeaderProps {
  locale: Locale;
  content: PortfolioContent;
}

export function Header({ locale, content }: HeaderProps) {
  const alternateLocale = locale === "it" ? "en" : "it";

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href={`/${locale}`} aria-label="Walter Rodríguez">
          <span className="brand-mark" aria-hidden="true">WR</span>
          <span>Walter Rodríguez</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            className="language-link"
            href={`/${alternateLocale}`}
            hrefLang={alternateLocale}
            aria-label={content.actions.switchLanguage}
          >
            <Languages size={17} aria-hidden="true" />
            <span>{alternateLocale.toUpperCase()}</span>
          </Link>
          <a
            className="button button-small desktop-cv"
            href="/cv/Walter_Rodriguez_CV_FullStack_IT.pdf"
            download
          >
            <Download size={16} aria-hidden="true" />
            {content.actions.downloadCv}
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <Menu size={22} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              {content.navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="/cv/Walter_Rodriguez_CV_FullStack_IT.pdf" download>
                {content.actions.downloadCv}
              </a>
            </nav>
          </details>
        </div>
      </div>
      <span className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
