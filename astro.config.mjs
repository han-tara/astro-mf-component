import { defineConfig } from 'astro/config';

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import federation from '@originjs/vite-plugin-federation';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      federation({
        name: 'remote_app',
        filename: 'remoteEntry.js',
        exposes: {
          './Card': './src/components/Card.astro'
        },
        shared: ['astro']
      })
    ]
  },
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind()]
});