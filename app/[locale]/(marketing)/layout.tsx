import { NavBar } from "@/components/layout/navbar"
import { SiteFooter } from "@/components/layout/site-footer"
import { marketingConfig } from "@/config/marketing"
import { Suspense } from "react"
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface MarketingLayoutProps {
  children: React.ReactNode,
  params: { locale: string }
}

export default async function MarketingLayout({
  children,
  params,
}: MarketingLayoutProps) {
  const user = undefined
  let messages;
  try {
    messages = (await import(`../../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Suspense fallback="...">
          <NavBar user={user} items={marketingConfig.mainNav} scroll={true} />
      </Suspense>
      <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </NextIntlClientProvider>
  );
}
