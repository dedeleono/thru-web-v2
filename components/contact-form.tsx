import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="flex size-full items-end gap-2 rounded-lg bg-white p-4"
    //   >
    //     <div className="flex w-full flex-col gap-2">
    //       <FormLabel className="text-sm font-light italic" htmlFor="email">
    //         what's your email?
    //       </FormLabel>
    //       <FormField
    //         control={form.control}
    //         name="email"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormControl>
    //               <div className="relative flex items-center rounded-md bg-zinc-200">
    //                 <Input
    //                   {...field}
    //                   className="h-10 min-w-0 flex-1 bg-transparent px-4 outline-transparent placeholder:text-zinc-400"
    //                   placeholder="Enter your email"
    //                 />
    //               </div>
    //             </FormControl>
    //           </FormItem>
    //         )}
    //       />
    //     </div>
    //     <div className="flex size-full w-1/2 items-center justify-center">
    //       <Button
    //         type="submit"
    //         className="size-full flex-col items-center justify-center gap-3 rounded-lg bg-zinc-800 text-white transition-transform active:scale-95 active:bg-zinc-900 sm:flex"
    //       >
    //         <p className="text-sm">Request demo</p>
    //         <div className="size-10 items-center justify-center">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="#ffffff"
    //             fill="none"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    //             <path d="M18.5 8.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"></path>
    //             <path d="M13 7h-8a2 2 0 0 0 -2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2v-2"></path>
    //             <path d="M17 15v-1"></path>
    //           </svg>
    //         </div>
    //       </Button>
    //     </div>
    //   </form>
    // </Form>
    <div className="bg-white p-2 rounded-lg w-full">
      <div className="flex size-full w-full items-center justify-center">
        <Button
          type="submit"
          className="size-full flex-col items-center justify-center gap-3 rounded-lg bg-zinc-800 text-white transition-transform active:scale-95 active:bg-zinc-900 sm:flex"
        >
          <p className="text-sm">Request demo</p>
          <div className="size-10 items-center justify-center">
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
    </div>
  );
}
