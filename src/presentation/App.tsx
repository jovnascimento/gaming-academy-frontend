import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navbar } from "./shared/components";
import { AppThemeProvider, AppContextProvider } from "./shared/contexts";
import { Home } from "./pages/home"

export const App = () => {
  return (
    <AppContextProvider>
      <AppThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Home />
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </AppContextProvider>
  );
};
