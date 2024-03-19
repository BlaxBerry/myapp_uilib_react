import React from "react";
import { type BaseButtonProps } from "../BaseButton";
export type BaseCapsuleButtonProps = {
    leftSelected: boolean;
    rightSelected?: boolean;
    leftButtonProps: BaseButtonProps;
    rightButtonProps: BaseButtonProps;
};
declare const BaseCapsuleButtonMemo: React.NamedExoticComponent<BaseCapsuleButtonProps>;
export default BaseCapsuleButtonMemo;
