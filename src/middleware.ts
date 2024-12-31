import { auth } from "@/app/api/auth/[...nextauth]/options";
export const middleware = auth;
export const config = { matcher: ["/post/:page*", "/token-topup"] };
