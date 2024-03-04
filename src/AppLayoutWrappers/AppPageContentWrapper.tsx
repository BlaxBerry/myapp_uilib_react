import Box from "@mui/material/Box";
import type { SxProps } from "@mui/material/styles";
import { memo, type FC, type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  sx?: SxProps;
}>;

const AppPageContentWrapper: FC<Props> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 3,
        ...sx,
      }}
    >
      {/* <Breadcrumbs aria-label="breadcrumb">
          {[1, 2, 3].map((item) => (
            <div>xxx</div>
          ))}
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs> */}

      {children}
    </Box>
  );
};

const AppPageContentWrapperMemo = memo(AppPageContentWrapper);
export default AppPageContentWrapperMemo;
