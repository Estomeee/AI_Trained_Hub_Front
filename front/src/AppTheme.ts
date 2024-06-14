import { createTheme } from "@mui/material";

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#292D32",
      light: "#444A51",
      dark: "#07090B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e6e6e6",
      dark: "#d6d6d6",
      light: "#f0f0f0",
      contrastText: "#000000",
    },
    text: {
      secondary: "5F5F5F",
    },
  },

  typography: {
    fontFamily: "Montserrat, Arial",
    fontSize: 12,
  },
});

export default AppTheme;
