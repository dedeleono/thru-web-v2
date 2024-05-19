"use client";

// import Discord from './icons/discord'
import { useForm } from "@formspree/react";
import { LinkedinIcon, Loader2Icon, TwitterIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import bg from "../../public/images/10.jpg";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzgladz");
  return (
    // <section className='mx-auto mt-40 flex max-w-7xl flex-col items-center gap-20 px-5 lg:flex-row'>
    //     <div className='mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6'>
    //         <div>
    //             <h1 className='mt-4 scroll-m-20  text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
    //                 <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
    //                     Get{' '}
    //                 </span>
    //                 <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
    //                     In{' '}
    //                 </span>
    //                 <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
    //                     Touch
    //                 </span>
    //             </h1>
    //         </div>
    //         <p className='text-center text-lg text-muted-foreground lg:text-left'>
    //             <span className='hidden lg:block'>
    //                 If you have any questions, suggestions, or would like to
    //                 discuss potential collaborations, please don't hesitate
    //                 to reach out. I'd love to hear from you!
    //             </span>
    //             <span className='block lg:hidden'>
    //                 Questions, ideas, or collaborations? Reach out—I'm all
    //                 ears!
    //             </span>
    //         </p>
    //         <div className='flex justify-center lg:justify-start'>
    //             <div className='flex flex-col gap-4 lg:items-start'>
    //                 <a
    //                     href='https://twitter.com/NaderFerjani'
    //                     className='inline-flex gap-2'
    //                     target='_blank'
    //                     rel='noopener noreferrer'
    //                 >
    //                     <TwitterIcon className='h-6 w-6 text-primary' />{' '}
    //                     @NaderFerjani
    //                 </a>
    //                 <a
    //                     href='https://www.linkedin.com/in/nader-ferjani/'
    //                     className='flex items-center gap-2'
    //                     target='_blank'
    //                     rel='noopener noreferrer'
    //                 >
    //                     <LinkedinIcon className='h-6 w-6 text-primary' />{' '}
    //                     <span>nader-ferjani</span>
    //                 </a>
    //                 <span className='flex items-center gap-2'>
    //                     {/* <Discord className='h-6 w-6 fill-primary' />{' '} */}
    //                     <span>stormynight9</span>
    //                 </span>
    //             </div>
    //         </div>
    //     </div>
    //     <form
    //         onSubmit={handleSubmit}
    //         className='gradient-border relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-4 rounded-md bg-gradient-to-br from-white/5 to-transparent p-6  before:bg-gradient-to-br before:from-white/5 before:to-transparent '
    //     >
    //         <div className='flex w-full flex-col gap-1.5'>
    //             <Label
    //                 className='text-left text-muted-foreground'
    //                 htmlFor='name'
    //             >
    //                 Full name
    //             </Label>
    //             <Input
    //                 required
    //                 type='text'
    //                 id='name'
    //                 placeholder='John Doe'
    //                 name='fullname'
    //                 className='w-full'
    //             />
    //         </div>
    //         <div className='flex w-full flex-col gap-1.5'>
    //             <Label
    //                 className='text-left text-muted-foreground'
    //                 htmlFor='contact-email'
    //             >
    //                 Email
    //             </Label>
    //             <Input
    //                 required
    //                 type='email'
    //                 placeholder='john.doe@example.com'
    //                 name='contact-email'
    //                 id='contact-email'
    //                 className='w-full'
    //             />
    //         </div>
    //         <div className='grid w-full gap-1.5'>
    //             <Label
    //                 htmlFor='message'
    //                 className='text-left text-muted-foreground'
    //             >
    //                 Message
    //             </Label>
    //             <Textarea
    //                 required
    //                 placeholder='Your message here...'
    //                 id='message'
    //                 name='message'
    //             />
    //         </div>
    //         {!state.succeeded && (
    //             <Button variant={'secondary'} disabled={state.submitting}>
    //                 {state.submitting && (
    //                     <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
    //                 )}
    //                 {state.submitting && 'Sending'}
    //                 {!state.succeeded &&
    //                     !state.submitting &&
    //                     'Send message'}
    //             </Button>
    //         )}
    //         {state.succeeded && (
    //             <Button
    //                 variant={'secondary'}
    //                 className='pointer-events-none'
    //             >
    //                 Message sent!
    //             </Button>
    //         )}
    //     </form>
    // </section>
    // <section className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
    //     <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
    //     <div className="max-w-xl mx-auto text-center relative">
    //         <div className="py-4">
    //             <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
    //                 Get Unlimited Access To All Templates
    //             </h3>
    //             <p className="text-gray-300 leading-relaxed mt-3">
    //                 Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
    //             </p>
    //         </div>
    //         <div className="mt-5 items-center justify-center gap-3 sm:flex">
    //             <a
    //                 href="javascript:void()"
    //                 className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
    //             >
    //                 Try It Out
    //             </a>
    //             <a
    //                 href="javascript:void()"
    //                 className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
    //             >
    //                 Get Started
    //             </a>
    //         </div>
    //     </div>
    // </section>
    // <div>
    //   <div className="container mx-auto p-8 xl:px-0">
    //     <div className="relative mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 overflow-hidden rounded-xl bg-indigo-600 bg-gradient-to-r from-indigo-600 to-indigo-700 px-7 py-7 text-white lg:flex-nowrap lg:px-12 lg:py-12">
    //       <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
    //       <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20"></div>
    //       <div className="relative z-0 flex-grow text-center lg:text-left">
    //         <h2 className="text-3xl font-medium lg:text-3xl">
    //           Ready to try-out our product?
    //         </h2>
    //         <p className="mt-2 text-white text-opacity-80 lg:text-xl">
    //           100% Satisfaction guaranteed.
    //         </p>
    //       </div>
    //       <div className="relative w-full flex-shrink-0 text-center lg:w-auto">
    //         <a
    //           href="#"
    //           target="_blank"
    //           rel="noopener"
    //           className="mx-auto inline-block rounded-md bg-white px-7 py-3 text-center font-medium text-indigo-600 sm:text-lg lg:px-10 lg:py-5"
    //         >
    //           Start Free Trial Today
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className=" py-8 text-zinc-900">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-16">
        <div className="relative h-72 w-full overflow-hidden rounded-xl md:h-72 ">
          <div className="absolute inset-0 z-10 p-6 md:px-12">
            <div className="flex h-full flex-col items-center gap-6 md:flex-row">
              <div className="w-full min-w-0 flex-1 drop-shadow-sm">
                <h2 className="mb-2 text-3xl font-bold leading-none text-white sm:text-4xl">
                  Request a demo
                </h2>
                <p className="text-base text-zinc-100 sm:text-lg">
                  Discover all the capabilities of our platform and how it can benefit you
                </p>
              </div>
              <div className="flex w-full min-w-0 flex-1 flex-shrink-0 gap-3 rounded-lg bg-white/60 p-4 md:p-4">
                <div className="h-full w-full rounded-lg bg-white p-4">
                  <div className="mb-1 sm:mb-2 md:mb-3">
                    <div className="sm:text-bold text-sm font-bold">
                      Your Email
                    </div>
                  </div>
                  <div className="relative flex items-center rounded-md bg-zinc-200">
                    <input
                      className="h-10 min-w-0 flex-1 bg-transparent px-4 outline-transparent placeholder:text-zinc-400"
                      placeholder="Enter your email"
                    />
                    <button className="absolute inset-y-1.5 right-1.5 flex items-center justify-center rounded-md bg-zinc-800 px-2 active:scale-95 active:bg-zinc-900 sm:hidden">
                      <div className="h-6 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#ffffff"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M18.5 8.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
                          <path d="M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2"></path>
                          <path d="M17 15v-1"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <button className="hidden w-40 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-800 text-white transition-transform active:scale-95 active:bg-zinc-900 sm:flex">
                  <p className="text-sm">Request demo</p>
                  <div className="h-10 w-10 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M18.5 8.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
                      <path d="M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M17 15v-1"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <img
            alt="cta-background"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-position:center center;color:transparent absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover md:rotate-180"
            sizes="100vw"
            
            src={bg.src}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
