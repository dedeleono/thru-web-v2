"use client";

import Link from "next/link";
import { MainNavItem } from "@/types";
import { User } from "next-auth";

import { cn } from "@/lib/utils";
import useScroll from "@/hooks/use-scroll";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { Button, buttonVariants } from "@/components/ui/button";

import { Icons } from "../shared/icons";
import { MainNav } from "./main-nav";
import { UserAccountNav } from "./user-account-nav";
import { Badge } from "@/components/ui/badge"
import { LanguageSwitcher } from "./language-switcher";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const router = useRouter();
  const t = useTranslations("navbar");

  const itemss: MainNavItem[] = [
    {
      title: t("links.whyUs"),
      href: "about",
    },
    {
      title: t("links.products"),
      href: "products",
    },
    {
      title: t("links.pricing"),
      href: "pricing",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-[60px] items-center justify-between py-4">
        <MainNav items={itemss}>{children}</MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}
          <LanguageSwitcher />

          {/* {!user ? (
            <Link
              href="/login"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  rounded: "full",
                }),
                "px-4",
              )}
            >
              Login Page
            </Link>
          ) : null} */}

          
            <Button
              className="gap-2 px-4"
              disabled={true}
              variant="default"
              size="sm"
              rounded="full"
              onClick={()=>router.push("https://dashboard.thru-ticket.com")}
            >
              <span>{t("buttons.signUp")}</span>
              <Icons.arrowRight className="size-4" />
            </Button>
          
        </div>
      </div>
    </header>
  );
}
