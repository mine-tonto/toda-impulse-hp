import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "戸田市商工会青年部 | TODA IMPULSE",
    template: "%s | TODA IMPULSE",
  },
  description:
    "一人じゃない経営へ。戸田で事業を営む若手が、人としてつながり、信頼と仕事を育てる戸田市商工会青年部のサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full bg-black-base text-white antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
