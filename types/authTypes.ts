export interface ILoginPayload {
	username: string;
	password: string;
}

export interface IUser {
	id: string;
	username: string;
	role: string;
}

export interface ILoginResponse {
	message?: string;
	userId: string;
	username: string;
	role: string;
}

export interface ILoginTokenResponse {
	accessToken: string;
	refreshToken: string;
}
