import React, { type PropsWithChildren } from "react";

import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export type Props = PropsWithChildren<{
  isOpen?: boolean;
  handleClose: () => void;
  dialogProps?: Omit<DialogProps, "open">;
  dialogTitle?: React.ReactNode;
  dialogActions?: React.ReactNode;
}>;

const ControlledDialog: React.FC<Props> = ({
  children,
  isOpen = false,
  handleClose,
  dialogProps,
  dialogTitle,
  dialogActions,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth {...dialogProps}>
      {/* title */}
      {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}

      {/* content */}
      <DialogContent>{children}</DialogContent>

      {/* actions */}
      {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
    </Dialog>
  );
};

const ControlledDialogMemo = React.memo(ControlledDialog);
export default ControlledDialogMemo;
