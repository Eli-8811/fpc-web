export function getConfig(mode: string) {
  switch (mode) {
    case 'development':
      return import('./vite.dev');
    case 'qa':
      return import('./vite.qa');
    case 'production':
      return import('./vite.prod');
    default:
      throw new Error(`No config found for mode: ${mode}`);
  }
}