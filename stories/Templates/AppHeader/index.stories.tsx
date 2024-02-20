import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import AppHeaderComponent, {
  type Props as AppHeaderComponentProps,
} from "../../../src/AppHeader";

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
      description: "容器最大宽度，建议与页面布局保持一致",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      table: {
        type: { summary: "MUI BreakPoint" },
        defaultValue: { summary: "xl" },
      },
    },
    navItems: {
      description: "路由组",
      table: {
        type: { summary: "{item:React.ReactNode, link:string}[]" },
        defaultValue: { summary: "[]" },
      },
      control: { type: "object" },
    },
  },
  args: {
    headerHeight: 50,
    headerContainerMaxWidth: "lg",
  },
} satisfies Meta<typeof AppHeaderComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",

  render: (args) => {
    const handle = React.useCallback(() => {}, []);

    const navItems: AppHeaderComponentProps["navItems"] = [
      { item: "A", link: "xx", onClick: () => alert("clicked A") },
      { item: "B", link: "xx", onBlur: () => alert("focused on B") },
    ];

    return (
      <>
        <AppHeaderComponent
          {...args}
          logo={
            <img
              src="https://iconape.com/wp-content/files/qa/371510/svg/371510.svg"
              alt="logo"
              style={{ display: "inline-block", height: "35px" }}
            />
          }
          title="Xxx"
          navItems={navItems}
        />

        <p style={{ marginBottom: 0 }}>page content</p>
        <p style={{ marginTop: 0 }}>page content</p>
      </>
    );
  },
};
