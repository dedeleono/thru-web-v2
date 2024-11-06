"use client";

// import Discord from './icons/discord'
import bg from "../../public/images/10.jpg";
import Image from "next/image";
import ContactForm from "../contact-form";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Contact = () => {
  const t = useTranslations("common");
  const router = useRouter();

  return (
    <section className="py-8 text-zinc-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-7">
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl md:h-72">
          <div className="absolute inset-0 z-10 p-4 sm:p-6 md:px-12">
            <div className="flex h-full flex-col items-center justify-center gap-6 md:flex-row md:items-center md:gap-8">
              {/* Text content */}
              <div className="w-full min-w-0 flex-1 text-center md:text-left">
                <h2 className="mb-2 text-2xl font-bold leading-tight text-white sm:mb-4 sm:text-4xl lg:text-5xl">
                  {t("lets")}
                </h2>
                <p className="max-w-2xl text-base text-zinc-100 sm:text-lg md:text-xl">
                  {t("discover")}
                </p>
              </div>

              {/* Button container */}
              <div className="w-full max-w-[180px] rounded-xl bg-white/80 p-2 backdrop-blur-sm sm:max-w-[200px] md:w-[220px] md:p-3">
                <Button
                  type="submit"
                  onClick={() => {
                    router.push("https://calendly.com/thru-talk/demo");
                  }}
                  className="flex aspect-square h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-zinc-800 p-3 text-white transition-all hover:bg-zinc-700 hover:shadow-lg active:scale-95 active:bg-zinc-900 sm:gap-3 sm:p-5"
                >
                  <p className="text-sm font-medium sm:text-base">
                    {t("bookDemo")}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 sm:h-8 sm:w-8"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18.5 8.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
                    <path d="M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M17 15v-1"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <Image
            alt="cta-background"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="absolute inset-0 h-full w-full object-cover object-center md:rotate-180"
            sizes="100vw"
            width={100}
            height={100}
            src={bg.src}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
