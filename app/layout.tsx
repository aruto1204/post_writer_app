import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/toaster";
const fontNotoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS", "Shadcn/ui"],
  authors: [{ name: "ArutoWorks", url: siteConfig.links.x }],
  robots: {
    index: false,
    follow: false,
    noimageindex: false,
    noarchive: false,
    nosnippet: false,
  },
  // openGraph: {
  //   type: "website",
  //   locale: "ja",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/og.jpg`],
  //   creator: "@aruto_sendai",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn("bg-background min-h-screen antialiased", fontNotoSansJP.className)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
