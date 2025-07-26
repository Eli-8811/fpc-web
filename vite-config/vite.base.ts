import react from '@vitejs/plugin-react';

export const baseConfig = {
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
  },
};