import type { Meta, StoryObj } from "@storybook/react";

import ParagraphComponent from "../../../src/Typographies/Paragraph";

const meta = {
  title: "Atoms/Paragraph",
  component: ParagraphComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ParagraphComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  args: {
    children: "xxx",
  },
};
