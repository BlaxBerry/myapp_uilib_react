import { memo, type FC } from "react";

import FilledInput from "@mui/material/FilledInput";
import type { FormControlProps } from "@mui/material/FormControl";
import Input, { type InputProps } from "@mui/material/Input";
import OutlinedInput, {
  type OutlinedInputProps,
} from "@mui/material/OutlinedInput";

export interface Props extends InputProps {
  variant?: FormControlProps["variant"];
  disabled?: FormControlProps["disabled"];
  error?: FormControlProps["error"];
  size?: InputProps["size"];

  /** 该属性有值时在 outlined 模式下 浮动 label 不会被 border 遮盖 */
  outlinedLabel?: OutlinedInputProps["label"];

  // 受控组件时
  value?: InputProps["value"];
  onChange?: InputProps["onChange"];
}

const BaseInput: FC<Props> = ({
  variant = "outlined",
  size = "small",
  outlinedLabel,
  ...props
}) => {
  return (
    <>
      {/* standard input */}
      {variant === "standard" && (
        <Input autoComplete="off" {...{ size, ...props }} />
      )}

      {/* outlined input */}
      {variant === "outlined" && (
        <OutlinedInput
          label={outlinedLabel}
          autoComplete="off"
          {...{ size, ...props }}
        />
      )}

      {/* filled input */}
      {variant === "filled" && (
        <FilledInput autoComplete="off" {...{ size, ...props }} />
      )}
    </>
  );
};

const BaseInputMemo = memo(BaseInput);
export default BaseInputMemo;
