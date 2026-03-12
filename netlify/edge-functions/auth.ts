// netlify/edge-functions/auth.ts
import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const auth = request.headers.get("Authorization");
  
  // Definimos las credenciales (admin:gravocom2026)
  const user = "admin";
  const pass = "gravocom2026";
  const expectedAuth = `Basic ${btoa(`${user}:${pass}`)}`;

  if (auth !== expectedAuth) {
    return new Response("Acceso Restringido - Gravocom Pruebas", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Acceso restringido"',
      },
    });
  }

  return context.next();
};