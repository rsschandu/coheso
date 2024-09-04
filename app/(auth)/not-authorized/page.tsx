import { Button } from "@/components/ui/button";

import { getSession } from "@/lib/auth";
import { allUrls } from "@/utils/constants";
import { LockIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotAuthorized = async () => {
	const session = await getSession();

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-gray-100 px-4 dark:bg-gray-900">
			<div className="space-y-4 text-center">
				<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
					Oops, Access Denied
				</h1>
				<p className="max-w-[480px] text-gray-500 dark:text-gray-400 md:text-xl">
					It seems you don&apos;t have the necessary permissions to view this
					page. Let&apos;s get you back on track.
				</p>
			</div>
			<div className="flex flex-col gap-4 sm:flex-row">
				<Link
					className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
					href={
						allUrls.find((url) => url.role === session?.role)?.defaultUrl ||
						"/login"
					}
				>
					Take me home
				</Link>
				<Button size="sm" variant="outline">
					Contact Support
				</Button>
			</div>
			<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
				<LockIcon className="h-4 w-4" />
				<span>This page is restricted</span>
			</div>
		</div>
	);
};

export default NotAuthorized;
