
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[linear-gradient(to_bottom_right,_#030A00_0%,_#091E01_50%,_#030A00_100%)] relative min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
