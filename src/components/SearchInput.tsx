"use client"
import React from 'react'
import { Input } from "@/components/ui/input"

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {z} from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"

const formSchema=z.object({input:z.string().min(2).max(100)})

const SearchInput = () => {
    const router=useRouter()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",  
        }
    });

    const onSubmit = (value: z.infer<typeof formSchema>) => {
        router.push(`/search/${value.input}`);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="input"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder='Search' className=' text-black' />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export default SearchInput;

