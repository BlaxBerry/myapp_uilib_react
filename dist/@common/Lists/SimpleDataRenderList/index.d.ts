import * as React from "react";
import { type ListProps } from "@mui/material/List";
import { type ListItemButtonProps } from "@mui/material/ListItemButton";
import { type ListItemIconProps } from "@mui/material/ListItemIcon";
import { type TypographyProps } from "@mui/material/Typography";
import type { BaseListItemData } from "../BaseList";
export type SimpleDataRenderListProps = {
    data: Array<BaseListItemData>;
    listProps?: ListProps;
    listItemButtonProps?: (listItem?: BaseListItemData) => ListItemButtonProps;
    listItemIconProps?: (listItem?: BaseListItemData) => ListItemIconProps;
    listItemTextProps?: (listItem?: BaseListItemData) => TypographyProps;
};
declare const SimpleDataRenderListMemo: React.NamedExoticComponent<SimpleDataRenderListProps>;
export default SimpleDataRenderListMemo;
