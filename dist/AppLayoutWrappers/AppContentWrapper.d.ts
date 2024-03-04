import { type PropsWithChildren } from "react";
import type { Breakpoint, SxProps } from "@mui/material/styles";
export type AppContentContainerWidth = Breakpoint;
type Props = PropsWithChildren<{
    /** 容器最大宽度 ( MUI Breakpoint ) */
    containerMaxWidth?: AppContentContainerWidth;
    height?: number | string;
    sx?: SxProps;
}>;
declare const AppContentWrapperMemo: import("react").NamedExoticComponent<Props>;
export default AppContentWrapperMemo;
