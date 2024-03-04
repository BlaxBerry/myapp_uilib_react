import { type PropsWithChildren } from "react";
import type { SxProps } from "@mui/material/styles";
export declare const APP_SIDE_MENU_WIDTH = 200;
export type Props = PropsWithChildren<{
    /**
     * 固定高度
     * @default `calc(100vh - 50px - 10%)`
     */
    height?: number | string;
    /**
     * 固定宽度
     * @default 200
     */
    width?: number | string;
    sx?: SxProps;
}>;
declare const AppSideMenuMemo: import("react").NamedExoticComponent<Props>;
export default AppSideMenuMemo;
