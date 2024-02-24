/// <reference types="react" />
import { type FormControlProps } from "@mui/material/FormControl";
import type { SxProps } from "@mui/material/styles";
import { type Props as BaseInputProps } from "@/FormFields/BaseInput";
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
    value: BaseInputProps["value"];
    onChange: BaseInputProps["onChange"];
}>;
declare const FormItemMemo: import("react").NamedExoticComponent<Partial<{
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
    value: BaseInputProps["value"];
    onChange: BaseInputProps["onChange"];
}>>;
export default FormItemMemo;
