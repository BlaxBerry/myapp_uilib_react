import * as React from "react";

import Box, { type BoxProps } from "@mui/material/Box";
import { AdminAppStyle } from "../tools";

export type AdminAppContentProps = React.PropsWithChildren<{
  contentProps?: BoxProps;
  headerComponent?: React.ReactNode;
}>;

const AdminAppContent: React.FC<AdminAppContentProps> = ({
  contentProps,

  headerComponent,
  children,
}) => {
  return (
    <Box {...contentProps}>
      {headerComponent}

      <Box
        sx={{
          pt: 2,
          overflowY: "scroll",
          height: `calc(100vh - ${AdminAppStyle.AdminAppHeader.height}px - 48px)`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const AdminAppContentMemo = React.memo(AdminAppContent);
export default AdminAppContentMemo;
