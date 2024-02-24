/// <reference types="react" />
import type { Props as AppHeaderProps } from "..";
import { type SamplePaletteName } from "../../ThemeProvider";
export type AppHeaderSettingDarkModeSwitcher = {
    /** 文本 */
    text?: string;
    /** 传入的默认值 */
    isDarkMode?: boolean;
    /** 利用回调传出的最新值 */
    onChange: (value: boolean) => void;
};
export type AppHeaderSettingPaletteColorSwitcher = {
    /** 文本 */
    text?: string;
    /** 传入的默认值 */
    paletteColorName?: SamplePaletteName;
    /** 利用回调传出的最新值 */
    onChange: (value: SamplePaletteName) => void;
};
declare const SettingsItemsMemo: import("react").NamedExoticComponent<Pick<AppHeaderProps, "settingsOptions">>;
export default SettingsItemsMemo;
