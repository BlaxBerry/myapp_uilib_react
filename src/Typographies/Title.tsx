import Typography, { type TypographyProps } from "@mui/material/Typography";
import { memo, type FC } from "react";

export type Props = TypographyProps;

const Title: FC<TypographyProps> = (props) => {
  return <Typography variant="h4" fontWeight={700} {...props} />;
};

const TitleMemo = memo(Title);
export default TitleMemo;
