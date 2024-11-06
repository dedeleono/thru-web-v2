"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export function HeroContent() {
  const t = useTranslations("Hero");

  return (
    <>
      <Link
        href="https://twitter.com/thru_tech"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
          "px-4",
        )}
        target="_blank"
      >
        {t("x")}{" "} <Icons.twitter className="ml-2 size-3.5" />
      </Link>

      <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
        {t("title.main")}{" "}
        <span className="text-gradient_indigo-purple font-extrabold">
          {t("title.gradient")}
        </span>
      </h1>

      <p className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {t("description")}
      </p>

      <div className="flex justify-center space-x-2 md:space-x-4">
        <Link
          href="#pricing"
          prefetch={true}
          className={cn(
            buttonVariants({ size: "lg", rounded: "full" }),
            "gap-2",
          )}
        >
          <span>{t("button.pricing")}</span>
          <Icons.arrowRight className="size-4" />
        </Link>
        <Link
          href="https://calendly.com/thru-talk/demo"
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
              rounded: "full",
            }),
            "px-5",
          )}
        >
          {t("button.bookDemo")}
        </Link>
      </div>
    </>
  );
}
