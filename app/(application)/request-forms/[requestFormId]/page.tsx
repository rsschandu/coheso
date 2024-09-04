import prisma from "@/lib/db";
import React from "react";

export default async function RequestForm({
	params,
}: {
	params: { requestFormId: string };
}) {
	const requestFormId = params.requestFormId;
	const fetchRequestForm = async () => {
		const requestForm = await prisma.requestForm.findUnique({
			where: {
				id: parseInt(requestFormId),
			},
		});
		if (!requestForm) {
			return null;
		}
		return requestForm;
	};

	const requestForm = await fetchRequestForm();

	if (!requestForm) {
		return <div>Request form not found</div>;
	}

	return (
		<div className="w-full h-full p-6">
			<h1 className="text-2xl font-semibold">Request Form</h1>
			<div className="mt-4">
				<p>
					<strong>Request Form ID:</strong> {requestForm.id}
				</p>
				<p>
					<strong>Request Form Name:</strong> {requestForm.title}
				</p>
				<p>
					<strong>Request Form Description:</strong> {requestForm.description}
				</p>
			</div>
		</div>
	);
}
