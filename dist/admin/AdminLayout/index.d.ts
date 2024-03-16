import * as React from "react";
import { type AdminAppFooterProps } from "../AdminAppFooter";
import { type AdminAppHeaderProps } from "../AdminAppHeader";
import { type AdminAppSideNavProps } from "../AdminAppSideNav";
type AdminLayoutProps = React.PropsWithChildren<{
    appSideNavProps: Omit<AdminAppSideNavProps, "isExpanded">;
    appHeaderProps: AdminAppHeaderProps;
    appFooterProps: AdminAppFooterProps;
    handleRefreshPageContentData: () => void;
}>;
declare const AdminLayoutMemo: React.NamedExoticComponent<AdminLayoutProps>;
export default AdminLayoutMemo;
