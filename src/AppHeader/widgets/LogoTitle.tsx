import { memo, type FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { Props as AppHeaderProps } from "..";

/** app header's logo & title */
const LogoTitle: FC<
  Pick<AppHeaderProps, "logoURL" | "title" | "onClickTitle">
> = ({ logoURL, title, onClickTitle }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        height: "100%",
        color: "inherit",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onClick={onClickTitle}
    >
      {/* logo */}
      <img
        src={logoURL}
        alt="logo"
        loading="lazy"
        style={{
          display: "inline-block",
          height: "60%",
        }}
      />

      {/* title */}
      <Typography fontWeight={700} sx={{ fontFamily: "monospace", ml: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};

const LogoTitleMemo = memo(LogoTitle);
export default LogoTitleMemo;
