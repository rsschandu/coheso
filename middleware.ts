import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getSession } from "./lib/auth";
import { allUrls } from "./utils/constants";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const publicPaths = ["/login", "/not-authorized", "/logo.png", "/logout"];
	const isPublicPath = publicPaths.includes(path);

	if (isPublicPath) {
		return NextResponse.next();
	}
	const session = await getSession();
	if (!session) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}
	const { role } = session;
	const allowedUrls = allUrls.find((url) => url.role === role)?.allowedUrls;
	const defaultUrl = allUrls.find((url) => url.role === role)?.defaultUrl;
	const isAuthorized =
		(allowedUrls && allowedUrls.find((url) => path.startsWith(url))) ||
		path === "/";
	if (!isAuthorized) {
		return NextResponse.redirect(new URL("/not-authorized", request.nextUrl));
	}
	// const isAllowed = path.startsWith(accessableUrls);

	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
