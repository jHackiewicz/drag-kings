import { createTheme, Theme } from "@mui/material/styles";
import { lighten } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d81b60",
      light: lighten("#d81b60", 0.9),
      dark: "#971243",
    },
    secondary: {
      main: "#9c27b0",
    },
    info: {
      main: "#d500f9",
    },
    warning: {
      main: "#ffeb3b",
    },
    error: {
      main: "#a31545",
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
