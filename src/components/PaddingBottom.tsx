import type { SpacingProps } from "@model/PaddingProps";
import { Box } from "@mui/material";

export const PaddingBottom = ({
  children,
  size,
}: SpacingProps) => (
  <Box sx={{ p: size }}>
    {children}
  </Box>
);