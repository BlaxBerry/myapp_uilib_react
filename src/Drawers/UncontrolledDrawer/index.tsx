import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
  type Dispatch,
  type ForwardRefRenderFunction,
  type PropsWithChildren,
} from "react";

import Drawer, { type DrawerProps } from "@mui/material/Drawer";

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

const UncontrolledDrawer: ForwardRefRenderFunction<Ref, Props> = (
  { children, drawerProps, escapeBackdropClick },
  ref,
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      isOpen,
      setIsOpen,
      handleOpen,
      handleClose,
    }),
    [isOpen, setIsOpen, handleOpen, handleClose],
  );

  return (
    <Drawer
      open={isOpen}
      onClose={escapeBackdropClick ? undefined : handleClose}
      {...drawerProps}
    >
      {children}
    </Drawer>
  );
};

const UncontrolledDrawerMemo = memo(forwardRef(UncontrolledDrawer));
export default UncontrolledDrawerMemo;
