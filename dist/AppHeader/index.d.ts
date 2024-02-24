import { type FocusEventHandler, type MouseEventHandler, type PropsWithChildren, type ReactNode } from "react";
import { type AppBarProps } from "@mui/material/AppBar";
import { type ContainerProps } from "@mui/material/Container";
import { type SxProps } from "@mui/material/styles";
import { type AppHeaderSocialLinkIcon } from "./widgets";
export type Props = PropsWithChildren<{
    /**
     * 固定高度
     * @default 50
     */
    headerHeight?: number;
    /** 容器最大宽度 ( MUI Breakpoint ) */
    headerContainerMaxWidth?: ContainerProps["maxWidth"];
    /** Logo 图片的URL */
    logoURL?: string;
    /** 标题文字/组件 */
    title?: ReactNode;
    /** Logo、标题的点击事件 */
    onClickTitle?: () => void;
    /** 路由组 */
    navItems?: Array<AppHeaderNavItem>;
    navItemsOptionTitle?: string;
    /** 外部链接组 */
    socialLinks?: Array<AppHeaderSocialLinkItem>;
    /** 版权信息 */
    copyright?: string;
    /** 设置选项组 */
    settingsOptions?: AppHeaderSettingsOptions;
    settingsOptionTitle?: string;
    /** MUI AppBarProps */
    AppBarProps?: AppBarProps;
    /** MUI SxProps */
    sx?: SxProps;
}>;
export type AppHeaderNavItem = {
    /** 文本 */
    text: string;
    /** 额外文本 */
    extraText?: string;
    /** 文本前置图标 */
    icon?: ReactNode;
    /** 是否已经被选中 */
    selected?: boolean;
    /** 是否禁止被选中 */
    disabled?: boolean;
    /** MUI SX 样式 */
    sx?: SxProps;
    /** 自定义点击事件 */
    onClick?: MouseEventHandler<HTMLLIElement>;
    /** 自定义点聚焦事件 */
    onBlur?: FocusEventHandler<HTMLLIElement>;
};
export type AppHeaderSocialLinkItem = {
    /** 外部链接图标 */
    icon: AppHeaderSocialLinkIcon;
    /** 外部链接URL */
    link: string;
};
export type AppHeaderSettingsOptions = {
    /** 黑暗模式切换器 */
    DarkModeSwitcher?: ReactNode;
    /** 自定义调色板切换器 */
    PaletteSwitcher?: ReactNode;
    /** 自定义设置选项 */
    CustomOptions?: ReactNode;
};
declare const AppHeaderMemo: import("react").NamedExoticComponent<Props>;
export default AppHeaderMemo;
