import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H-Timw Portfolio v2",
  description:
    "A small project to re-build my portfolio, with new Figma design. Also learn to build a react project with new tools I'm not really familiar - Next.JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased flex flex-col justify-center items-center w-screen h-screen`}
      >
        <main className="flex flex-col justify-center items-center border rounded-lg border-(--color-theme-stroke) w-full max-w-[1782px]">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
