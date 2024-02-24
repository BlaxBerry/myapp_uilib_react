import { memo, type FC } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { SettingsItems, SocialLinkItems } from ".";
import type { Props as AppHeaderProps } from "..";
import Accordion from "../../Accordion";

/** app header's nav items list in mobile screen */
const NavItemsListMobileScreen: FC<
  Pick<
    AppHeaderProps,
    | "headerHeight"
    | "navItems"
    | "navItemsOptionTitle"
    | "copyright"
    | "socialLinks"
    | "settingsOptions"
    | "settingsOptionTitle"
  >
> = ({
  navItems,
  navItemsOptionTitle,
  copyright,
  socialLinks,
  settingsOptions,
  settingsOptionTitle,
}) => {
  return (
    <Paper
      component="nav"
      elevation={4}
      sx={{
        display: {
          xs: "block",
          sm: "none",
        },
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      <List>
        {/* nav items list */}
        <Accordion title={navItemsOptionTitle}>
          {navItems?.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                ...item.sx,
                cursor: item.disabled ? "not-allowed" : "default",
              }}
            >
              <ListItemButton selected={item.selected} disabled={item.disabled}>
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText
                  inset={!item.icon}
                  primary={item.text}
                  secondary={
                    <Typography variant="caption">{item.extraText}</Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Accordion>

        {/* settings items list in mobile screen */}
        {settingsOptions && (
          <Accordion title={settingsOptionTitle}>
            <SettingsItems settingsOptions={settingsOptions} />
          </Accordion>
        )}
      </List>

      {/* socialLinks */}
      {socialLinks && (
        <>
          <Box
            component="nav"
            display="flex"
            justifyContent="center"
            sx={{ py: 1 }}
          >
            <SocialLinkItems socialLinks={socialLinks} />
          </Box>
          <Divider />
        </>
      )}

      {/* copyright */}
      {copyright && (
        <Typography
          variant="caption"
          display="flex"
          justifyContent="center"
          color="GrayText"
          sx={{ py: 2 }}
        >
          {copyright}
        </Typography>
      )}
    </Paper>
  );
};

const NavItemsListMobileScreenMemo = memo(NavItemsListMobileScreen);
export default NavItemsListMobileScreenMemo;
