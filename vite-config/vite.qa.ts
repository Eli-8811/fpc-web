import { defineConfig } from 'vite';
import { baseConfig } from './vite.base';

export default defineConfig({
  ...baseConfig,
  define: {
    ...baseConfig.define,
    __APP_ENV__: JSON.stringify('qa'),
  },
  server: {
    port: 5173,
    open: true
  },
});