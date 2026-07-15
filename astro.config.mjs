// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://gravocom.com.mx',
  integrations: [tailwind(), sitemap(), icon()],
  
  redirects: {
    '/productos/mzf-30n': '/productos/mzf-30c',
    '/productos/mzf-50n': '/productos/mzf-30n_50n',
    '/Fpb20e-fibra20w': '/fpb20-fibra20w'
  }
});