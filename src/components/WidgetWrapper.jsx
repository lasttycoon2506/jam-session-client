import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";

const WidgetWrapper = ({ children }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: theme.palette.primary.light,
          boxShadow: `1px 1px 5px ${theme.palette.neutral.dark},-1px -1px 5px ${theme.palette.neutral.main}`,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default WidgetWrapper;
