import { NextResponse } from "next/server";
import { verifyJwtToken } from "./lib/auth";

const AUTH_PAGES = ["/admin-login"];

const isAuthPages =(url)=> AUTH_PAGES.some((page)=>page.startsWith(url));

export async function middleware(request) {



  const { url, nextUrl, cookies } = request;
  const { value: Token } = cookies.get("Token") || { value: null };

  const hasVerify = Token && verifyJwtToken(Token);
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if(isAuthPageRequested){
    if(!hasVerify) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/",url));
    }
    

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-login"],
};
