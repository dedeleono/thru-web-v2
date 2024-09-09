import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(1, {
    message: "Please enter a message.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full w-full items-end gap-2 rounded-lg bg-white p-4"
      >
        <div className="w-full flex flex-col gap-2">
          <FormLabel className="text-sm font-light italic" htmlFor="message">
            what's your email?
          </FormLabel>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center rounded-md bg-zinc-200">
                    <Input
                      {...field}
                      className="h-10 min-w-0 flex-1 bg-transparent px-4 outline-transparent placeholder:text-zinc-400"
                      placeholder="Enter your email"
                    />
                    {/* <button className="absolute inset-y-1.5 right-1.5 flex items-center justify-center rounded-md bg-zinc-800 px-2 active:scale-95 active:bg-zinc-900 sm:hidden">
                      <div className="h-6 w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#ffffff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                    </button> */}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          
        </div>
        <div className=" flex h-full min-h-full w-1/2 items-center justify-center">
          <Button
            type="submit"
            className="h-full w-full flex-col items-center justify-center gap-3 rounded-lg bg-zinc-800 text-white transition-transform active:scale-95 active:bg-zinc-900 sm:flex"
          >
            <p className="text-sm">Request demo</p>
            <div className="h-10 w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18.5 8.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
                <path d="M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2"></path>
                <path d="M17 15v-1"></path>
              </svg>
            </div>
          </Button>
        </div>
      </form>
    </Form>
  );
}

// export default function ContactForm() {
//   return (
//     <form>
//       <div className="h-full w-full rounded-lg bg-white p-4">
//         <div className="mb-1 sm:mb-2 md:mb-3">
//           <div className="sm:text-bold text-sm font-bold">Your Email</div>
//         </div>
//         <div className="relative flex items-center rounded-md bg-zinc-200">
//           <input
//             className="h-10 min-w-0 flex-1 bg-transparent px-4 outline-transparent placeholder:text-zinc-400"
//             placeholder="Enter your email"
//           />
//           <button className="absolute inset-y-1.5 right-1.5 flex items-center justify-center rounded-md bg-zinc-800 px-2 active:scale-95 active:bg-zinc-900 sm:hidden">
//             <div className="h-6 w-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="#ffffff"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                 <path d="M18.5 8.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
//                 <path d="M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2"></path>
//                 <path d="M17 15v-1"></path>
//               </svg>
//             </div>
//           </button>
//         </div>
//       </div>
//       <button type="submit" className="hidden w-40 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-800 text-white transition-transform active:scale-95 active:bg-zinc-900 sm:flex">
//         <p className="text-sm">Request demo</p>
//         <div className="h-10 w-10 items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="#ffffff"
//             fill="none"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           >
//             <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//             <path d="M18.5 8.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
//             <path d="M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2"></path>
//             <path d="M17 15v-1"></path>
//           </svg>
//         </div>
//       </button>
//     </form>
//   );
// }
