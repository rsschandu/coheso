"use client";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { IRequestFormField } from "@/types/requestFormTypes";
import React from "react";

const RequestFormTable = (props: {
	requestFormFields: IRequestFormField[];
}) => {
	return (
		<Table>
			<TableCaption>A list of your recent custom Request Forms.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableCell>Title</TableCell>
					<TableCell>Description</TableCell>
					<TableCell>Status</TableCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				{props.requestFormFields &&
					props.requestFormFields.map((requestFormField) => (
						<TableRow key={requestFormField.id}>
							<TableCell className="font-medium">
								{requestFormField.label}
							</TableCell>
							<TableCell>{requestFormField.placeholder}</TableCell>
							<TableCell>{requestFormField.type}</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
};

export default RequestFormTable;
