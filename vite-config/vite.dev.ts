import { defineConfig } from 'vite';
import { baseConfig } from './vite.base';

export default defineConfig({
  ...baseConfig,
  define: {
    ...baseConfig.define,
    __APP_ENV__: JSON.stringify('development')
  },
  server: {
    port: 3000,
    open: true
  }
});