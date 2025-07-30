import type { PaddingProps } from "@model/PaddingProps";
import { Box } from "@mui/material";

export const PaddingTop = ({
  children,
  size,
}: PaddingProps) => (
  <Box sx={{ pt: size }}>
    {children}
  </Box>
);