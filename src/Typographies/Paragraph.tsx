import Typography, { type TypographyProps } from "@mui/material/Typography";
import { memo, type FC } from "react";

export type Props = TypographyProps;

const Paragraph: FC<TypographyProps> = (props) => {
  return <Typography component="p" noWrap {...props} />;
};

const ParagraphMemo = memo(Paragraph);
export default ParagraphMemo;
