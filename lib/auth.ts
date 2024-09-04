"use server";

import { cookies } from "next/headers";
import { ILoginPayload } from "@/types/authTypes";
import prisma from "./db";

export const login = async (payload: ILoginPayload) => {
	// Login code here
	console.log("payload", payload);
	const user = await prisma.user.findFirst({
		where: {
			name: payload.username,
			password: payload.password,
		},
	});
	if (!user) {
		throw new Error("Invalid username or password");
	}
	cookies().set("username", user?.name, { httpOnly: true });
	cookies().set("role", user?.role, { httpOnly: true });
	return "/";
};

export const logout = async () => {
	cookies().delete("username");
	cookies().delete("role");
};

export const getSession = async () => {
	const username = cookies().get("username");
	const role = cookies().get("role");
	if (!username || !role) {
		return null;
	}
	return { username: username.value, role: role.value };
};
