"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/shared/icons"
import { MobileNav } from "@/components/layout/mobile-nav"
import { CiMenuFries } from "react-icons/ci";

import logo from '../../public/images/thru-lemon.png'
import logo2 from '../../public/images/thru-b.png'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (showMobileMenu) {
        setShowMobileMenu(false)
      }
    }

    document.addEventListener("click", closeMobileMenuOnClickOutside)

    return () => {
      document.removeEventListener("click", closeMobileMenuOnClickOutside)
    }
  }, [showMobileMenu])

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden md:flex items-center space-x-2 dark:hidden">
    <Image
    src={logo2}
    alt=""
    width={100}
    height={100}
    />
</Link>
<Link href="/" className="hidden dark:md:flex dark:items-center dark:space-x-2">
    <Image
    src={logo}
    alt=""
    width={100}
    height={100}
    />
</Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={"#"+item.href}
              prefetch={true}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
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
        {showMobileMenu ? <Icons.close /> : <CiMenuFries className="text-2xl"/>}
        {/* <span className="font-bold">Menu</span> */}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}
