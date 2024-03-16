import * as React from "react";
import { type ListProps } from "@mui/material/List";
import { type ListItemProps } from "@mui/material/ListItem";
import { type ListItemButtonProps } from "@mui/material/ListItemButton";
import { type ListItemIconProps } from "@mui/material/ListItemIcon";
import { type ListItemTextProps } from "@mui/material/ListItemText";
import { type ListSubheaderProps } from "@mui/material/ListSubheader";
export type BaseListItemData = {
    id: string;
    text: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
};
export type BaseListProps = {
    data?: Array<BaseListItemData>;
    extraData?: Array<BaseListItemData>;
    listProps?: ListProps;
    listSubheader?: ListSubheaderProps;
    listItemProps?: ListItemProps;
    listItemButtonProps?: ListItemButtonProps;
    listItemIconProps?: ListItemIconProps;
    listItemTextProps?: ListItemTextProps;
};
declare const BaseListMemo: React.NamedExoticComponent<BaseListProps>;
export default BaseListMemo;
