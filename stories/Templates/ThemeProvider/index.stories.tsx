import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import ThemeProviderComponent from "../../../src/ThemeProvider";

const meta = {
  title: "Layouts/ThemeProvider",
  component: ThemeProviderComponent,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isDark: {
      description: "是否为黑暗主题 ( dark mode )",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
  },
  args: {
    isDark: false,
  },
} satisfies Meta<typeof ThemeProviderComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  render: (args) => {
    const handle = React.useCallback(() => {}, []);

    return <ThemeProviderComponent {...args}>xxx</ThemeProviderComponent>;
  },
};
