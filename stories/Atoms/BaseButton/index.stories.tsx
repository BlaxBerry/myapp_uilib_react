import type { Meta, StoryObj } from "@storybook/react";

import BaseButtonComponent from "../../../src/Buttons/BaseButton";

const meta = {
  title: "Atoms/BaseButton",
  component: BaseButtonComponent,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    children: {
      description: "按钮文本",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    loading: {
      description: "是否处于加载中",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    secondary: {
      description: "是否采用次要的主题色",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    disabled: {
      description: "是否禁止点击",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    // variant: {
    //   description: "MUI 属性，按钮样式",
    //   control: { type: "select" },
    //   options: ["contained", "outlined", "text"],
    //   table: {
    //     type: { summary: "contained|outlined|text" },
    //     defaultValue: { summary: "contained" },
    //   },
    // },
    // size: {
    //   description: "MUI 属性，按钮尺寸",
    //   control: { type: "select" },
    //   options: ["small", "medium", "large"],
    //   table: {
    //     type: { summary: "small|medium|large" },
    //     defaultValue: { summary: "medium" },
    //   },
    // },
    // color: {
    //   description: "MUI 属性，按钮内置颜色,
    //   options: [
    //     "primary",
    //     "secondary",
    //     "error",
    //     "success",
    //     "warning",
    //     "info",
    //     "inherit",
    //   ],
    //   table: {
    //     type: { summary: "ButtonProps['color']" },
    //     defaultValue: { summary: "primary" },
    //   },
    // },
  },
  // common args
  args: {
    children: "xxxx",
    loading: false,
    secondary: false,
    disabled: false,
  },
} satisfies Meta<typeof BaseButtonComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
};

export const PrimaryExample: StoryObj<typeof meta> = {
  name: "主要主题色",
  parameters: { controls: { include: ["children"] } },
  args: { secondary: false, children: "主要主题色" },
};

export const SecondaryExample: StoryObj<typeof meta> = {
  name: "次要主题色",
  parameters: { controls: { include: ["children"] } },
  args: { secondary: true, children: "次要主题色" },
};

export const LoadingExample: StoryObj<typeof meta> = {
  name: "加载中",
  parameters: {
    controls: {
      include: ["children"],
    },
  },
  args: {
    loading: true,
    disabled: true,
  },
};
