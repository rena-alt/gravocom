// astro.config.mjs
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.gravocom.com.mx',
  integrations: [(await import('@astrojs/tailwind')).default(), icon()],
});