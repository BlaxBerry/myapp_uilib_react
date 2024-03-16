import Button, { type ButtonProps } from "@mui/material/Button";
import * as React from "react";

export type BaseIconButtonProps = ButtonProps;

const BaseIconButton: React.FC<BaseIconButtonProps> = (props) => {
  return (
    <Button
      variant="outlined"
      disableElevation
      {...props}
      sx={{
        borderRadius: 2,
        p: 0,
        height: 35,
        width: 35,
        minWidth: 35,
        ...props.sx,
      }}
    />
  );
};

const BaseIconButtonMemo = React.memo(BaseIconButton);
export default BaseIconButtonMemo;
