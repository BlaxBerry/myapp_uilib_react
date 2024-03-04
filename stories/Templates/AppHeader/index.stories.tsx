import StarIcon from "@mui/icons-material/Star";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import AppHeaderComponent from "../../../src/AppHeader";
import {
  ThemeDarkModeSwitcher,
  ThemePaletteSwitcher,
} from "../../../src/ThemeSwitchers";

const meta = {
  title: "Layouts/AppHeader",
  component: AppHeaderComponent,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    headerHeight: {
      description: "AppHeader 的`height`",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "50" },
      },
      control: { type: "number" },
    },
    headerContainerMaxWidth: {
      description: "容器最大宽度 ( 建议与页面布局保持一致 )",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: { summary: "MUI BreakPoint" },
        defaultValue: { summary: "xl" },
      },
    },
    logoURL: {
      description: "Logo 图片的URL",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "text" },
    },
    title: {
      description: "标题文字/组件",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "text" },
    },
    onClickTitle: {
      description: "Logo、标题的点击事件",
      table: {
        type: { summary: "() => void" },
        defaultValue: { summary: "undefined" },
      },
    },
    navItems: {
      description: "路由组",
      table: {
        type: { summary: "Array<AppHeaderNavItem>" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "object" },
    },
    showNavItemsInPCScreen: {
      description: "是否在PC页面下展示路由组",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    copyright: {
      description: "版权信息，仅在小屏幕下展示在路由组列表底部",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    socialLinks: {
      description: "外部链接组",
      table: {
        type: { summary: "Array<AppHeaderSocialLinkIcon>" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "object" },
    },
    settingsOptions: {
      description: "设置选项组",
      table: {
        type: { summary: "Array<AppHeaderSettingsOptions>" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "object" },
    },
    AppBarProps: {
      description:
        "MUI [AppBarProps](https://mui.com/material-ui/api/app-bar/)",
      control: { type: "object" },
      table: {
        type: { summary: "MUI AppBarProps" },
        defaultValue: { summary: "undefined" },
      },
    },
    sx: {
      description: "MUI SxProps ( 优先度高于`AppBarProps` )",
      control: { type: "object" },
      table: {
        type: { summary: "MUI AppBarProps" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  args: {
    headerHeight: 50,
    headerContainerMaxWidth: "lg",
    logoURL: "https://iconape.com/wp-content/files/qa/371510/svg/371510.svg",
    title: "Xxx",
    onClickTitle: () => {},
    navItems: [
      {
        text: "A-Item",
        sx: {},
        onClick: () => alert("clicked A"),
        onBlur: () => {},
      },
      {
        text: "B-Item",
        icon: <StarIcon />,
        selected: true,
        sx: {},
        onClick: () => alert("clicked B"),
        onBlur: () => {},
      },
      {
        text: "C-Item",
        disabled: true,
        extraText: "🛠️开发中...",
        onClick: () => alert("clicked C"),
      },
    ],
    showNavItemsInPCScreen: true,
    copyright: `Copyright © ${new Date().getFullYear()} MyApp UI Lib ( React )`,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/BlaxBerry/myapp_uilib_react",
      },
      {
        icon: "facebook",
        link: "https://www.facebook.com/",
      },
      { icon: "x", link: "https://twitter.com/" },
      { icon: <StarIcon />, link: "" },
    ],
    settingsOptions: {
      DarkModeSwitcher: (
        <ThemeDarkModeSwitcher
          labelText={"切换主题模式"}
          value={true}
          onChange={(v) => console.log(v)}
        />
      ),
      PaletteSwitcher: (
        <ThemePaletteSwitcher
          labelText={"切换主题色调"}
          value="VIOLET"
          onChange={(v) => console.log(v)}
        />
      ),
      CustomOptions: (
        <div>
          <section>CustomOption</section>
          <section>CustomOption</section>
        </div>
      ),
    },
  },
} satisfies Meta<typeof AppHeaderComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",

  render: (args) => {
    const onClickTitle = React.useCallback(
      () => alert("clicked title & logo"),
      [],
    );

    return (
      <>
        <AppHeaderComponent {...args} onClickTitle={onClickTitle} />

        {[...new Array(5)]
          .map(() => "page content")
          .map((str, index) => (
            <p key={index} style={{ margin: 0 }}>
              {`${index} ${str}`}
            </p>
          ))}
      </>
    );
  },
};

export const CustomizedExample: StoryObj<typeof meta> = {
  name: "自定义",
  parameters: {
    controls: {
      include: [""],
    },
  },
  render: (args) => {
    return (
      <>
        <AppHeaderComponent
          {...args}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "darkorange",
            px: 2,
          }}
        >
          <img
            src={
              "https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png"
            }
            alt="logo"
            loading="lazy"
            style={{ display: "inline-block", height: "60%" }}
          />

          <small style={{ marginLeft: 10 }}>v 0.0.0</small>
        </AppHeaderComponent>

        {[...new Array(5)]
          .map(() => "page content")
          .map((str, index) => (
            <p key={index} style={{ margin: 0 }}>
              {`${index} ${str}`}
            </p>
          ))}
      </>
    );
  },
};
