// astro.config.mjs
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  // En lugar de importarlo arriba, lo llamamos directamente aquí
  integrations: [(await import('@astrojs/tailwind')).default(), icon()],
});