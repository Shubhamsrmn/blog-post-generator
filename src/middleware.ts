import { auth } from "@/app/api/auth/[...nextauth]/options";
export const middleware = auth;
export const config = { matcher: ["/users/:page*"] };
