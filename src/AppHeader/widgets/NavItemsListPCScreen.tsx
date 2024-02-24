import { memo, type FC } from "react";

import Typography from "@mui/material/Typography";

import type { Props as AppHeaderProps } from "..";

/** app header's nav items list in PC screen */
const NavItemsListPCScreen: FC<Pick<AppHeaderProps, "navItems">> = ({
  navItems,
}) => {
  return (
    <Typography
      component="ul"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      noWrap
      sx={{
        height: "100%",
        p: 0,
      }}
    >
      {navItems?.map(({ disabled, selected, ...item }, index) => (
        <Typography
          key={index}
          component="li"
          display="flex"
          alignItems="center"
          noWrap
          sx={{
            listStyle: "none",
            height: "100%",
            mr: 2,
            color: disabled ? "GrayText" : selected ? "inherit" : "lightgrey",
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "all 0.25s",
            "&:hover": {
              transform: `scale(${disabled || selected ? 1.0 : 1.05})`,
            },
            ...item.sx,
          }}
          onClick={disabled ? undefined : item.onClick}
          onBlur={disabled ? undefined : item.onBlur}
        >
          {item.text}
        </Typography>
      ))}
    </Typography>
  );
};

const NavItemsListPCScreenMemo = memo(NavItemsListPCScreen);
export default NavItemsListPCScreenMemo;
