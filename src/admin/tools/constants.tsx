import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

export type SocialLinkItemType = "github" | "x";

export const SOCIAL_LINKS: Record<SocialLinkItemType, React.ReactNode> = {
  github: <GitHubIcon />,
  x: <XIcon />,
};
