import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marvin1604-portafolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pagina non trovata | Walter Rodríguez",
  description: "La pagina richiesta non è disponibile.",
};

export default function NotFound() {
  return (
    <html lang="it">
      <body>
        <main className="not-found">
          <p className="eyebrow2">404</p>
          <h1>Pagina non trovata</h1>
          <Link className="button button-primary" href="/it">
            Torna al portfolio
          </Link>
        </main>
      </body>
    </html>
  );
}
