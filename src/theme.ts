import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d81b60",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h3: {
      fontFamily: "Margarine, cursive",
    },
  },
});

export default theme;
