import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

import logo2 from "../../public/images/green_variation.png";
import logo from "../../public/images/lemon_variacion.png";
import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container grid grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:grid-cols-5">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <span className="text-sm font-medium text-foreground">
              {section.title}
            </span>
            <ul className="mt-4 list-inside space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col  items-end md:col-span-2">
          <Link
            href="/"
            className="flex items-center space-x-2 dark:hidden "
          >
            <Image src={logo2} alt="" width={200} height={200} />
          </Link>
          <Link
            href="/"
            className="hidden dark:flex dark:items-center dark:space-x-2 "
          >
            <Image src={logo} alt="" width={200} height={200} />
          </Link>
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container flex items-center justify-between">
          {/* <span className="text-muted-foreground text-sm">
            Copyright &copy; 2024. All rights reserved.
          </span> */}
          <p className="text-left text-sm text-muted-foreground">
            Copyright Ⓒ 2024 THRU. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.gitHub className="size-5" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
