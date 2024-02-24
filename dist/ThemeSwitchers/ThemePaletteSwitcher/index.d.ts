/// <reference types="react" />
import { type SamplePaletteName } from "@/ThemeProvider";
export type Props = {
    labelText: string;
    value: SamplePaletteName;
    onChange?: (value: SamplePaletteName) => void;
};
declare function ThemePaletteSwitcher({ labelText, value, onChange: propsOnChange, }: Props): import("react/jsx-runtime").JSX.Element;
declare const ThemePaletteSwitcherMemo: import("react").MemoExoticComponent<typeof ThemePaletteSwitcher>;
export default ThemePaletteSwitcherMemo;
