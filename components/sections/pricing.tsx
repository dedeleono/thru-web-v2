import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section
      id="pricing"
      className="container flex flex-col  gap-6 py-8 md:max-w-[75rem] md:py-12 lg:py-24"
    >
      <div className="mx-auto flex w-full flex-col gap-4 ">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features ton handle your operations and events.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included with our platform
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Digital ID creation and
              management
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Up to 5 access points
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Real-time access tracking
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Basic analytics dashboard
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom access rules
              configuration
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Standard support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">$</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Each ticket emitted will incur a nominal fee*
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      {/* <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          Our free trial{" "}
          <strong>may include tickets for free*</strong>
        </p>
      </div> */}
    </section>
  );
}
