'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link";
import { registerUser } from "@/lib/actions/authActions"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {SigninButton} from '@/app/components/SigninButton';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input";



export function SignUpForm() {

    const formSchema = z.object({
        username: z.string({required_error: "Name is required"}).min(2, {
          message: "Username must be at least 2 characters.",
        }),
        password: z
        .string({required_error: "Password is required"})
        .min(6, "Password must be at least 6 characters ")
        .max(50, "Password must be less than 50 characters"),
        email: z.string({required_error: "Email is required"}).email("Please enter a valid email address"),
      })
    const onSubmit = async (data) => {
        try {
            const result = await registerUser(data);
            toast.success("The User Registered Successfully.");
          } catch (error) {
            toast.error("Something Went Wrong!");
            console.error(error);
          }
    }
    const form = useForm({
        resolver: zodResolver(formSchema)
    })
    return (
            <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full md:w-1/3 px-8 flex-col">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <label>Username</label>
                  <FormControl>
                    <Input placeholder="add your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <label>Email</label>
                  <FormControl>
                    <Input placeholder="add your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <label>Password</label>
                  <FormControl>
                    <Input type="password" placeholder="add your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit"  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</Button>
            <div className="flex items-center justify-center">
            <p className="text-center p-2">Already Signed in?</p>
                <SigninButton />
            </div>
          </form>
         
        </Form>

      
      )

}