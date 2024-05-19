import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import { Icons } from "@/components/shared/icons"

import logo from '../../public/images/thru-lemon.png'
import logo2 from '../../public/images/thru-b.png'

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className=" flex items-center space-x-2 dark:hidden">
        <Image
        src={logo2}
        alt=""
        width={100}
        height={100}
        />
        </Link>
        <Link href="/" className="hidden dark:flex dark:items-center dark:space-x-2">
        <Image
        src={logo}
        alt=""
        width={100}
        height={100}
        />
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={"#" +item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
