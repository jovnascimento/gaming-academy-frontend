import React from "react";

import { render } from "@testing-library/react";

import { AppContextProvider, AppThemeProvider } from "../shared/contexts";
import { BrowserRouter } from "react-router-dom";

interface WrapStyledProps {
  children: any;
}

const WrapStyled = (props: WrapStyledProps) => {
  const { children } = props;

  return (
    <AppContextProvider>
      <AppThemeProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </AppThemeProvider>
    </AppContextProvider>
  );
};

export const renderWithProviders = (
  component: React.ReactElement,
  options?: any
) => {
  return render(component, { wrapper: WrapStyled, ...options });
};
