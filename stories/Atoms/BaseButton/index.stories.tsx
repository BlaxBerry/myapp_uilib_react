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
    disabled: {
      description: "是否禁止点击",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description:
        "是否为`error`颜色的按钮，优先级：`props.error`>`props.success`>`props.color`",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    success: {
      description:
        "是否为`success`颜色的按钮，优先级：`props.error`>`props.success`>`props.color`",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    variant: {
      description: "按钮样式",
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
      table: {
        type: { summary: "contained|outlined|text" },
        defaultValue: { summary: "contained" },
      },
    },
    size: {
      description: "按钮尺寸",
      control: { type: "select" },
      options: ["small", "medium", "large"],
      table: {
        type: { summary: "small|medium|large" },
        defaultValue: { summary: "medium" },
      },
    },
    // color: {
    //   description:
    //     "按钮内置颜色，优先级：`props.error`>`props.success`>`props.color`",
    //   control: { type: "select" },
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
    disabled: false,
    error: false,
    success: false,
    variant: "contained",
    size: "medium",
  },
} satisfies Meta<typeof BaseButtonComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
};

export const SuccessExample: StoryObj<typeof meta> = {
  name: "成功状态",
  parameters: {
    controls: {
      include: ["children", "variant", "size"],
    },
  },
  args: {
    success: true,
  },
};

export const ErrorExample: StoryObj<typeof meta> = {
  name: "失败状态",
  parameters: {
    controls: {
      include: ["children", "variant", "size"],
    },
  },
  args: { error: true },
};

export const LoadingExample: StoryObj<typeof meta> = {
  name: "加载中",
  parameters: {
    controls: {
      include: ["children", "variant", "size"],
    },
  },
  args: {
    loading: true,
    disabled: true,
  },
};
