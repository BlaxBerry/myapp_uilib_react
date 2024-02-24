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
  isDark?: boolean;
  /** 自定义主题调色板的颜色名 */
  themePaletteName?: SamplePaletteName;
}>;

const ThemeProvider: FC<Props> = ({
  children,
  themeOptions,
  isDark = false,
  themePaletteName,
}) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          ...themeOptions,
          // 明亮or黑暗主题模式
          mode: isDark ? "dark" : "light",
          // 自定义主题色调
          ...(themePaletteName ? samplePalettes[themePaletteName] : {}),
        },
      }),
    [themeOptions, isDark, themePaletteName],
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
