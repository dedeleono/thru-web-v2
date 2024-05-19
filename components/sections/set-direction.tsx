"use client";

import Image from "next/image";
import { FaCloudArrowUp, FaLock, FaServer } from "react-icons/fa6";
import { SiGoogledataflow } from "react-icons/si";
import { TbDatabaseImport } from "react-icons/tb";
import { BsFillTicketFill } from "react-icons/bs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Separator } from "@/components/ui/separator"

import code from "../../public/images/website-example.svg"
import dash from "../../public/images/dash.png"


const features = [
  {
    name: "Real Time Updated Data",
    description:
      "for you to make the best decisions for your business.",
    icon: FaCloudArrowUp,
  },
  {
    name: "Your own ticketing platform",
    description:
      "to provide the best experience to your clients.",
    icon: BsFillTicketFill,
  },
  {
    name: "Secured with the latest encryption standards",
    description:
      "so you don't have to worry about yours our your customers data.",
    icon: FaLock,
  },
  // {
  //   name: "Available Support",
  //   description:
  //     "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //   icon: FaServer,
  // },
];

const features2 = [
  {
    name: "Immutable and transparent data",
    description:
      "100% of the time for you to make the best decisions for your business.",
    icon: SiGoogledataflow,
  },
  {
    name: "Scalable and reliable",
    description:
      "with a modular architecture that will adapt to your needs.",
    icon: FaServer,
  },
  {
    name: "Secondary Marketplace Integration",
    description:
      "to allow your users to trade their tickets with other users; and keep record of all sales.",
    icon: BsFillTicketFill,
  },
];

export const SetDirection = () => {
  return (
    <>
    <Separator />
    <div id='products' className="pt-24 text-center">
      <Tabs defaultValue="SaaS" className="w-auto">
      <div className="mx-auto flex w-full flex-col gap-4 pb-12">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Our Products
        </h2>
        
      </div>
      <TabsList>
        <TabsTrigger value="SaaS">Thru Experience</TabsTrigger>
        <TabsTrigger value="API">Thru Access</TabsTrigger>
      </TabsList>
      <TabsContent value="SaaS">
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 md:mx-0 md:max-w-none md:grid-cols-2">
              <div className="md:pr-8 md:pt-4">
                <div className="px-3 lg:max-w-lg">
                  <h2 className="text-gradient_indigo-purple text-base font-semibold leading-7">
                    Provide Better Experiences
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl ">
                    Designed to cover all your needs
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  Use your own brand & identity to give your audience a personalized experience.
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
                src={dash}
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="API">
      <div className="overflow-hidden  py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 md:mx-0 md:max-w-none md:grid-cols-2">
              <div className="md:pr-8 md:pt-4">
                <div className="px-3 lg:max-w-lg">
                  <h2 className="text-gradient_indigo-purple text-base font-semibold leading-7 ">
                    Deploy faster
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
                    A powerful workflow
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  An API that integrates seamlessly with your existing system.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none ">
                    {features2.map((feature) => (
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
                src={code}
                alt="code"
                className="w-[48rem] sm:w-[57rem] lg:-ml-0 md:-ml-4 rounded-xl ring-1 ring-gray-400/10 shadow-xl opacity-50"
                width={2432}
                height={1442}
                loading="lazy"
                onLoadingComplete={(img) => img.classList.remove("opacity-50")}
              />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
    </div>
    </>
  );
};
