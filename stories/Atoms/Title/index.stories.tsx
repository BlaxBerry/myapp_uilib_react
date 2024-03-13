import type { Meta, StoryObj } from "@storybook/react";

import TitleComponent from "../../../src/Typographies/Title";

const meta = {
  title: "Atoms/Title",
  component: TitleComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TitleComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  args: {
    children: "xxx",
  },
};
