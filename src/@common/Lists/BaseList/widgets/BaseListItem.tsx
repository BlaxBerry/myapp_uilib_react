import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import type { BaseListItemData, BaseListProps } from "..";

type BaseListItemProps = Pick<
  BaseListProps,
  | "listItemProps"
  | "listItemButtonProps"
  | "listItemIconProps"
  | "listItemTextProps"
> & {
  item: BaseListItemData;
};

const BaseListItem: React.FC<BaseListItemProps> = ({
  item,

  listItemProps,
  listItemButtonProps,
  listItemIconProps,
  listItemTextProps,
}) => {
  return (
    <ListItem disablePadding {...listItemProps}>
      <ListItemButton
        sx={(theme) => ({
          borderRadius: theme.shape.borderRadius,
          py: 1,
        })}
        {...listItemButtonProps}
      >
        {/* icon */}
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: 2,
          }}
          {...listItemIconProps}
        >
          {item.icon}
        </ListItemIcon>

        {/* text */}
        <ListItemText {...listItemTextProps} primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
};

const BaseListItemMemo = React.memo(BaseListItem);
export default BaseListItemMemo;
