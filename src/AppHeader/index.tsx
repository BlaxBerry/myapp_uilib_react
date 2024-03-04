import {
  memo,
  useCallback,
  useState,
  type FC,
  type MouseEventHandler,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AppBar, { type AppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Container, { type ContainerProps } from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { type SxProps } from "@mui/material/styles";

import {
  LogoTitle,
  NavItemsListMobileScreen,
  NavItemsListPCScreen,
  SettingsItemsWrapperPCScreen,
  type AppHeaderSocialLinkIcon,
} from "./widgets";

export type AppHeaderContainerWidth = ContainerProps["maxWidth"];

export type Props = PropsWithChildren<{
  /**
   * 固定高度
   * @default 50
   */
  headerHeight?: number;
  /** 容器最大宽度 ( MUI Breakpoint ) */
  headerContainerMaxWidth?: AppHeaderContainerWidth;
  /** Logo 图片的URL */
  logoURL?: string;
  /** 标题文字/组件 */
  title?: ReactNode;
  /** Logo、标题的点击事件 */
  onClickTitle?: () => void;
  /** 路由组 */
  navItems?: Array<AppHeaderNavItem>;
  navItemsOptionTitle?: string;
  showNavItemsInPCScreen?: boolean;
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
  onClick?: () => void;
  /** 自定义点聚焦事件 */
  onBlur?: () => void;
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

export const APP_HEADER_HEIGHT = 50;

const AppHeader: FC<Props> = ({
  children,
  headerHeight = APP_HEADER_HEIGHT,
  headerContainerMaxWidth,
  logoURL,
  title,
  onClickTitle,
  navItems,
  navItemsOptionTitle = "Nav Items",
  showNavItemsInPCScreen = true,
  socialLinks,
  copyright,
  settingsOptions,
  settingsOptionTitle = "Settings",
  AppBarProps,
  sx,
  // ...props
}) => {
  // mobile screen 展示的折叠路由组菜单
  const [showMobileScreenNavItems, setShowMobileScreenNavItems] =
    useState<boolean>(false);
  const handleNavItemListCollapse = useCallback(() => {
    setShowMobileScreenNavItems((s) => !s);
  }, []);

  // pc screen 展示的下拉设置项菜单
  const [settingsMenuPCScreenAnchorEl, setSettingsMenuPCScreenAnchorEl] =
    useState<null | HTMLElement>(null);
  const isOpenSettingsMenuPCScreen = Boolean(settingsMenuPCScreenAnchorEl);
  const handleOpenSettingsMenuPCScreen: MouseEventHandler<HTMLButtonElement> =
    useCallback((e) => setSettingsMenuPCScreenAnchorEl(e.currentTarget), []);
  const handleCloseSettingsMenuPCScreen = useCallback(() => {
    setSettingsMenuPCScreenAnchorEl(null);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        enableColorOnDark
        {...AppBarProps}
        sx={{
          height: headerHeight,
          flexDirection: "row",
          ...sx,
        }}
      >
        {/* customized design */}
        {children}

        {/* default design */}
        {!children && (
          <Container maxWidth={headerContainerMaxWidth} sx={{ height: "100%" }}>
            <Box display="flex" alignItems="center" sx={{ height: "100%" }}>
              {/* logo & title */}
              <LogoTitle
                logoURL={logoURL}
                title={title}
                onClickTitle={onClickTitle}
              />

              <div style={{ flexGrow: 1 }}></div>

              {/* nav items list in PC screen */}
              {showNavItemsInPCScreen && (
                <Box
                  component="nav"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                    height: "100%",
                  }}
                >
                  <NavItemsListPCScreen navItems={navItems} />
                </Box>
              )}

              {/* nav items menu button in mobile screen */}
              <IconButton
                color="inherit"
                sx={{
                  display: {
                    xs: "flex",
                    sm: "none",
                  },
                }}
                onClick={handleNavItemListCollapse}
              >
                {showMobileScreenNavItems ? <MenuOpenIcon /> : <MenuIcon />}
              </IconButton>

              {/* settings items */}
              {settingsOptions && (
                <>
                  {/* settings items list menu in PC screen */}
                  <SettingsItemsWrapperPCScreen
                    anchorEl={settingsMenuPCScreenAnchorEl}
                    isOpen={isOpenSettingsMenuPCScreen}
                    handleCloseMenu={handleCloseSettingsMenuPCScreen}
                  >
                    {settingsOptions.DarkModeSwitcher}
                    {settingsOptions.PaletteSwitcher}
                    {settingsOptions.CustomOptions}
                  </SettingsItemsWrapperPCScreen>

                  {/* settings items menu button list in PC screen */}
                  <IconButton
                    color="inherit"
                    onClick={handleOpenSettingsMenuPCScreen}
                    sx={{
                      display: {
                        xs: "none",
                        sm: "flex",
                      },
                    }}
                  >
                    {isOpenSettingsMenuPCScreen ? (
                      <SettingsSuggestIcon />
                    ) : (
                      <SettingsIcon />
                    )}
                  </IconButton>
                </>
              )}
            </Box>
          </Container>
        )}
      </AppBar>

      {/* nav items list in mobile screen */}
      <Collapse in={showMobileScreenNavItems}>
        <NavItemsListMobileScreen
          navItems={navItems}
          navItemsOptionTitle={navItemsOptionTitle}
          copyright={copyright}
          socialLinks={socialLinks}
          settingsOptions={settingsOptions}
          settingsOptionTitle={settingsOptionTitle}
        />
      </Collapse>
    </>
  );
};

const AppHeaderMemo = memo(AppHeader);
export default AppHeaderMemo;
