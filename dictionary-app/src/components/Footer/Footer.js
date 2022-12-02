import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box mt={8}>
      <hr />
      <Container>
        <Box py={2} align="center">
        © {new Date().getFullYear()} | All rights reserved
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
