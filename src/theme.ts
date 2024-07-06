import { createTheme, Theme } from "@mui/material/styles";
import { lighten } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d81b60",
      light: lighten("#d81b60", 0.9),
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
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.primary.light,
        }),
      },
    },
  },
});

export default theme;
