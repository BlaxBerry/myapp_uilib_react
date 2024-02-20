import {
  memo,
  type FC,
  type FocusEventHandler,
  type MouseEventHandler,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container, { type ContainerProps } from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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

const AppHeader: FC<Props> = ({
  logo,
  title,
  navItems,
  children,
  headerHeight = 50,
  headerContainerMaxWidth,
  // ...props
}) => {
  return (
    <AppBar position="sticky" enableColorOnDark sx={{ height: headerHeight }}>
      {/* customized design */}
      {children}

      {/* default design */}
      {!children && (
        <Container maxWidth={headerContainerMaxWidth} sx={{ height: "100%" }}>
          <Box display="flex" alignItems="center" sx={{ height: "100%" }}>
            {/* logo & title */}
            <Box
              component="a"
              href="/"
              display="flex"
              alignItems="center"
              sx={{ height: "100%", color: "inherit", textDecoration: "none" }}
            >
              {/* logo */}
              {logo}
              {/* title */}
              <Typography fontWeight={700} sx={{ ml: 1 }}>
                {title}
              </Typography>
            </Box>

            {/* nav items */}
            <Typography
              component="ul"
              noWrap
              display="flex"
              justifyContent="flex-end"
              sx={{ flexGrow: 1, p: 0 }}
            >
              {navItems?.map((element) => (
                <Box
                  key={element.link}
                  component="li"
                  style={{
                    margin: "0 0.5rem",
                    listStyle: "none",
                    cursor: "pointer",
                  }}
                  sx={element.sx}
                  onClick={element.onClick}
                  onBlur={element.onBlur}
                >
                  {element.item}
                </Box>
              ))}
            </Typography>
          </Box>
        </Container>
      )}
    </AppBar>
  );
};

const AppHeaderMemo = memo(AppHeader);
export default AppHeaderMemo;
