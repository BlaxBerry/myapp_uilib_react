import { memo, useMemo, type FC, type PropsWithChildren } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  type ThemeOptions,
} from "@mui/material/styles";

import { samplePalettes, type SamplePaletteName } from "../themes";

export type Props = PropsWithChildren<{
  themeOptions?: ThemeOptions;
  /** 是否为黑暗模式 */
  isDarkMode?: boolean;
  /** 自定义主题调色板的颜色名 */
  paletteName?: SamplePaletteName;
}>;

const ThemeProvider: FC<Props> = ({
  children,
  themeOptions,
  isDarkMode = false,
  paletteName,
}) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          ...themeOptions,
          // 明亮or黑暗主题模式
          mode: isDarkMode ? "dark" : "light",
          // 自定义主题色调
          ...(paletteName ? samplePalettes[paletteName] : {}),
        },
      }),
    [themeOptions, isDarkMode, paletteName],
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </MuiThemeProvider>
  );
};

const ThemeProviderMemo = memo(ThemeProvider);
export default ThemeProviderMemo;
