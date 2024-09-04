import prisma from "@/lib/db";
import RequestFormsTable from "./request-forms-table";
import CreateRequestFormModal from "./create-request-form-modal";

export default async function RequestForms() {
	const fetchRequestForms = async () => {
		const requestForms = await prisma.requestForm.findMany();
		if (!requestForms) {
			return [];
		}
		return requestForms;
	};

	const requestForms = await fetchRequestForms();

	return (
		<div className="w-full h-full p-6">
			<div className="w-full flex justify-end">
				<CreateRequestFormModal />
			</div>
			<RequestFormsTable requestForms={requestForms} />
		</div>
	);
}
