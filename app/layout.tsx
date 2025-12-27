import "./globals.css";

export const metadata = {
  title: "Simple Store",
  description: "Minimal ecommerce demo with cart management."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
