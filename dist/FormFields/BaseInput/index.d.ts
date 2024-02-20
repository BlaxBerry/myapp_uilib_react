/// <reference types="react" />
import type { FormControlProps } from "@mui/material/FormControl";
import { type InputProps } from "@mui/material/Input";
import { type OutlinedInputProps } from "@mui/material/OutlinedInput";
export interface Props extends InputProps {
    variant?: FormControlProps["variant"];
    disabled?: FormControlProps["disabled"];
    error?: FormControlProps["error"];
    size?: InputProps["size"];
    /** 该属性有值时在 outlined 模式下 浮动 label 不会被 border 遮盖 */
    outlinedLabel?: OutlinedInputProps["label"];
    value?: InputProps["value"];
    onChange?: InputProps["onChange"];
}
declare const BaseInputMemo: import("react").NamedExoticComponent<Props>;
export default BaseInputMemo;
