import type { SpacingProps } from "@model/PaddingProps";
import { Box } from "@mui/material";

export const PaddingTop = ({
  children,
  size,
}: SpacingProps) => (
  <Box sx={{ pt: size }}>
    {children}
  </Box>
);