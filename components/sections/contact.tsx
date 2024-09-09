"use client";

// import Discord from './icons/discord'
import bg from "../../public/images/10.jpg";
import Image from "next/image";
import ContactForm from "../contact-form";

const Contact = () => {
  
  return (

    <section className=" py-8 text-zinc-900">
      <div className="mx-auto max-w-screen-xl px-7">
        <div className="relative h-96 w-full overflow-hidden rounded-xl md:h-72 ">
          <div className="absolute inset-0 z-10 p-6 md:px-12">
            <div className="flex h-full flex-col items-center gap-6 md:flex-row">
              <div className="w-full min-w-0 flex-1 drop-shadow-sm">
                <h2 className="mb-2 text-3xl font-bold leading-none text-white sm:text-4xl">
                  Let's Connect!
                </h2>
                <p className="text-base text-zinc-100 sm:text-lg">
                  Discover all the capabilities of our platform and how it can benefit you
                </p>
              </div>
              <div className="flex w-full min-w-0 flex-1 flex-shrink-0 rounded-lg bg-white/60 p-4">
                <ContactForm/>
              </div>
            </div>
          </div>
          <Image
            alt="cta-background"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-position:center center;color:transparent absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover md:rotate-180"
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
