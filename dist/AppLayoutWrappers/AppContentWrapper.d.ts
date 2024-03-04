import { type PropsWithChildren } from "react";
import { type ContainerProps } from "@mui/material/Container";
import type { SxProps } from "@mui/material/styles";
type Props = PropsWithChildren<{
    /** 容器最大宽度 ( MUI Breakpoint ) */
    containerMaxWidth?: ContainerProps["maxWidth"];
    height?: number;
    sx?: SxProps;
}>;
declare const AppContentWrapperMemo: import("react").NamedExoticComponent<Props>;
export default AppContentWrapperMemo;
