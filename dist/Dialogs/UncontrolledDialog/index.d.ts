import React, { type PropsWithChildren } from "react";
import { type DialogProps } from "@mui/material/Dialog";
export type Props = PropsWithChildren<{
    dialogProps?: Omit<DialogProps, "open">;
    dialogTitle?: React.ReactNode;
    dialogActions?: React.ReactNode;
    escapeBackdropClick?: boolean;
}>;
export type Ref = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: () => void;
    handleClose: () => void;
};
declare const UncontrolledDialogMemo: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    dialogProps?: Omit<DialogProps, "open"> | undefined;
    dialogTitle?: React.ReactNode;
    dialogActions?: React.ReactNode;
    escapeBackdropClick?: boolean | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<Ref>>>;
export default UncontrolledDialogMemo;
