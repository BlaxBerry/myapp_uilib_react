import Menu from "@mui/material/Menu";
import { memo, type FC, type PropsWithChildren } from "react";

/** app header's settings items list wrapper menu in PC screen */
const SettingsItemsWrapperPCScreen: FC<
  PropsWithChildren<{
    anchorEl: null | HTMLElement;
    isOpen: boolean;
    handleCloseMenu: () => void;
  }>
> = ({ anchorEl, isOpen, handleCloseMenu, children }) => {
  return (
    <Menu
      open={isOpen}
      onClose={handleCloseMenu}
      sx={{
        display: {
          xs: "none",
          sm: "flex",
          marginTop: 5,
        },
      }}
      // Popover's props
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      // Root & Paper's props
      slotProps={{
        // Paper' props
        paper: {
          sx: {
            overflow: "visible",
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 18,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
    >
      {children}
    </Menu>
  );
};

const SettingsItemsWrapperPCScreenMemo = memo(SettingsItemsWrapperPCScreen);
export default SettingsItemsWrapperPCScreenMemo;
