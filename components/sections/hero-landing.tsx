import Link from "next/link";
import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { HeroContent } from "./hero-content";

async function getGithubStars() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/mickasmt/next-saas-stripe-starter",
      {
        ...(process.env.GITHUB_OAUTH_TOKEN && {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }),
        next: { revalidate: 3600 },
      },
    );

    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return null;
  }
}

export async function HeroLanding() {
  const stars = await getGithubStars();

  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <HeroContent />
      </div>
    </section>
  );
}
