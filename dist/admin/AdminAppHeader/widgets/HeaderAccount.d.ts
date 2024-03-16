import { type AvatarProps } from "@mui/material/Avatar";
import { type PopoverProps } from "@mui/material/Popover";
import * as React from "react";
import { type BaseListProps } from "@/@common";
export type HeaderAccountProps = {
    avatarProps?: AvatarProps;
    popoverProps?: PopoverProps;
    listProps?: BaseListProps;
};
declare const HeaderAccountMemo: React.NamedExoticComponent<HeaderAccountProps>;
export default HeaderAccountMemo;
