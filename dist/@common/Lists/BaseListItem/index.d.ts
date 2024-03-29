import * as React from "react";
import { type AvatarProps } from "@mui/material/Avatar";
import { type ListItemProps } from "@mui/material/ListItem";
import { type ListItemButtonProps } from "@mui/material/ListItemButton";
import { type ListItemIconProps } from "@mui/material/ListItemIcon";
import { type ListItemTextProps } from "@mui/material/ListItemText";
export type BaseListItemProps = {
    iconComponent?: React.ReactNode;
    customIconSrc?: string;
    customIconAlt?: string;
    primaryContent?: React.ReactNode;
    secondaryContent?: React.ReactNode;
    listItemProps?: ListItemProps;
    listItemButtonProps?: ListItemButtonProps;
    listItemIconProps?: ListItemIconProps;
    customIconProps?: AvatarProps;
    listItemTextProps?: ListItemTextProps;
};
declare const BaseListItemMemo: React.NamedExoticComponent<BaseListItemProps>;
export default BaseListItemMemo;
