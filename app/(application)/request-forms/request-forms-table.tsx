"use client";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { IRequestForm } from "@/types/requestFormTypes";
import { useRouter } from "next/navigation";
const RequestFormsTable = (props: { requestForms: IRequestForm[] }) => {
	const router = useRouter();
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
				{props.requestForms &&
					props.requestForms.map((requestForm) => (
						<TableRow
							key={requestForm.id}
							onClick={() => {
								router.push(`/request-forms/${requestForm.id}`);
							}}
						>
							<TableCell className="font-medium">{requestForm.title}</TableCell>
							<TableCell>{requestForm.description}</TableCell>
							<TableCell>{requestForm.status}</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
};

export default RequestFormsTable;
