import { type Dispatch, type PropsWithChildren } from "react";
import { type DrawerProps } from "@mui/material/Drawer";
export type Ref = {
    isOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
    handleOpen: () => void;
    handleClose: () => void;
};
export type Props = PropsWithChildren<{
    drawerProps?: DrawerProps;
    escapeBackdropClick?: boolean;
}>;
declare const UncontrolledDrawerMemo: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<{
    drawerProps?: DrawerProps | undefined;
    escapeBackdropClick?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<Ref>>>;
export default UncontrolledDrawerMemo;
