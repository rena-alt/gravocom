// netlify/edge-functions/auth.ts
import { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const auth = request.headers.get("Authorization");
  
  // Sustituye 'gravocom2026' por la contraseña que desees
  const expectedAuth = `Basic ${btoa("admin:gravocom2026")}`;

  if (auth !== expectedAuth) {
    return new Response("Acceso Restringido - Gravocom Pruebas", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Acceso restringido"',
      },
    });
  }

  return await context.next();
};