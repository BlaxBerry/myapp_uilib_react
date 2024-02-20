import React, { type PropsWithChildren } from "react";
import { type DialogProps } from "@mui/material/Dialog";
export type Props = PropsWithChildren<{
    isOpen?: boolean;
    handleClose: () => void;
    dialogProps?: Omit<DialogProps, "open">;
    dialogTitle?: React.ReactNode;
    dialogActions?: React.ReactNode;
}>;
declare const ControlledDialogMemo: React.NamedExoticComponent<Props>;
export default ControlledDialogMemo;
