import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  protectedRoutes,
  publicRoutes,
} from "@/routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const isKnownRoute =
    isPublicRoute || isProtectedRoute || isAuthRoute || isApiAuthRoute;

  // If the route is not known, return a 404
  if (!isKnownRoute) {
    return;
  }

  // If it's an API auth route, we don't need to redirect
  if (isApiAuthRoute) return;

  // If it's an auth route and the user is logged in, redirect to the default login redirect
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  // If it's not a public route and the user is not logged in, redirect to the login page
  if (!isPublicRoute && !isLoggedIn) {
    // Save the current URL to redirect back to after login
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    // encode the callback URL
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    // Redirect to the login page
    return NextResponse.redirect(
      new URL(authRoutes[0] + `?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
