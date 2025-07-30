import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import path from 'path';
import { getConfig } from './vite-config';

export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  try {
    const configModule = await getConfig(mode);

    console.info(`[VITE] Cargando configuración para mode="${mode}"`);

    const baseConfig: UserConfig = {
      resolve: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@model': path.resolve(__dirname, 'src/model'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@services': path.resolve(__dirname, 'src/services'),
          '@store': path.resolve(__dirname, 'src/store'),
          '@themes': path.resolve(__dirname, 'src/themes'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
      ...configModule.default,
    };

    return baseConfig;
  } catch (error) {
    console.error(`[VITE] Error al cargar configuración para mode="${mode}":`, error);
    throw error;
  }
});