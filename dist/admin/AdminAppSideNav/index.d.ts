import { type PaperProps } from "@mui/material/Paper";
import * as React from "react";
import { type SimpleDataRenderListProps } from "@/@common/Lists";
export type AdminAppSideNavProps = {
    sideNavProps?: PaperProps;
    isExpanded: boolean;
    logo?: {
        url?: string;
        text?: string;
    };
    navigation: {
        list: SimpleDataRenderListProps["data"];
    };
};
declare const AdminAppSideNavMemo: React.NamedExoticComponent<AdminAppSideNavProps>;
export default AdminAppSideNavMemo;
