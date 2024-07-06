import { Navbar, Footer } from "@/components";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box component="main" flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default HomeLayout;
