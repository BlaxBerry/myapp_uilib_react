import * as React from "react";
import { type PaperProps } from "@mui/material/Paper";
import { type SocialLinkItemType } from "../tools";
export type AdminAppFooterProps = {
    footerProps?: PaperProps;
    copyright: string;
    socialLinks: Array<SocialLinkItemType>;
};
declare const AdminAppFooterMemo: React.NamedExoticComponent<AdminAppFooterProps>;
export default AdminAppFooterMemo;
