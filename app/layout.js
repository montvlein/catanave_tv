import "./globals.css";

export const metadata = {
  title: "Catannabis TV",
  description: "Memes de autor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.webp" />

        {/* Meta Tags Básicas */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Memes de autor, humor y entretenimiento - Catannabis TV" />
        <meta name="keywords" content="memes, humor, entretenimiento, Catannabis, TV, autor" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Catannabis TV" />

        {/* Open Graph Meta Tags para Redes Sociales */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Catannabis TV" />
        <meta property="og:description" content="Memes de autor, humor y entretenimiento - Catannabis TV" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:url" content="https://catannabis.com" />
        <meta property="og:site_name" content="Catannabis TV" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catannabis TV" />
        <meta name="twitter:description" content="Memes de autor, humor y entretenimiento - Catannabis TV" />
        <meta name="twitter:image" content="/logo.webp" />
        <meta name="twitter:site" content="@Dario_wolf" />
        <meta name="twitter:creator" content="@Dario_wolf" />

        {/* Preconnect y Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://catannabis.com" />

        {/* Schema.org para SEO Local */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
