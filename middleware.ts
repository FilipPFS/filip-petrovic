export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/projects/create", "/messages", "/projects/:path*/update"],
};
