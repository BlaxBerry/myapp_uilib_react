import * as React from "react";

import Typography, { type TypographyProps } from "@mui/material/Typography";

export type AdminAppFooterProps = React.PropsWithChildren<TypographyProps>;

const AdminAppFooter: React.FC<AdminAppFooterProps> = (props) => {
  return <Typography component="footer" variant="caption" {...props} />;
};

const AdminAppFooterMemo = React.memo(AdminAppFooter);
export default AdminAppFooterMemo;
