import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";
import BaseButton, { type BaseButtonProps } from "../BaseButton";

export type BaseCapsuleButtonProps = {
  leftSelected: boolean;
  rightSelected?: boolean;
  leftButtonProps: BaseButtonProps;
  rightButtonProps: BaseButtonProps;
};

const BaseCapsuleButton: React.FC<BaseCapsuleButtonProps> = ({
  leftSelected,
  leftButtonProps,
  rightButtonProps,
  rightSelected,
}: BaseCapsuleButtonProps) => {
  return (
    <ButtonGroup disableElevation variant="outlined" sx={{ mx: 0.5 }}>
      {/* left */}
      <BaseButton
        variant={leftSelected ? "contained" : "outlined"}
        {...leftButtonProps}
      />
      {/* right */}
      <BaseButton
        variant={rightSelected || !leftSelected ? "contained" : "outlined"}
        {...rightButtonProps}
      />
    </ButtonGroup>
  );
};

const BaseCapsuleButtonMemo = React.memo(BaseCapsuleButton);
export default BaseCapsuleButtonMemo;
