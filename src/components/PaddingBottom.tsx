import type { PaddingProps } from "@model/PaddingProps";
import { Box } from "@mui/material";

export const PaddingBottom = ({
  children,
  size,
}: PaddingProps) => (
  <Box sx={{ p: size }}>
    {children}
  </Box>
);