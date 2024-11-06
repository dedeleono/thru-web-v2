"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
    <div className="w-full rounded-lg bg-white p-2">
      <div className="flex w-full items-center justify-center">
        <Button
          type="submit"
          onClick={() => {
            router.push("https://calendly.com/thru-talk/demo");
          }}
          className="flex w-full flex-col items-center justify-center gap-3 rounded-lg bg-zinc-800 text-white transition-transform active:scale-95 active:bg-zinc-900 sm:flex"
        >
          <p className="text-sm">Request demo</p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10"
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
