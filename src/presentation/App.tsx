import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navbar } from "./shared/components";
import { AppThemeProvider, AppContextProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppContextProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </AppContextProvider>
  );
};
