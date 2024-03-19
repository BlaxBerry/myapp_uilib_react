import * as React from "react";
import type { BaseListItemData } from "@/@common/Lists/BaseList";
export type ToggleTranslationButtonProps = {
    show?: boolean;
    languagesList?: Array<BaseListItemData>;
    defaultValue?: string;
    onClick?: (language: string) => void;
};
declare const ToggleTranslationButtonMemo: React.MemoExoticComponent<({ show, languagesList, defaultValue, onClick, }: ToggleTranslationButtonProps) => import("react/jsx-runtime").JSX.Element>;
export default ToggleTranslationButtonMemo;
