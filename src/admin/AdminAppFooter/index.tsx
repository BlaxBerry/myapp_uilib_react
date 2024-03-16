import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

import Paper, { type PaperProps } from "@mui/material/Paper";
import { SOCIAL_LINKS, type SocialLinkItemType } from "../tools";

export type AdminAppFooterProps = {
  footerProps?: PaperProps;

  copyright: string;
  socialLinks: Array<SocialLinkItemType>;
};

const AdminAppFooter: React.FC<AdminAppFooterProps> = ({
  footerProps,
  copyright,
  socialLinks,
}) => {
  return (
    <>
      <Divider sx={{ my: 2 }} />

      <Paper
        component="footer"
        sx={(theme) => ({ pt: 2, borderRadius: theme.shape.borderRadius })}
        {...footerProps}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            pb: 2,
          }}
        >
          {/* copyright */}
          <Typography
            variant="caption"
            noWrap
            sx={{ flex: 1, color: "GrayText", textAlign: "center" }}
          >
            {copyright}
          </Typography>

          {/* social links */}
          {socialLinks && (
            <Stack direction="row" spacing={1} sx={{ pl: 2 }}>
              {socialLinks?.map((linkType) => (
                <IconButton
                  key={linkType}
                  size="small"
                  href="https://github.com/BlaxBerry/myapp_uilib_react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SOCIAL_LINKS[linkType]}
                </IconButton>
              ))}
            </Stack>
          )}
        </Box>
      </Paper>
    </>
  );
};

const AdminAppFooterMemo = React.memo(AdminAppFooter);
export default AdminAppFooterMemo;
