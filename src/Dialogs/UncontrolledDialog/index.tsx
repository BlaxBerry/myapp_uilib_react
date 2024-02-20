import React, { useCallback, type PropsWithChildren } from "react";

import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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

const UncontrolledDialog: React.ForwardRefRenderFunction<Ref, Props> = (
  {
    children,
    dialogProps,
    dialogTitle,
    dialogActions,
    escapeBackdropClick = false,
  },
  ref,
) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  React.useImperativeHandle(
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
    <Dialog
      onClose={escapeBackdropClick ? undefined : handleClose}
      open={isOpen}
      fullWidth
      {...dialogProps}
    >
      {/* title */}
      {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}

      {/* content */}
      <DialogContent>{children}</DialogContent>

      {/* actions */}
      {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
    </Dialog>
  );
};

const UncontrolledDialogMemo = React.memo(React.forwardRef(UncontrolledDialog));
export default UncontrolledDialogMemo;
