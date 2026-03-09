// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

const robotsPublic = `
User-agent: *
Allow: /
Sitemap: https://www.gravocom.com.mx/sitemap-index.xml
`.trim();

const robotsPrivate = `
User-agent: *
Disallow: /
`.trim();

export const GET: APIRoute = ({ site }) => {
  // Verificamos si estamos en producción real
  const isProd = process.env.PUBLIC_ENV === 'development';
  
  return new Response(isProd ? robotsPublic : robotsPrivate, {
    headers: { 'Content-Type': 'text/plain' },
  });
};