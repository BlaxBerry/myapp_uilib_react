import type { StoryObj } from "@storybook/react";
import React from "react";

import { AdminLayout } from "../../../src/admin";
import AdminAppFooterStoryMeta from "../components/AdminAppFooter.stories";
import AdminAppHeaderStoryMeta from "../components/AdminAppHeader.stories";
import AdminAppSideNavStoryMeta from "../components/AdminAppSideNav.stories";

import "./AdminAppLayout.stories.css";

const meta = {
  title: "admin/layouts/AdminAppLayout",
  tags: [],
};

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",

  render: () => {
    const handleRefreshPageContentData = React.useCallback(() => {
      console.log("refresh page data");
    }, []);

    return (
      <AdminLayout
        appSideNavProps={AdminAppSideNavStoryMeta.args}
        appHeaderProps={AdminAppHeaderStoryMeta.args}
        appFooterProps={AdminAppFooterStoryMeta.args}
        handleRefreshPageContentData={handleRefreshPageContentData}
      >
        {[...new Array(20)].map((_, i) => (
          <p key={i}>{i} - xxx</p>
        ))}
      </AdminLayout>
    );
  },
};
