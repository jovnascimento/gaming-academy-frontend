import React, { createContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { DarkTheme } from "./../themes";
import { Box } from "@mui/system";

interface IThemeContextData {
    themeName: 'dark';
}

const ThemeContext = createContext ({} as IThemeContextData);

export const AppThemeProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [themeName] = useState<'dark'>('dark');

    const theme = useMemo(() => {
        return DarkTheme;
    }, []);

    return(
        <ThemeContext.Provider value={{ themeName }}>
            <ThemeProvider theme={DarkTheme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}