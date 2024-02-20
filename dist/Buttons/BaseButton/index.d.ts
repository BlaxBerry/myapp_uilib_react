import React from "react";
import { type ButtonProps } from "@mui/material/Button";
export interface Props extends React.PropsWithChildren<ButtonProps> {
    error?: boolean;
    success?: boolean;
    loading?: boolean;
}
declare const BaseButtonMemo: React.NamedExoticComponent<Props>;
export default BaseButtonMemo;
