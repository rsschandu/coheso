"use client";
import { logout } from "@/lib/auth";
import React, { use, useEffect } from "react";

const Page = () => {
	const handleLogout = async () => {
		await logout();
		window.location.href = "/login";
	};
	useEffect(() => {
		handleLogout();
	}, []);
	return <div>page</div>;
};

export default Page;
