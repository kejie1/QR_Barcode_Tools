import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  site: 'https://qrbarcodetools.com', // 占位域名，后续可配置
});
