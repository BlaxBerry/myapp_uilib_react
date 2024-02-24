import { type PropsWithChildren } from "react";
import { type ThemeOptions } from "@mui/material/styles";
import { type SamplePaletteName } from "../themes";
export type Props = PropsWithChildren<{
    themeOptions?: ThemeOptions;
    /** 是否为黑暗模式 */
    isDark?: boolean;
    /** 自定义主题调色板的颜色名 */
    themePaletteName?: SamplePaletteName;
}>;
declare const ThemeProviderMemo: import("react").NamedExoticComponent<Props>;
export default ThemeProviderMemo;
