import { APP_HEADER_HEIGHT } from "@/AppHeader";
import { memo, type FC, type PropsWithChildren } from "react";

import Box from "@mui/material/Box";
import Container, { type ContainerProps } from "@mui/material/Container";
import type { SxProps } from "@mui/material/styles";

type Props = PropsWithChildren<{
  /** 容器最大宽度 ( MUI Breakpoint ) */
  containerMaxWidth?: ContainerProps["maxWidth"];
  height?: number;
  sx?: SxProps;
}>;

const AppContentWrapper: FC<Props> = ({
  children,
  containerMaxWidth,
  height = `calc(100vh - ${APP_HEADER_HEIGHT}px)`,
  sx,
}) => {
  return (
    <Container maxWidth={containerMaxWidth}>
      <Box
        sx={{
          display: "flex",
          height,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

const AppContentWrapperMemo = memo(AppContentWrapper);
export default AppContentWrapperMemo;
