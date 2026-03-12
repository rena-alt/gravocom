// netlify/edge-functions/auth.ts
import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const auth = request.headers.get("Authorization");
  
  const user = "admin";
  const pass = "gravocom2026";
  
  const basicAuth = btoa(`${user}:${pass}`);
  const expectedAuth = `Basic ${basicAuth}`;

  if (auth !== expectedAuth) {
    return new Response("Acceso Restringido - Gravocom Pruebas", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Acceso restringido"',
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  return await context.next();
};

export const config = {
  path: "/*", 
};