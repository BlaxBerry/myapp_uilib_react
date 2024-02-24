import type { Meta, StoryObj } from "@storybook/react";
import React, { Fragment } from "react";

import AppHeader from "../../../src/AppHeader";
import BaseButton, {
  type Props as BaseButtonProps,
} from "../../../src/Buttons/BaseButton";
import BaseInput from "../../../src/FormFields/BaseInput";
import ThemeProviderComponent from "../../../src/ThemeProvider/widget";
import AppHeaderStoryMeta from "../AppHeader/index.stories";

const meta = {
  title: "Layouts/ThemeProvider",
  component: ThemeProviderComponent,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isDarkMode: {
      description: "是否为黑暗主题 ( dark mode )",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    paletteName: {
      description:
        "自定义主题调色板的颜色名 ( 不指定即`undefined`时为MUI默认颜色 )",
      table: {
        type: { summary: "TEAL|INDIGO|VIOLET|CRIMSON" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "radio" },
      options: ["鸭羽青色", "靛青色", "紫罗兰色", "绯红色", "MUI默认"],
      mapping: {
        鸭羽青色: "TEAL",
        靛青色: "INDIGO",
        紫罗兰色: "VIOLET",
        绯红色: "CRIMSON",
        MUI默认: "undefined",
      },
    },
  },
  args: {
    isDarkMode: false,
    paletteName: undefined,
  },
} satisfies Meta<typeof ThemeProviderComponent>;

export default meta;

export const BaseExample: StoryObj<typeof meta> = {
  name: "基本使用",
  render: (args) => {
    const handle = React.useCallback(() => {}, []);

    return (
      <ThemeProviderComponent {...args}>
        <h3>Header</h3>
        <AppHeader {...AppHeaderStoryMeta.args} />

        <h3>BaseInput</h3>
        <BaseInput />

        <h3>BaseButtons</h3>
        {(["primary", "secondary"] as Array<BaseButtonProps["color"]>).map(
          (color) => (
            <Fragment key={color}>
              <BaseButton color={color}>{color}</BaseButton>
              <BaseButton color={color} variant="outlined">
                {color}
              </BaseButton>
              <BaseButton color={color} variant="text">
                {color}
              </BaseButton>
              <br />
            </Fragment>
          ),
        )}
      </ThemeProviderComponent>
    );
  },
};
