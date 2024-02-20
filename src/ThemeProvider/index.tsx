import {
  createContext,
  memo,
  useMemo,
  type FC,
  type PropsWithChildren,
} from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { darkTheme, lightTheme } from "./themes";

export type Props = PropsWithChildren<{
  isDark: boolean;
}>;

const CustomThemeProviderContext = createContext<Pick<Props, "isDark">>({
  isDark: false,
});

const CustomThemeProvider: FC<Props> = ({ children, isDark }) => {
  const theme = useMemo(
    () => createTheme(isDark ? darkTheme : lightTheme),
    [isDark],
  );

  return (
    <CustomThemeProviderContext.Provider value={{ isDark }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </CustomThemeProviderContext.Provider>
  );
};

const CustomThemeProviderMemo = memo(CustomThemeProvider);
export default CustomThemeProviderMemo;
