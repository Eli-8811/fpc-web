import { defineConfig } from 'vite';
import { baseConfig } from './vite.base';

export default defineConfig({
  ...baseConfig,
  define: {
    ...baseConfig.define,
    __APP_ENV__: JSON.stringify('prod'),
  },
  server: {
    port: 5173
  },
});