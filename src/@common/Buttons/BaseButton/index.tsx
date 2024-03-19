import Button, { type ButtonProps } from "@mui/material/Button";
import * as React from "react";

export type BaseButtonProps = ButtonProps;

const BaseButton: React.FC<BaseButtonProps> = (props) => {
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

const BaseButtonMemo = React.memo(BaseButton);
export default BaseButtonMemo;
