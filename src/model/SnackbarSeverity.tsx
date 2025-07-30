export const SnackbarSeverity = {
  Success: 'success',
  Error: 'error',
  Warning: 'warning',
  Info: 'info',
} as const;

export type SnackbarSeverity = typeof SnackbarSeverity[keyof typeof SnackbarSeverity];
