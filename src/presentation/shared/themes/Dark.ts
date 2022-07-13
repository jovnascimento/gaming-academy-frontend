import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#A66EF7",
      dark: "#893DF5",
      light: "#C49EFA",
      contrastText: "#fdfdfd",
    },
    secondary: {
      main: "#0C0E0D",
      dark: "#020303",
      light: "#242926",
      contrastText: "#dddddd",
    },
    background: {
      default: "#181B19",
      paper: "#181818",
    },
    text: {
      primary: "#fdfdfd",
      secondary: "#fdfdfd",
      disabled: "#cccccc",
    },
  },
  shape: {
    borderRadius: 50,
  },
  typography: {
    allVariants: {
      color: "#ffffff",
    },
  },
});
