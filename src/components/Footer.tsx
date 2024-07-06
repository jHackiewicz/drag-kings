import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: 3, mt: "auto" }}
    >
      <Typography variant="body1" align="center">
        © Drag Kings 2024
      </Typography>
    </Box>
  );
}

export default Footer;
