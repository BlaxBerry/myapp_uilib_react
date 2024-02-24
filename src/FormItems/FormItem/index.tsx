import { memo, type FC } from "react";

import FormControl, { type FormControlProps } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import type { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import BaseInput, {
  type Props as BaseInputProps,
} from "@/FormFields/BaseInput";

export type Props = Partial<{
  id: string;
  label: string;
  labelFloat: boolean;

  fullWidth: FormControlProps["fullWidth"];
  variant: FormControlProps["variant"];
  required: FormControlProps["required"];
  disabled: FormControlProps["disabled"];
  error: FormControlProps["error"];
  errorText: string;
  sx: SxProps;

  size: BaseInputProps["size"];

  // 受控组件时
  value: BaseInputProps["value"];
  onChange: BaseInputProps["onChange"];
}>;

const FormItem: FC<Props> = ({
  id,
  variant = "outlined",
  sx,
  label,
  labelFloat = true,
  errorText,
  disabled = false,
  error = false,
  required = false,
  size = "medium",
  value,
  onChange,
}) => {
  return (
    <FormControl {...{ variant, disabled, error, required, sx }}>
      {/* label */}
      {label && (
        <>
          {/* 使用 MUI 的浮动标签 */}
          {labelFloat && (
            <InputLabel htmlFor={id} shrink={labelFloat ? undefined : true}>
              {label}
            </InputLabel>
          )}
          {/* labelFloat 为 false 时使用自定义的 Label */}
          {!labelFloat && (
            <Typography
              component="label"
              htmlFor={id}
              variant="caption"
              color={(theme) => (error ? theme.palette.error.main : "GrayText")}
            >
              {label}
            </Typography>
          )}
        </>
      )}

      {/* input */}
      <BaseInput
        id={id}
        variant={variant}
        outlinedLabel={variant === "outlined" && labelFloat ? label : undefined}
        {...{ size, value, onChange }}
      />

      {/* message */}
      {errorText && <FormHelperText sx={{ mx: 0 }}>{errorText}</FormHelperText>}
    </FormControl>
  );
};

const FormItemMemo = memo(FormItem);
export default FormItemMemo;
