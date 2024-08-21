"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

import { MainNavItem } from "types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Icons } from "@/components/shared/icons";

import iconPurple from "../../public/images/pro-purple.svg";
import iconGreen from "../../public/images/pro-lemon.svg";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("click", closeMobileMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMobileMenuOnClickOutside);
    };
  }, [showMobileMenu]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex gap-6 md:gap-10">
      <button
        onClick={scrollToTop}
        className="flex items-center space-x-2 dark:hidden md:col-span-2"
      >
        <Image
          src={iconPurple}
          alt=""
          width={100}
          height={100}
          className="h-32 w-32"
        />
      </button>
      <button
        onClick={scrollToTop}
        className="hidden dark:flex dark:items-center dark:space-x-2 md:col-span-2"
      >
        <Image
          src={iconGreen}
          alt=""
          width={100}
          height={100}
          className="h-32 w-32"
        />
      </button>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={"#" + item.href}
              prefetch={true}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={toggleMobileMenu}
      >
        {showMobileMenu ? (
          <Icons.close />
        ) : (
          <CiMenuFries className="text-2xl" />
        )}
        {/* <span className="font-bold">Menu</span> */}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
