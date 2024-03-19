import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Avatar from "@mui/material/Avatar";
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
        selected={item.isActive}
        onClick={item.onClick}
        sx={(theme) => ({
          borderRadius: theme.shape.borderRadius,
          py: 1,
        })}
        {...listItemButtonProps}
      >
        {/* icon */}
        {item.icon && (
          <ListItemIcon sx={{ minWidth: 0, mr: 2 }} {...listItemIconProps}>
            {item.icon}
          </ListItemIcon>
        )}
        {item.avatarSrc && (
          <Avatar
            alt={item.id}
            src={item.avatarSrc}
            sx={{ width: 24, height: 24, mr: 1 }}
          />
        )}

        {/* text */}
        <ListItemText
          primaryTypographyProps={{ noWrap: true }}
          {...listItemTextProps}
          primary={item.text}
        />
      </ListItemButton>
    </ListItem>
  );
};

const BaseListItemMemo = React.memo(BaseListItem);
export default BaseListItemMemo;
