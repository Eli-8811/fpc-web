import type { SnackbarSeverity } from '@model/SnackbarSeverity';

export interface SnackbarProps {
  open: boolean;
  message: string;
  severity?: SnackbarSeverity;
  autoHideDuration?: number;
  onClose: (event?: React.SyntheticEvent | Event) => void;
  onUndo?: () => void;
}