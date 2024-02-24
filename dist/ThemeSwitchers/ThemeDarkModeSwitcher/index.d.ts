/// <reference types="react" />
export type Props = {
    labelText: string;
    value: boolean;
    onChange?: (value: boolean) => void;
};
declare function ThemeDarkModeSwitcher({ labelText, value, onChange: propsOnChange, }: Props): import("react/jsx-runtime").JSX.Element;
declare const ThemeDarkModeSwitcherMemo: import("react").MemoExoticComponent<typeof ThemeDarkModeSwitcher>;
export default ThemeDarkModeSwitcherMemo;
