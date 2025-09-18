import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        backgroundColor: "#f5f5f5",
        mt: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 E-Commerce React App. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
