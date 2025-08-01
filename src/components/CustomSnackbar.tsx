import * as React from 'react';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import MuiSnackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import type { SnackbarProps } from '@model/SnackbarProps';
import Box from '@mui/material/Box';

const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  autoHideDuration,
  onClose,
  onUndo,
  severity
}) => {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Box sx={{ maxWidth: '90vw', minWidth: '300px', width: 'fit-content' }}>
        <Alert
          severity={severity}
          onClose={onClose}
          action={
            <>
              {onUndo && (
                <Button color="inherit" size="small" onClick={onUndo}>
                  UNDO
                </Button>
              )}
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={onClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        >
          {message}
        </Alert>
      </Box>
    </MuiSnackbar>

  );
};

export default CustomSnackbar;
