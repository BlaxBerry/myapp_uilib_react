import Box, { type BoxProps } from "@mui/material/Box";
import { memo, type FC, type PropsWithChildren } from "react";

export type Props = PropsWithChildren<BoxProps>;

const Div: FC<Props> = (props) => {
  return <Box component="div" {...props} />;
};

const DivMemo = memo(Div);
export default DivMemo;
