import "@/styles/globals.css";

import { fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { Analytics } from "@/components/analytics";
import { ModalProvider } from "@/components/modal-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Thru",
    "Access Management",
    "Digital ID",
    "Access Control",
    "Event Management",
    "Venue Access",
    "Blockchain",
    "Identity Verification",
    "Access Analytics",
  ],
  authors: [
    {
      name: "thruticket",
    },
  ],
  creator: "dolivabs",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@thruticket",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
        )}
      >
        
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <Analytics />
            <Toaster />
            <ModalProvider />
            <TailwindIndicator />
          </ThemeProvider>
        
      </body>
    </html>
  );
}
