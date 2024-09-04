"use client";
import React from "react";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
} from "@/components/ui/animated-modal";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { IRequestFormField } from "@/types/requestFormTypes";

// export interface IRequestForm {
// 	id: number;
// 	title: string;
// 	description: string;
// 	status: string;
// 	createdAt: Date;
// 	updatedAt: Date;
// 	userId: number;
// 	requestFormFields: IRequestFormField[];
// }

const FormSchema = z.object({
	title: z.string().min(1, "Please enter a title."),
	description: z.string().min(1, "Please enter a description."),
	status: z.string().min(1, "Please enter a status."),
	userId: z.number(),
	requestFormFields: z.array(
		z.object({
			id: z.number(),
			label: z.string(),
			type: z.string(),
			required: z.boolean(),
			placeholder: z.string(),
			options: z.string(),
			requestFormId: z.number(),
		})
	),
});

export default function CreateRequestFormModal() {
	// const form = useForm<z.infer<typeof FormSchema>>({
	// 	resolver: zodResolver(FormSchema),
	// 	defaultValues: {
	// 		username: "",
	// 		password: "",
	// 	},
	// });

	const [formFields, setFormFields] = React.useState<IRequestFormField[]>([]);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: "",
			description: "",
			status: "",
			userId: 0,
			requestFormFields: [],
		},
	});

	async function onSubmit(values: z.infer<typeof FormSchema>) {
		try {
		} catch (error: any) {
			toast({
				title:
					error?.response?.data?.message || "There was an error logging in",
			});
		}
	}
	return (
		<Modal>
			<ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
				<span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
					Create New RequestForm
				</span>
			</ModalTrigger>
			<ModalBody>
				<ModalContent>
					<h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
						Create a new RequestForm
					</h4>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<div className=" lg:grid lg:grid-cols-2 gap-3 pb-4">
								<FormField
									control={form.control}
									name="title"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Title</FormLabel>
											<FormControl>
												<Input placeholder="title" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="description"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Description</FormLabel>
											<FormControl>
												<Input placeholder="description" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="status"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Status</FormLabel>
											<FormControl>
												<Input placeholder="status" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							{/* <div className="flex w-full items-center justify-around">
                                <p>
                                    Form Fields
                                </p>
                                <div className="flex w-full">
                                    <Input type="text" placeholder="Label" />
                                    <Input type="text" placeholder="Type" />
                                    <Input type="text" placeholder="Required" />
                                    <Input type="text" placeholder="Placeholder" />
                                    <Input type="text" placeholder="Options" />
                                    <Button onClick={() => {
                                        setFormFields([...formFields, {
                                            id: formFields.length + 1,
                                            label: "",
                                            type: "",
                                            required: false,
                                            placeholder: "",
                                            options: "",
                                            requestFormId: 0,
                                        }])
                                    }}>Add</Button>
                                </div>
                            </div> */}
							<Button type="submit">Create</Button>
						</form>
					</Form>
				</ModalContent>
			</ModalBody>
		</Modal>
	);
}
