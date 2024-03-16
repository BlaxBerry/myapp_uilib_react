import * as React from "react";

import List, { type ListProps } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  type ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon, {
  type ListItemIconProps,
} from "@mui/material/ListItemIcon";
import ListItemText, {
  type ListItemTextProps,
} from "@mui/material/ListItemText";

import type { BaseListItemData } from "../BaseList";

export type SimpleDataRenderListProps = {
  data: Array<BaseListItemData>;
  listProps?: ListProps;
  listItemButtonProps?: (listItem?: BaseListItemData) => ListItemButtonProps;
  listItemIconProps?: (listItem?: BaseListItemData) => ListItemIconProps;
  listItemTextProps?: (listItem?: BaseListItemData) => ListItemTextProps;
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
          <ListItemButton {...listItemButtonProps?.(item)}>
            {/* icon */}
            <ListItemIcon {...listItemIconProps?.(item)}>
              {item.icon}
            </ListItemIcon>

            {/* text */}
            <ListItemText primary={item.text} {...listItemTextProps?.(item)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const SimpleDataRenderListMemo = React.memo(SimpleDataRenderList);
export default SimpleDataRenderListMemo;
