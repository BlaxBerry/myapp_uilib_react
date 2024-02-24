import { memo, type FC } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import IconButton from "@mui/material/IconButton";

import type { Props as AppHeaderProps } from "..";

export type AppHeaderSocialLinkIcon =
  | "github"
  | "x"
  | "facebook"
  | "instagram"
  | "linkedin"
  | JSX.Element;

/** 获取内置外部链接的图标 */
function getSocialLinkIcon(
  icon: AppHeaderSocialLinkIcon,
): JSX.Element | undefined {
  switch (icon) {
    case "github":
      return <GitHubIcon />;
    case "x":
      return <XIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    default:
      return icon;
  }
}

const SocialLinkItems: FC<Pick<AppHeaderProps, "socialLinks">> = ({
  socialLinks,
}) => {
  return (
    <>
      {socialLinks?.map((item, index) => (
        <a
          key={index}
          href={item.link}
          rel="noreferrer noopener"
          target="_blank"
        >
          <IconButton>{getSocialLinkIcon(item.icon)}</IconButton>
        </a>
      ))}
    </>
  );
};

const SocialLinkItemsMemo = memo(SocialLinkItems);
export default SocialLinkItemsMemo;
