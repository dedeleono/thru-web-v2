"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    // Remove the current locale from the pathname if it exists
    const newPathname = pathname.replace(/^\/[a-z]{2}/, "");
    router.replace(`/${locale}${newPathname}`, { scroll: false });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="size-8 px-0">
          <Icons.languages className="size-4" />
          <span className="sr-only">{t("language.switch")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          <span className="mr-2">🇺🇸</span>
          <span>{t("language.en")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("es")}>
          <span className="mr-2">🇬🇹</span>
          <span>{t("language.es")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
