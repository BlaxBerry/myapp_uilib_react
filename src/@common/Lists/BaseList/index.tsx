import * as React from "react";

import Divider from "@mui/material/Divider";
import List, { type ListProps } from "@mui/material/List";
import { type ListItemProps } from "@mui/material/ListItem";
import { type ListItemButtonProps } from "@mui/material/ListItemButton";
import { type ListItemIconProps } from "@mui/material/ListItemIcon";
import { type ListItemTextProps } from "@mui/material/ListItemText";
import ListSubheader, {
  type ListSubheaderProps,
} from "@mui/material/ListSubheader";
import BaseListItem from "./widgets/BaseListItem";

export type BaseListItemData = {
  id: string;
  text: string;
  icon?: React.ReactNode;
  avatarSrc?: string;
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

const BaseList: React.FC<BaseListProps> = ({
  data,
  extraData,
  listProps,
  listSubheader,
  listItemProps,
  listItemButtonProps,
  listItemIconProps,
  listItemTextProps,
}) => {
  return (
    <List
      dense
      sx={(theme) => ({
        borderRadius: theme.shape.borderRadius,
        py: 0,
      })}
      {...listProps}
      subheader={
        listSubheader ? (
          <ListSubheader
            component="div"
            {...listSubheader}
            sx={{ lineHeight: 1, pt: 1, px: 1, pb: 1.5 }}
          />
        ) : undefined
      }
    >
      {data?.map((item) => (
        <BaseListItem
          key={item.id}
          {...{
            item,
            listItemProps,
            listItemButtonProps,
            listItemIconProps,
            listItemTextProps,
          }}
        />
      ))}

      {extraData && (
        <>
          <Divider sx={{ my: 1 }} />

          {extraData?.map((item) => (
            <BaseListItem
              key={item.id}
              {...{
                item,
                listItemProps,
                listItemButtonProps,
                listItemIconProps,
                listItemTextProps,
              }}
            />
          ))}
        </>
      )}
    </List>
  );
};

const BaseListMemo = React.memo(BaseList);
export default BaseListMemo;
