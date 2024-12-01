import JsonLd from "@/client/components/JsonLd";
import "./globals.css";

export const metadata = {
  title: {
    default: "Memes de autor - Catannabis TV",
    template: `%s || Catannabis TV`
  },
  description: "Descubre los mejores memes de autor en Catannabis TV. Humor inteligente y entretenimiento asegurado con contenido original que te hará reír sin parar.",
  keywords: ["memes", "humor", "entretenimiento", "Catannabis", "TV", "autor", "canabis", "latinoamerica", "humor fumado"],
  openGraph: {
    type: "website",
    url: "https://catannabis.com",
    title: "Catannabis TV",
    site_name: "Catannabis TV",
    description: "Memes de autor y entretenimiento - Catannabis TV",
    images: [
      {
        url: "https://catannabis.com/logo.webp",
        alt: "Catannabis TV Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Dario_wolf",
    title: "Catannabis TV",
    description: "Memes de autor y entretenimiento - Catannabis TV",
    images: ["https://catannabis.com/logo.webp"],
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Catannabis TV",
  "url": "https://catannabis.com",
  "logo": "https://catannabis.com/logo.webp",
  "sameAs": [
    "https://www.facebook.com/catannabisTV",
    "https://www.instagram.com/catannabistv",
    "https://x.com/Dario_wolf",
    "https://www.youtube.com/@Catanavetv",
    "https://www.tiktok.com/@catannabis"
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>

        {/* Meta Tags Básicas */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Catannabis TV" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://catannabis.com" />
      </head>
      <body className="bg-black font-montserrat text-slate-300">
        {children}
        {/* Schema.org para SEO Local */}
        <JsonLd data={jsonLdData} />
      </body>
    </html>
  );
}
