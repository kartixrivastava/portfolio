import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartik Srivastava | Frontend Developer",
  description: "Frontend developer focused on building fast, scalable, and intuitive web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var dark = s === 'dark' || (s !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var r = document.documentElement;
    r.classList.remove('light','dark');
    r.classList.add(dark ? 'dark' : 'light');
  } catch (e) {}
})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
