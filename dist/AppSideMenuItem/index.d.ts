import { type ReactNode } from "react";
export type Props = {
    isActive: boolean;
    icon?: ReactNode;
    label: string;
    onClick: () => void;
};
declare const AppSideMenuItemMemo: import("react").NamedExoticComponent<Props>;
export default AppSideMenuItemMemo;
