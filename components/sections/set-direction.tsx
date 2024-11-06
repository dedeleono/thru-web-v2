"use client";

import Image from "next/image";
import { FaCloudArrowUp, FaLock, FaServer } from "react-icons/fa6";
import { SiGoogledataflow } from "react-icons/si";
import { BsFillTicketFill } from "react-icons/bs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Separator } from "@/components/ui/separator"

import code from "../../public/images/code.png"
import dash from "../../public/images/dash.png"
import dash2 from "../../public/images/dashboard.png"

import { useTranslations } from "next-intl";

const features2 = [
  {
    name: "Immutable Access Records",
    description:
      "Track and verify every access point interaction with complete transparency.",
    icon: SiGoogledataflow,
  },
  {
    name: "Scalable Infrastructure",
    description:
      "Handle millions of concurrent verifications across multiple locations.",
    icon: FaServer,
  },
  {
    name: "Analytics & Insights",
    description:
      "Understand user behavior and preferences across all access points.",
    icon: BsFillTicketFill,
  },
];

export const SetDirection = () => {

  const t = useTranslations("Product");

  const features = [
    {
      name: t("features.feature1.title"),
      description: t("features.feature1.description"),
      icon: FaCloudArrowUp,
    },
    {
      name: t("features.feature2.title"),
      description: t("features.feature2.description"),
      icon: BsFillTicketFill,
    },
    {
      name: t("features.feature3.title"),
      description: t("features.feature3.description"),
      icon: FaLock,
    },
  ];

  return (
    <>
      <Separator />
      <div id="products" className=" text-center">
        
        <div className="overflow-hidden py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 md:mx-0 md:max-w-none md:grid-cols-2">
              <div className="md:pr-8 md:pt-4">
                <div className="px-3 lg:max-w-lg">
                  <h2 className="text-gradient_indigo-purple text-base font-semibold leading-7">
                    {t("catchphrase")}
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl ">
                    {t("title")}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                    {t("description")}
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900 dark:text-[#E8FFC9]">
                          <feature.icon
                            className="absolute left-1 top-1 size-5 text-black dark:text-white"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <Image
                src={dash2}
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
