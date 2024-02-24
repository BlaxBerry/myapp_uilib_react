/// <reference types="react" />
import type { Props as AppHeaderProps } from "..";
export type AppHeaderSocialLinkIcon = "github" | "x" | "facebook" | "instagram" | "linkedin" | JSX.Element;
declare const SocialLinkItemsMemo: import("react").NamedExoticComponent<Pick<AppHeaderProps, "socialLinks">>;
export default SocialLinkItemsMemo;
