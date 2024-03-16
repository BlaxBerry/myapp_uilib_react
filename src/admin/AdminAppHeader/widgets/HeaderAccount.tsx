import Avatar, { type AvatarProps } from "@mui/material/Avatar";
import Popover, { type PopoverProps } from "@mui/material/Popover";
import * as React from "react";

import { BaseList, type BaseListProps } from "@/@common";

export type HeaderAccountProps = {
  avatarProps?: AvatarProps;
  popoverProps?: PopoverProps;
  listProps?: BaseListProps;
};

const HeaderAccount: React.FC<HeaderAccountProps> = ({
  avatarProps,
  popoverProps,
  listProps,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handlePopoverOpen = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );

  const handlePopoverClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Avatar
        onClick={handlePopoverOpen}
        sx={(theme) => ({
          borderWidth: 3,
          borderStyle: "solid",
          borderColor: "transparent",
          boxShadow: theme.shadows[2],
          ml: 2,
        })}
        {...avatarProps}
      />

      <Popover
        sx={{ mt: 1.8 }}
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            elevation: 2,
            sx: (theme) => ({ p: 1, borderRadius: theme.shape.borderRadius }),
          },
        }}
        {...popoverProps}
      >
        <BaseList {...listProps} />
      </Popover>
    </>
  );
};

const HeaderAccountMemo = React.memo(HeaderAccount);
export default HeaderAccountMemo;
