import { memo, type FC, type ReactNode } from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

export type Props = {
  isActive: boolean;
  icon?: ReactNode;
  label: string;
};

const AppSideMenuItem: FC<Props> = ({ isActive, icon, label }) => {
  return (
    <ListItemButton selected={isActive}>
      {icon && (
        <ListItemIcon
          sx={(theme) => ({
            minWidth: 40,
            color: isActive ? theme.palette.primary.main : undefined,
          })}
        >
          {icon}
        </ListItemIcon>
      )}

      <Typography
        sx={(theme) => ({
          my: 1,
          fontWeight: isActive ? 700 : undefined,
          color: isActive ? theme.palette.primary.main : "inherit",
        })}
      >
        {label}
      </Typography>
    </ListItemButton>
  );
};

const AppSideMenuItemMemo = memo(AppSideMenuItem);
export default AppSideMenuItemMemo;
