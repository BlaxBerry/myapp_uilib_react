import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { AdminAppHeader } from "../../../src/admin";

const meta = {
  title: "admin/components/AdminAppHeader",
  component: AdminAppHeader,
  args: {
    headerBreadcrumbs: {
      list: [
        { id: "home", text: "首页", icon: <HomeOutlinedIcon /> },
        { id: "home", text: "流程图", icon: <AccountTreeOutlinedIcon /> },
        { id: "home", text: "列表" },
      ],
    },
    headAccount: {
      avatarProps: {
        alt: "Account",
        src: "https://avatars.githubusercontent.com/u/73395592?v=4",
      },
      listProps: {
        listSubheader: {
          children: "blaxberry@123.example.com",
        },
        data: [
          {
            id: "edit-account",
            text: "编辑资料",
            icon: <EditNoteRoundedIcon />,
            onClick: () => {},
          },
        ],
        extraData: [
          {
            id: "exit-account",
            text: "退出登陆",
            icon: <ExitToAppRoundedIcon />,
            onClick: () => {},
          },
        ],
      },
    },
  },
} satisfies Meta<typeof AdminAppHeader>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const ExampleBase: Stroy = {
  name: "基本使用",

  render: (args) => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
    const toggleExpand = React.useCallback(() => {
      setIsExpanded((s) => !s);
    }, []);

    return (
      <AdminAppHeader {...args} headSideNav={{ isExpanded, toggleExpand }} />
    );
  },
};
