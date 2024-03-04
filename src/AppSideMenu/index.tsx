import { APP_HEADER_HEIGHT } from "@/AppHeader";
import { memo, type FC, type PropsWithChildren } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import type { SxProps } from "@mui/material/styles";

export const APP_SIDE_MENU_WIDTH = 200;

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

const AppSideMenu: FC<Props> = ({
  height = `calc(100vh - ${APP_HEADER_HEIGHT}px - 10%)`,
  width = APP_SIDE_MENU_WIDTH,
  children,
  sx,
}) => {
  return (
    <Box
      component="aside"
      sx={{
        height,
        width,
        maxWidth: width,
        margin: "auto 0",
        ...sx,
      }}
    >
      <Paper elevation={2} sx={{ height: "100%", p: 1 }}>
        {children}
      </Paper>
    </Box>
  );
};

const AppSideMenuMemo = memo(AppSideMenu);
export default AppSideMenuMemo;
