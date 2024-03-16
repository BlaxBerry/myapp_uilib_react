import * as React from "react";
import type { BaseListItemData, BaseListProps } from "..";
type BaseListItemProps = Pick<BaseListProps, "listItemProps" | "listItemButtonProps" | "listItemIconProps" | "listItemTextProps"> & {
    item: BaseListItemData;
};
declare const BaseListItemMemo: React.NamedExoticComponent<BaseListItemProps>;
export default BaseListItemMemo;
