import "./globals.css";

export const metadata = {
  title: "Catannabis TV",
  description: "Memes de autor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
