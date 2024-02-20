import { type FocusEventHandler, type MouseEventHandler, type PropsWithChildren, type ReactNode } from "react";
import { type ContainerProps } from "@mui/material/Container";
import type { SxProps } from "@mui/material/styles";
export type Props = PropsWithChildren<{
    /** 固定高度 */
    headerHeight: number;
    /** 容器最大宽度 ( MUI Breakpoint ) */
    headerContainerMaxWidth?: ContainerProps["maxWidth"];
    /** Logo 组件 */
    logo?: ReactNode;
    /** 标题文字/组件 */
    title?: ReactNode;
    /** 路由组 */
    navItems?: Array<AppHeaderNavItem>;
}>;
export type AppHeaderNavItem = {
    /** 文本或自定义组件 */
    item: ReactNode;
    /** 路由 URL */
    link: string;
    /** MUI SX 样式 */
    sx?: SxProps;
    /** 自定义点击事件 */
    onClick?: MouseEventHandler<HTMLLIElement>;
    /** 自定义点聚焦事件 */
    onBlur?: FocusEventHandler<HTMLLIElement>;
};
declare const AppHeaderMemo: import("react").NamedExoticComponent<Props>;
export default AppHeaderMemo;
