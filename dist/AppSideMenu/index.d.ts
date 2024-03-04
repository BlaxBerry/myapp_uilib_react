import { type PropsWithChildren } from "react";
import type { SxProps } from "@mui/material/styles";
export declare const APP_SIDE_MENU_WIDTH = 200;
export type Props = PropsWithChildren<{
    /**
     * 固定高度
     * @default 50
     */
    height: number;
    width?: number;
    sx?: SxProps;
}>;
declare const AppSideMenuBarMemo: import("react").NamedExoticComponent<Props>;
export default AppSideMenuBarMemo;
