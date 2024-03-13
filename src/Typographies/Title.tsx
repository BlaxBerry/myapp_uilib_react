import Typography, { type TypographyProps } from "@mui/material/Typography";
import { memo, type FC, type PropsWithChildren } from "react";

export type Props = PropsWithChildren<TypographyProps>;

const Title: FC<TypographyProps> = (props) => {
  return <Typography variant="h4" fontWeight={700} {...props} />;
};

const TitleMemo = memo(Title);
export default TitleMemo;
