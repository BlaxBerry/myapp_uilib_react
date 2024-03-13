import Typography, { type TypographyProps } from "@mui/material/Typography";
import { memo, type FC, type PropsWithChildren } from "react";

export type Props = PropsWithChildren<TypographyProps>;

const Paragraph: FC<Props> = (props) => {
  return <Typography component="p" {...props} />;
};

const ParagraphMemo = memo(Paragraph);
export default ParagraphMemo;
