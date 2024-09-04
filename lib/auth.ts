"use server";

import { cookies } from "next/headers";
import {
	ILoginPayload,
	ILoginResponse,
	ILoginTokenResponse,
} from "@/types/authTypes";
import { redirectUrls } from "@/utils/constants";

export const login = async (payload: ILoginPayload) => {
	// Login code here
};

export const logout = async () => {
	// Logout code here
};
