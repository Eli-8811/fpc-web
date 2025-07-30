import type { CenterProps } from '@model/CenterProps';
import { Box } from '@mui/material';
import React from 'react';

const Center: React.FC<CenterProps> = ({ children, sx, ...rest }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Center;