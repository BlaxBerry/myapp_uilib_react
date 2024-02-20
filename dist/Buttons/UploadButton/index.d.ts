import React from "react";
import { type Props as BaseButtonProps } from "../BaseButton";
import type { UploadButtonInputProps } from "./types";
export type Props = BaseButtonProps & UploadButtonInputProps;
export declare const DEFAULT_PROPS__LIMIT_SIZE: number;
declare const UploadButtonMemo: React.NamedExoticComponent<Props>;
export default UploadButtonMemo;
