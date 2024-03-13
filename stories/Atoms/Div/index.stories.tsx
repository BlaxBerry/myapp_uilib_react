import type { Meta, StoryObj } from "@storybook/react";

import DivComponent from "../../../src/Div";

const meta = {
  title: "Atoms/Div",
  component: DivComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DivComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  args: {
    children: "xxx",
  },
};
