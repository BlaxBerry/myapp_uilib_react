import * as React from "react";

import List, { type ListProps } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  type ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon, {
  type ListItemIconProps,
} from "@mui/material/ListItemIcon";

import Typography, { type TypographyProps } from "@mui/material/Typography";
import type { BaseListItemData } from "../BaseList";

export type SimpleDataRenderListProps = {
  data: Array<BaseListItemData>;
  listProps?: ListProps;
  listItemButtonProps?: (listItem?: BaseListItemData) => ListItemButtonProps;
  listItemIconProps?: (listItem?: BaseListItemData) => ListItemIconProps;
  listItemTextProps?: (listItem?: BaseListItemData) => TypographyProps;
};

const SimpleDataRenderList: React.FC<SimpleDataRenderListProps> = ({
  data,
  listProps,
  listItemButtonProps,
  listItemIconProps,
  listItemTextProps,
}) => {
  return (
    <List {...listProps}>
      {data?.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton
            onClick={item.onClick}
            {...listItemButtonProps?.(item)}
          >
            {/* icon */}
            <ListItemIcon {...listItemIconProps?.(item)}>
              {item.icon}
            </ListItemIcon>

            {/* text */}
            <Typography {...listItemTextProps?.(item)}>{item.text}</Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const SimpleDataRenderListMemo = React.memo(SimpleDataRenderList);
export default SimpleDataRenderListMemo;
