"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
// import { getSession, login } from "@/lib/auth";
import Image from "next/image";

const FormSchema = z.object({
	username: z.string({
		required_error: "Please enter a username.",
	}),
	password: z.string({
		required_error: "Please enter a password.",
	}),
});

export default function LoginPage() {
	const router = useRouter();
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof FormSchema>) {
		try {
			// router.push(await login(values));
		} catch (error: any) {
			toast({
				title:
					error?.response?.data?.message || "There was an error logging in",
			});
		}
	}

	return (
		<div className="flex min-h-[100dvh] items-center justify-around bg-gray-100 px-4 dark:bg-gray-950">
			<div className="relative justify-center w-[46%] h-[350px] bg-secondary">
				<Image alt="logo" src="/logo.png" fill />
			</div>
			<div className="w-[50%] max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
				{/* Add the logo here and center it */}
				<div>
					<div className="space-y-2 text-center">
						<h1 className="text-2xl font-bold tracking-tight">Sign in</h1>
						<p className="text-gray-500 dark:text-gray-400">
							Enter your credentials to access your account.
						</p>
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input placeholder="username" {...field} />
										</FormControl>
										<FormDescription>This is your username.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="password"
												{...field}
											/>
										</FormControl>
										<FormDescription>
											Please enter your password.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Submit</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
