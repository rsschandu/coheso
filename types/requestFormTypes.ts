export interface IRequestForm {
	id: number;
	title: string;
	description: string;
	status: string;
	createdAt: Date;
	updatedAt: Date;
	userId: number;
	requestFormFields?: IRequestFormField[];
}

export interface IRequestFormField {
	id: number;
	label: string;
	type: string;
	required: boolean;
	placeholder: string;
	options: string;
	requestFormId: number;
}
